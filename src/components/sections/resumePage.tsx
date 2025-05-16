'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const ResumePage = () => {
    const handleDownload = () => {
        const date = new Date();
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        // Format the date components
        const month = monthNames[date.getMonth()];
        const day = date.getDate();
        const year = date.getFullYear();

        // Create the filename with date
        const fileName = `HarshavardhanKona_Resume_${day}${month}${year}.pdf`;

        const link = document.createElement('a');
        link.href = '/resume.pdf';
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section>
            {/* Main content */}
            <main className="pt-16 min-h-screen bg-bg-primary-dark">
                <div className="max-w-5xl mx-auto px-4 py-8">
                    <div className="flex flex-col gap-4 md:gap-6">
                        {/* Page 1 - Using split PDF */}
                        <section className="bg-text-primary-dark border border-border-dark rounded-2xl shadow-lg overflow-hidden">
                            <div className="w-full aspect-[1/1.285] scale-[1.013]">
                                <object
                                    data="/resume-1.pdf#zoom=120&toolbar=0&navpanes=0&scrollbar=0"
                                    type="application/pdf"
                                    className="w-full h-full"
                                    style={{ pointerEvents: 'none' }}
                                >
                                    <p>Unable to display PDF. Please download to view.</p>
                                </object>
                            </div>
                        </section>

                        {/* Page 2 - Using split PDF */}
                        <section className="bg-text-primary-dark border-border-dark rounded-2xl shadow-lg overflow-hidden">
                            <div className="w-full aspect-[1/1.285] scale-[1.013]">
                                <object
                                    data="/resume-2.pdf#zoom=120&toolbar=0&navpanes=0&scrollbar=0"
                                    type="application/pdf"
                                    className="w-full h-full"
                                    style={{ pointerEvents: 'none' }}
                                >
                                    <p>Unable to display PDF. Please download to view.</p>
                                </object>
                            </div>
                        </section>
                    </div>
                </div>
            </main>

            {/* Fixed Download Button */}
            <button
                onClick={handleDownload}
                className="sticky bottom-8 right-8 float-right -mt-14 md:-mt-24 w-16 h-16 bg-bg-tertiary-dark rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-text-secondary-dark border border-border-dark hover:text-teal-dark hover:border-teal-dark group"
                aria-label="Download Resume"
            >
                <FontAwesomeIcon
                    icon={faDownload}
                    className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-300"
                />
            </button>
        </section>
    );
};

export default ResumePage;
