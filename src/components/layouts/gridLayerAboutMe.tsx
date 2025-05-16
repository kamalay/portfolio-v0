'use client';
import React, { useState } from 'react';
import GridLayout, { GridItem } from '@/components/layouts/gridLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch, faCube, faRocket } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import FocusCard  from '@/components/layouts/focusCard';

export function GridLayerAboutMe() {
    return (
        <GridLayout className='max-w-7xl mx-auto md:auto-rows-[22rem]'>
            {items.map((item, i) => (
                <GridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    className={`[&>p:text-lg] ${item.className || ''}`}
                    icon={item.icon}
                />
            ))}
        </GridLayout>
    );
}

const SkeletonOne = ({ isGroupHovered }: { isGroupHovered?: boolean }) => {
    const variants = {
        initial: {
            x: 10,
            rotate: 5,
        },
        animate: {
            x: 0,
            rotate: 0,
            transition: {
                duration: 0.2,
            },
        },
    };
    const variantsSecond = {
        initial: {
            x: -10,
            rotate: -5,
        },
        animate: {
            x: 0,
            rotate: 0,
            transition: {
                duration: 0.2,
            },
        },
    };

    return (
        <motion.div
            initial='initial'
            animate={isGroupHovered ? 'animate' : 'initial'}
            className='flex flex-1 w-full h-full min-h-[6rem] flex-col space-y-2'
        >
            <motion.div
                variants={variants}
                className='flex flex-row rounded-full border border-border-dark p-2 items-center space-x-2 bg-bg-primary-dark'
            >
                <div className='h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0'/>
                <div className='w-full h-6 rounded-full pl-7 font-firaCode font-medium text-text-secondary-dark'>
                    JavaScript
                </div>
            </motion.div>
            <motion.div
                variants={variantsSecond}
                className='flex flex-row rounded-full border border-border-dark p-2 items-center space-x-2 w-3/4 ml-auto bg-bg-primary-dark'
            >
                <div className='w-full h-6 rounded-full pl-7 font-firaCode font-medium text-text-secondary-dark'>
                    Python
                </div>
                <div className='h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0'/>
            </motion.div>
            <motion.div
                variants={variants}
                className='flex flex-row rounded-full border border-border-dark p-2 items-center space-x-2 bg-bg-primary-dark'
            >
                <div className='h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0'/>
                <div className='w-full h-6 rounded-full pl-10 font-firaCode font-medium text-text-secondary-dark'>
                    Java
                </div>
            </motion.div>
            <motion.div
                variants={variantsSecond}
                className='flex flex-row rounded-full border border-border-dark p-2 items-center space-x-2 w-3/4 ml-auto bg-bg-primary-dark'
            >
                <div className='w-full h-6 rounded-full pl-12 font-firaCode font-medium text-text-secondary-dark'>
                    Go
                </div>
                <div className='h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0'/>
            </motion.div>
        </motion.div>
    );
};

const SkeletonFour = ({ isGroupHovered }: { isGroupHovered?: boolean }) => {
    const cardOne = {
        title: 'Computer Vision',
        src: 'https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    };
    const cardTwo = {
        title: 'Web Development',
        src: 'https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    };
    const cardThree = {
        title: 'Natural Language Processing',
        src: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    };

    const [hovered, setHovered] = useState<number | null>(null);

    const first = {
        initial: {
            x: 20,
            rotate: -5,
        },
        hover: {
            x: 0,
            rotate: 0,
        },
    };
    const second = {
        initial: {
            x: -20,
            rotate: 5,
        },
        hover: {
            x: 0,
            rotate: 0,
        },
    };

    return (
        <motion.div
            initial='initial'
            animate={isGroupHovered ? 'hover' : 'initial'}
            className='flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2'
        >
            <motion.div
                variants={first}
                className='h-full w-1/3 rounded-3xl bg-bg-primary-dark border-border-dark border flex flex-col items-center justify-center'
            >
                <FocusCard card={cardOne} index={0} hovered={hovered} setHovered={setHovered} />
            </motion.div>

            <motion.div className='h-full relative z-20 w-1/3 rounded-3xl bg-bg-primary-dark border border-border-dark flex flex-col items-center justify-center'>
                <FocusCard card={cardTwo} index={1} hovered={hovered} setHovered={setHovered} />
            </motion.div>

            <motion.div
                variants={second}
                className='h-full w-1/3 rounded-3xl bg-bg-primary-dark border border-border-dark flex flex-col items-center justify-center'
            >
                <FocusCard card={cardThree} index={2} hovered={hovered} setHovered={setHovered} />
            </motion.div>
        </motion.div>
    );
};

const SkeletonFive = ({ isGroupHovered }: { isGroupHovered?: boolean }) => {
    const cardOne = {
        title: 'Binge Watching',
        src: 'https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    };
    const cardTwo = {
        title: 'Caffeine',
        src: 'https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    };
    const cardThree = {
        title: 'Travel',
        src: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    };

    const [hovered, setHovered] = useState<number | null>(null);

    const first = {
        initial: {
            x: 20,
            rotate: -5,
        },
        hover: {
            x: 0,
            rotate: 0,
        },
    };
    const second = {
        initial: {
            x: -20,
            rotate: 5,
        },
        hover: {
            x: 0,
            rotate: 0,
        },
    };

    return (
        <motion.div
            initial='initial'
            animate={isGroupHovered ? 'hover' : 'initial'}
            className='flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2'
        >
            <motion.div
                variants={first}
                className='h-full w-1/3 rounded-3xl bg-bg-primary-dark border-border-dark border flex flex-col items-center justify-center'
            >
                <FocusCard card={cardOne} index={0} hovered={hovered} setHovered={setHovered} />
            </motion.div>

            <motion.div className='h-full relative z-20 w-1/3 rounded-3xl bg-bg-primary-dark border border-border-dark flex flex-col items-center justify-center'>
                <FocusCard card={cardTwo} index={1} hovered={hovered} setHovered={setHovered} />
            </motion.div>

            <motion.div
                variants={second}
                className='h-full w-1/3 rounded-3xl bg-bg-primary-dark border border-border-dark flex flex-col items-center justify-center'
            >
                <FocusCard card={cardThree} index={2} hovered={hovered} setHovered={setHovered} />
            </motion.div>
        </motion.div>
    );
};

const items = [
    {
        title: 'Domains to Work',
        description: (
            <span className='text-sm'>
        My interest and looking to be expertise in the following fields.
      </span>
        ),
        header: <SkeletonFour />,
        className: 'md:col-span-2',
        icon: <FontAwesomeIcon icon={faCube} className='h-4 w-4 text-teal-hover-dark' />,
    },
    {
        title: 'Programming',
        description: (
            <span className='text-sm'>
        Love to code in the following languages, but I&#39;m open to all.
      </span>
        ),
        header: <SkeletonOne />,
        className: 'md:col-span-1',
        icon: <FontAwesomeIcon icon={faCodeBranch} className='h-4 w-4 text-saffron-dark' />,
    },
    {
        title: 'Energy Boost',
        description: (
            <span className='text-sm'>
        My leisure time spent to recharge in personal space.
      </span>
        ),
        header: <SkeletonFive />,
        className: 'md:col-span-2',
        icon: <FontAwesomeIcon icon={faRocket} className='h-4 w-4 text-teal-dark' />,
    },
];
