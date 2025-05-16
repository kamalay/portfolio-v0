'use client';

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBriefcase,
    faChevronDown,
    faChevronLeft,
    faComment,
    faTerminal,
    faUser
} from '@fortawesome/free-solid-svg-icons';

interface NavItem {
    icon: React.ReactNode;
    label: string;
    sectionId: string;
}

const navItems: NavItem[] = [
    { icon: <FontAwesomeIcon icon={faUser} />, label: 'About', sectionId: 'about' },
    { icon: <FontAwesomeIcon icon={faBriefcase} />, label: 'Experience', sectionId: 'under-construction' },
    { icon: <FontAwesomeIcon icon={faTerminal} />, label: 'Projects', sectionId: 'projects' },
    { icon: <FontAwesomeIcon icon={faComment} />, label: 'Contact', sectionId: 'contact' },
];

const MobileNav: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    const rect = entry.boundingClientRect;
                    const viewportHeight = window.innerHeight;

                    const topPercentage = (viewportHeight - rect.top) / viewportHeight * 100;
                    const bottomPercentage = (viewportHeight - rect.bottom) / viewportHeight * 100;

                    if (
                        (entry.isIntersecting && topPercentage >= 15 && topPercentage <= 85) ||
                        (entry.isIntersecting && bottomPercentage >= 15 && bottomPercentage <= 85)
                    ) {
                        setActiveSection(entry.target.id);
                    } else if (activeSection === entry.target.id) {
                        setActiveSection('');
                    }
                });
            },
            {
                threshold: [0, 0.15, 0.85, 1],
                rootMargin: '-15% 0px -15% 0px'
            }
        );

        navItems.forEach(item => {
            const element = document.getElementById(item.sectionId);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [activeSection]);

    const handleNavClick = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsExpanded(false);
        }
    };

    return (
        <div className='relative flex flex-col items-end'>
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className='
                    flex items-center justify-center
                    w-16 h-10
                    rounded-full
                    backdrop-blur-md
                    bg-bg-tertiary-dark/40
                    border border-border-dark/30
                    text-text-tertiary-dark
                    hover:text-teal-hover-dark
                    hover:border-teal-hover-dark
                    transition-all duration-300
                '
            >
                <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`
                        transform transition-transform duration-300
                        ${isExpanded ? 'rotate-180' : ''}
                    `}
                />
            </button>

            {isExpanded && (
                <div className='
                    absolute top-12
                    flex flex-col items-center gap-3
                    px-3 py-3
                    backdrop-blur-md
                    bg-bg-tertiary-dark/40
                    border border-border-dark/30
                    rounded-full
                    transition-all duration-300 ease-in-out
                    w-16
                '>
                    {navItems.map((item) => (
                        <button
                            key={item.sectionId}
                            onClick={() => handleNavClick(item.sectionId)}
                            className={`
                                w-full p-2
                                rounded-full
                                transition-colors duration-200
                                flex items-center justify-center
                                ${activeSection === item.sectionId ?
                                'bg-teal-hover-dark text-bg-primary-dark' :
                                'text-text-tertiary-dark hover:bg-teal-hover-dark hover:text-bg-primary-dark'
                            }
                            `}
                        >
                            {item.icon}
                            <span className='sr-only'>{item.label}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

const DesktopNav: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [wasExpandedBeforeScroll, setWasExpandedBeforeScroll] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    const rect = entry.boundingClientRect;
                    const viewportHeight = window.innerHeight;

                    const topPercentage = (viewportHeight - rect.top) / viewportHeight * 100;
                    const bottomPercentage = (viewportHeight - rect.bottom) / viewportHeight * 100;

                    if (
                        (entry.isIntersecting && topPercentage >= 15 && topPercentage <= 85) ||
                        (entry.isIntersecting && bottomPercentage >= 15 && bottomPercentage <= 85)
                    ) {
                        setActiveSection(entry.target.id);
                    } else if (activeSection === entry.target.id) {
                        setActiveSection('');
                    }
                });
            },
            {
                threshold: [0, 0.15, 0.85, 1],
                rootMargin: '-15% 0px -15% 0px'
            }
        );

        navItems.forEach(item => {
            const element = document.getElementById(item.sectionId);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [activeSection]);

    useEffect(() => {
        let scrollTimer: NodeJS.Timeout;

        const handleScroll = () => {
            if (isExpanded) {
                setWasExpandedBeforeScroll(true);
                setIsExpanded(false);
            }

            clearTimeout(scrollTimer);
            scrollTimer = setTimeout(() => {
                if (wasExpandedBeforeScroll) {
                    setIsExpanded(true);
                    setWasExpandedBeforeScroll(false);
                }
            }, 150);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(scrollTimer);
        };
    }, [isExpanded, wasExpandedBeforeScroll]);

    const handleNavClick = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const showItems = isExpanded || isHovered;

    return (
        <div className='relative flex items-center justify-end'>
            <div
                className='flex items-center'
                onMouseEnter={() => !isExpanded && setIsHovered(true)}
                onMouseLeave={() => !isExpanded && setIsHovered(false)}
            >
                <div className={`
                    flex items-center gap-3
                    px-2.5 py-1.5
                    backdrop-blur-md
                    bg-bg-tertiary-dark/40
                    border border-border-dark/30
                    rounded-full
                    transition-all duration-300 ease-in-out
                    ${showItems ? 'opacity-100 w-auto' : 'opacity-0 w-0 overflow-hidden'}
                `}>
                    {navItems.map((item) => (
                        <button
                            key={item.sectionId}
                            onClick={() => handleNavClick(item.sectionId)}
                            className={`
                                flex items-center gap-1.5 md:gap-2
                                px-2.5 py-1.5
                                text-sm md:text-sm lg:text-base
                                rounded-full
                                transition-colors duration-200
                                ${activeSection === item.sectionId ?
                                'bg-teal-hover-dark text-bg-primary-dark' :
                                'text-text-tertiary-dark hover:bg-teal-hover-dark hover:text-bg-primary-dark'
                            }
                            `}
                        >
                            {item.icon}
                            <span className='whitespace-nowrap'>{item.label}</span>
                        </button>
                    ))}
                </div>

                <button
                    onClick={() => {
                        setIsExpanded(!isExpanded);
                        if (isExpanded) {
                            setIsHovered(false);
                        }
                    }}
                    className={`
        flex items-center justify-center
        w-14 md:w-16 lg:w-[4.5rem]
        h-9 md:h-10 lg:h-12
        ml-1.5 md:ml-2
        rounded-full
        backdrop-blur-md
        bg-bg-tertiary-dark/40
        border border-border-dark/30
        text-text-tertiary-dark 
        hover:text-teal-hover-dark 
        hover:border-teal-hover-dark
        transition-all duration-300
    `}
                >
                    <FontAwesomeIcon
                        icon={faChevronLeft}
                        width='16'
                        height='16'
                        className={`
            w-4 md:w-4 lg:w-5 h-4 md:h-4 lg:h-5
            transform transition-transform duration-300
            ${showItems ? 'rotate-180' : ''}
        `}
                    />
                </button>
            </div>
        </div>
    );
};

export default function NavItems() {
    const [isMobile, setIsMobile] = useState<boolean | null>(null);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 834);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    if (isMobile === null) {
        return null;
    }

    return (
        <div className='relative'>
            {isMobile ? <MobileNav /> : <DesktopNav />}
        </div>
    );
}
