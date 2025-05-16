'use client';

import { useEffect, useState } from 'react';
import PageLogo from '@/components/layouts/pageLogo';
import NavItems from '@/components/layouts/navItems';

export default function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200
            ${isScrolled ? 'backdrop-blur-md bg-bg-tertiary-dark/40' : 'bg-transparent'}
        `}>
            <nav className='max-w-[90rem] mx-auto px-6 sm:px-6 lg:px-8 pt-4 lg:pt-3 pb-4 lg:pb-1 flex justify-between items-start'>

                <div className='pt-1'>
                    <PageLogo />
                </div>

                <NavItems />
            </nav>
        </div>
    );
}
