"use client";

import { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import {faAward, faChalkboard, faCheck, faLocationDot} from "@fortawesome/free-solid-svg-icons";

interface Education {
    universityName: string;
    universityLogo: string;
    degree: string;
    major: string;
    location: string;
    duration: string;
    gpa: string;
    courses: string[];
    achievements: string[];
}

const educationData: Education[] = [
    {
        universityName: "University of Massachusetts",
        universityLogo: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
        degree: "Master of Science",
        major: "Computer Science",
        location: "Boston, MA, USA",
        duration: "January 2022 - May 2023",
        gpa: "3.8/4.0",
        courses: [
            "Advanced Algorithms",
            "Machine Learning",
            "Deep Learning",
            "Computer Vision",
            "Natural Language Processing",
            "Cloud Computing",
            "Big Data Analytics",
            "Distributed Systems",
            "Advanced Database Systems",
            "Software Engineering"
        ],
        achievements: [
            "Department Academic Topper",
            "Technical Lead of IEEE Student Branch",
            "Graduate Research Assistant - Deep Learning Lab",
            "Published 3 research papers at IEEE and Springer",
            "Published research paper on Advanced Neural Networks"
        ],
    },
    {
        universityName: "SASTRA Deemed University",
        universityLogo: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
        degree: "Bachelor of Technology",
        major: "Electronics and Communication",
        location: "Thanjavur, TN, India",
        duration: "July 2016 - July 2020",
        gpa: "7.8/10.0",
        courses: [
            "Digital Signal Processing",
            "Embedded Systems",
            "VLSI Design",
            "Communication Systems",
            "Control Systems",
            "Computer Networks",
            "Digital Electronics",
            "Microprocessors",
            "Antenna Design",
            "RF Engineering"
        ],
        achievements: [
            "Department Academic Topper",
            "Technical Lead of IEEE Student Branch",
            "Graduate Research Assistant - Deep Learning Lab",
            "Published 3 research papers at IEEE and Springer",
            "Published research paper on Advanced Neural Networks"
        ],
    }
];

export default function EducationSection() {
    const [selectedUniversity, setSelectedUniversity] = useState(0);

    const renderCoursePills = (courses: string[]) => {
        const midPoint = Math.ceil(courses.length / 2);
        const firstRow = courses.slice(0, midPoint);
        const secondRow = courses.slice(midPoint);

        return (
            <div className="flex flex-col gap-3 overflow-x-auto hide-scrollbar pb-2">
                <div className="flex gap-3 min-w-min">
                    {firstRow.map((course, index) => (
                        <span
                            key={index}
                            className="px-3 py-1.5 rounded-full bg-bg-secondary-dark text-sm whitespace-nowrap text-text-tertiary-dark"
                        >
                            {course}
                        </span>
                    ))}
                </div>
                <div className="flex gap-3 min-w-min">
                    <div className="px-3" />
                    {secondRow.map((course, index) => (
                        <span
                            key={index}
                            className="px-3 py-1.5 rounded-full bg-bg-secondary-dark text-sm whitespace-nowrap text-text-tertiary-dark"
                        >
                            {course}
                        </span>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <section id='education' className='w-full pt-20'>
            {/* Main Container - For heading and tagline */}
            <div className='max-w-[90rem] mx-auto px-6 lg:px-8'>
                <div className='flex flex-col gap-1'>
                    <h1 className="text-2xl sm:text-3xl font-semibold font-poppins tracking-wider text-text-primary-dark">
                        Education
                    </h1>
                    <p className="text-sm sm:text-md md:text-lg text-text-tertiary-dark font-firaCode font-medium">
                        Learning, Growing, Evolving — Each Degree a Chapter in My Story
                    </p>
                </div>
            </div>

            {/* Content Container */}
            <div className='max-w-[85rem] mx-auto mt-6 px-6 sm:px-8 md:px-10'>
                <div className="border-l-[3px] border-border-dark">
                    {/* Main Content Block */}
                    <div className="flex flex-col xl:flex-row gap-6 pl-6">
                        {/* University Selection */}
                        <div className="w-full xl:w-96">
                            {/* University selection container with horizontal scroll for sm-md */}
                            <div className="flex flex-col sm:flex-row xl:flex-col gap-2 sm:gap-3 overflow-x-auto sm:overflow-x-auto md:overflow-x-auto xl:overflow-x-visible pb-2 xl:pb-0">
                                {educationData.map((education, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedUniversity(index)}
                                        className={`flex items-start gap-4 p-4 rounded-xl transition-all duration-300 
                                            min-w-[300px] sm:min-w-[340px] xl:min-w-0 xl:w-[380px]
                                            ${selectedUniversity === index
                                            ? 'bg-bg-secondary-dark'
                                            : 'hover:bg-bg-tertiary-dark'
                                        }`}
                                    >
                                        <Image
                                            width={100}
                                            height={100}
                                            src={education.universityLogo}
                                            alt={education.universityName}
                                            className="h-12 w-12 xl:h-14 xl:w-14 rounded-lg shadow-md shadow-[#1C2025]/10 object-cover object-center flex-shrink-0"
                                        />
                                        <div className="flex flex-col min-w-0">
                                            <h2 className="font-medium font-poppins text-text-secondary-dark text-sm sm:text-base md:text-lg truncate">
                                                {education.universityName}
                                            </h2>
                                            <p className="text-sm md:text-base font-medium font-firaCode text-text-tertiary-dark text-left tracking-wide truncate">
                                                {education.degree}
                                            </p>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Content Block - Currently Empty */}
                        <div className="flex-1">
                            {/* Degree & Major Heading */}
                            <h2 className="text-base sm:text-lg md:text-xl font-bold text-text-secondary-dark font-poppins">
                                {educationData[selectedUniversity].degree}
                                <span className="text-text-tertiary-dark"> in </span>
                                <span className="text-teal-dark">
                                    {educationData[selectedUniversity].major}
                                </span>
                            </h2>

                            {/* Metadata Row Container */}
                            <div className="mt-3 text-text-tertiary-dark font-medium">
                                {/* Mobile Layout (till md) */}
                                <div className="block md:hidden flex flex-col gap-2">
                                    {/* Duration and Location Row */}
                                    <div className="flex justify-between items-center font-firaSans">
                                        <div className="flex items-center gap-2 text-sm sm:text-base">
                                            <FontAwesomeIcon icon={faCalendarDays}
                                                             className="h-4 w-4 text-teal-hover-dark"/>
                                            <span>{educationData[selectedUniversity].duration}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm sm:text-base">
                                            <FontAwesomeIcon icon={faLocationDot}
                                                             className="h-4 w-4 text-teal-hover-dark"/>
                                            <span>{educationData[selectedUniversity].location}</span>
                                        </div>
                                    </div>
                                    {/* GPA Row */}
                                    <div
                                        className="flex items-center gap-2 text-sm sm:text-base tracking-tighter">
                                        <FontAwesomeIcon icon={faAward} className="h-4 w-4 text-saffron-dark"/>
                                        <span>GPA: {educationData[selectedUniversity].gpa}</span>
                                    </div>
                                </div>

                                {/* Desktop Layout (md and above) */}
                                <div
                                    className="hidden md:flex items-center justify-between font-firaSans text-sm md:text-base lg:text-lg">
                                    <div className="flex items-center gap-1 md:gap-2">
                                        <FontAwesomeIcon icon={faCalendarDays}
                                                         className="h-4 w-4 text-teal-hover-dark"/>
                                        <span>{educationData[selectedUniversity].duration}</span>
                                    </div>
                                    <div className="flex items-center gap-2 tracking-tighter">
                                        <FontAwesomeIcon icon={faAward} className="h-4 w-4 text-saffron-dark"/>
                                        <span className="tracking-wide">GPA: {educationData[selectedUniversity].gpa}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FontAwesomeIcon icon={faLocationDot} className="h-4 w-4 text-teal-hover-dark"/>
                                        <span>{educationData[selectedUniversity].location}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6">
                                <div className="flex flex-row gap-2">
                                    <FontAwesomeIcon icon={faChalkboard} className="mt-0.5 w-5 h-5 text-teal-hover-dark" />
                                    <h3 className="text-sm sm:text-base font-medium mb-3 text-text-secondary-dark font-poppins tracking-wider">
                                        Relevant Coursework
                                    </h3>
                                </div>
                                {renderCoursePills(educationData[selectedUniversity].courses)}
                            </div>

                            <div className="mt-4 flex flex-col gap-3">
                                {educationData[selectedUniversity].achievements.map((achievement, index) => (
                                    <div key={index} className="flex items-start gap-2">
                                        <FontAwesomeIcon
                                            icon={faCheck}
                                            className="h-4 w-4 text-saffron-hover-dark mt-1"
                                        />
                                        <span
                                            className="text-text-secondary-dark tracking-wider text-sm md:text-base font-firaSans">
                                            {achievement}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
