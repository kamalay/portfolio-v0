'use client';

import React from 'react';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright, faHeart } from '@fortawesome/free-regular-svg-icons';

export const FooterComponentData = {
    PAGE_OWNER: {
        NAME: 'Harshavardhan Kona',
        URL: 'https://harshavardhankona.com',
    },
    BUILT_USING: {
        NAME: 'Next.js',
        URL: 'https://nextjs.org',
    },
    DEPLOYED_ON: {
        NAME: 'Vercel',
        URL: 'https://vercel.com',
    },
} as const;

export const getYear = () => {
    try {
        return new Date().getFullYear();
    } catch (error) {
        console.error('Error getting current year:', error);
        return 2024;
    }
};


const Footer: React.FC = () => {
    return (
        <footer className='bg-bg-primary-dark p-6 pb-8' aria-label='Site Footer'>
            <div className='max-w-[85rem] mx-auto'>
                <div className='flex flex-col md:flex-row justify-between items-center text-text-tertiary-dark text-sm gap-4'>
                    <div className='font-firaSans flex flex-row flex-wrap items-center tracking-wider'>
                        <FontAwesomeIcon icon={faCopyright} className='h-4 w-4 mr-1' aria-hidden='true' />
                        <span>{getYear()}</span>
                        <Link href={FooterComponentData.PAGE_OWNER.URL} className='font-poppins mx-1 font-semibold text-saffron-dark hover:text-saffron-hover-dark transition-colors duration-200'>
                            {FooterComponentData.PAGE_OWNER.NAME}
                        </Link>
                        <span>| All rights reserved.</span>
                    </div>

                    <div className='font-firaSans flex flex-row flex-wrap items-center justify-center tracking-wider'>
                        <span>Built with</span>
                        <FontAwesomeIcon icon={faHeart} className='h-4 w-4 mx-1 text-red-500' aria-hidden='true' />
                        <span>using</span>
                        <Link
                            href={FooterComponentData.BUILT_USING.URL}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='font-poppins mx-1 font-semibold text-teal-dark hover:text-teal-hover-dark transition-colors duration-200'
                            aria-label='Next.js website (opens in new tab)'
                        >
                            {FooterComponentData.BUILT_USING.NAME}
                        </Link>
                        <span>and deployed on</span>
                        <Link
                            href={FooterComponentData.DEPLOYED_ON.URL}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='font-poppins mx-1 font-semibold text-teal-dark hover:text-teal-hover-dark transition-colors duration-200'
                            aria-label='Vercel website (opens in new tab)'
                        >
                            {FooterComponentData.DEPLOYED_ON.NAME}
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
