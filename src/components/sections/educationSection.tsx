"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import {
  faAward,
  faChalkboard,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

interface Education {
  universityName: string;
  degree: string;
  major: string;
  location: string;
  duration: string;
  gpa: string;
  courses: string[];
}

const educationData: Education[] = [
  {
    universityName: "University of Houston - clearlake",
    degree: "Master of Science",
    major: "Software Engineering",
    location: "Houston, TX USA",
    duration: "August 2014 - Dec 2015",
    gpa: "3.41/4.0",
    courses: [
      "Software Testing",
      "Software Project Management",
      "DataMining",
      "Big Data Analytics",
      "Configuration Management",
      "Agile Software Development",
      "Software Engineering",
    ],
  },
  {
    universityName: "Vignan Institute of Technology and Science",
    degree: "Bachelor of Technology",
    major: "Computer Science and Engineering",
    location: "Hyderabad, India",
    duration: "August 2009 - May 2013",
    gpa: "7.8/10.0",
    courses: [
      "Java Programming",
      "C++ Programming",
      "Data Structures and Algorithms",
      "Database Management Systems",
      "Operating Systems",
      "Software Engineering",
      "Computer Architecture",
      "C Programming",
    ],
  },
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
    <section id="education" className="w-full pt-20">
      {/* Main Container - For heading and tagline */}

      <div className="flex flex-col gap-6">
        <div className="pl-20">
          <h1 className="text-2xl sm:text-3xl font-semibold font-poppins tracking-wider text-text-primary-dark">
            Education
          </h1>
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-[85rem] mx-auto mt-6 px-6 sm:px-8 md:px-10">
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
                                            ${
                                              selectedUniversity === index
                                                ? "bg-bg-secondary-dark"
                                                : "hover:bg-bg-tertiary-dark"
                                            }`}
                  >
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
                      <FontAwesomeIcon
                        icon={faCalendarDays}
                        className="h-4 w-4 text-teal-hover-dark"
                      />
                      <span>{educationData[selectedUniversity].duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm sm:text-base">
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        className="h-4 w-4 text-teal-hover-dark"
                      />
                      <span>{educationData[selectedUniversity].location}</span>
                    </div>
                  </div>
                  {/* GPA Row */}
                  <div className="flex items-center gap-2 text-sm sm:text-base tracking-tighter">
                    <FontAwesomeIcon
                      icon={faAward}
                      className="h-4 w-4 text-saffron-dark"
                    />
                    <span>GPA: {educationData[selectedUniversity].gpa}</span>
                  </div>
                </div>

                {/* Desktop Layout (md and above) */}
                <div className="hidden md:flex items-center justify-between font-firaSans text-sm md:text-base lg:text-lg">
                  <div className="flex items-center gap-1 md:gap-2">
                    <FontAwesomeIcon
                      icon={faCalendarDays}
                      className="h-4 w-4 text-teal-hover-dark"
                    />
                    <span>{educationData[selectedUniversity].duration}</span>
                  </div>
                  <div className="flex items-center gap-2 tracking-tighter">
                    <FontAwesomeIcon
                      icon={faAward}
                      className="h-4 w-4 text-saffron-dark"
                    />
                    <span className="tracking-wide">
                      GPA: {educationData[selectedUniversity].gpa}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="h-4 w-4 text-teal-hover-dark"
                    />
                    <span>{educationData[selectedUniversity].location}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex flex-row gap-2">
                  <FontAwesomeIcon
                    icon={faChalkboard}
                    className="mt-0.5 w-5 h-5 text-teal-hover-dark"
                  />
                  <h3 className="text-sm sm:text-base font-medium mb-3 text-text-secondary-dark font-poppins tracking-wider">
                    Relevant Coursework
                  </h3>
                </div>
                {renderCoursePills(educationData[selectedUniversity].courses)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
