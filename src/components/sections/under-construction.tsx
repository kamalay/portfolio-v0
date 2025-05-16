'use client';

import React, { useEffect, useRef } from 'react';
import type { AnimationItem } from 'lottie-web';
import animationData from '@/lib/under-construction.json';

interface UnderConstructionProps {
    className?: string;
}

const UnderConstruction: React.FC<UnderConstructionProps> = ({
                                                                 className = ''
                                                             }) => {
    const animationContainer = useRef<HTMLDivElement>(null);
    const animationInstance = useRef<AnimationItem | null>(null);

    useEffect(() => {
        const loadLottie = async () => {
            if (!animationContainer.current) return;

            try {
                const lottieModule = await import('lottie-web');
                const lottie = lottieModule.default;

                animationInstance.current = lottie.loadAnimation({
                    container: animationContainer.current,
                    renderer: 'svg',
                    loop: true,
                    autoplay: true,
                    animationData: animationData,
                });
            } catch (error) {
                console.error('Error loading Lottie animation:', error);
            }
        };

        loadLottie();

        return () => {
            if (animationInstance.current) {
                animationInstance.current.destroy();
            }
        };
    }, []);

    return (
        <section id='under-construction'
                 className='min-h-screen pt-16 flex flex-col items-center justify-center gap-2 bg-bg-primary-dark'
        >
            <div
                ref={animationContainer}
                className={`
                    w-[300px] h-[300px] 
                    sm:w-[400px] sm:h-[400px]
                    lg:w-[500px] lg:h-[500px]
                    flex items-center justify-center mt-20 md:mt-4
                    ${className}
                `}
            />
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-crimsonPro tracking-wider font-bold text-text-secondary-dark'>
                Work In Progress
            </h2>
            <p className='text-base sm:text-lg text-text-tertiary-dark font-firaSans text-center max-w-md tracking-wider px-4'>
                I&#39;m working on something amazing. <br/> Please check back soon !
            </p>
        </section>
    );
};

export default UnderConstruction;
