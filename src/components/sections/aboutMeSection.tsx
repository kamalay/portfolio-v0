'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
import {GridLayerAboutMe} from "@/components/layouts/gridLayerAboutMe";

export default function AboutMeSection() {
    return (
      <section id='about' className='min-h-screen w-full pt-20'>
        <div className='flex flex-col gap-6'>
            {/* Section Heading */}
            <div className='pl-20'>
                <h1 className="text-3xl pb-1 font-semibold font-poppins tracking-wider text-text-primary-dark">
                    About Me
                </h1>
                <p className="text-lg text-text-tertiary-dark font-firaCode font-medium">
                    Learning, Growing, Evolving — Each Degree a Chapter in My Story
                </p>
            </div>

            {/* Section Content */}
            <div className='max-w-7xl mx-auto flex flex-col lg:flex-row gap-6'>
                <div className='lg:w-3/4 bg-bg-secondary-dark rounded-3xl border border-border-dark p-10 space-y-4'>
                    <div className='text-text-secondary-dark font-firaSans text-justify space-y-4'>
                        <h1 className='text-3xl'>
                            Hello Again, I&#39;m Harshavardhan ✌️.
                        </h1>
                        <p className="pb-2">
                            I&#39;m a Computer Vision Engineer and Full Stack Developer with over 4 years of experience in crafting innovative solutions across diverse technological domains. My journey began with a deep fascination for image processing and computer vision, leading to multiple published research papers on advanced encryption systems and medical image processing. Throughout my career, I&#39;ve seamlessly bridged the gap between theoretical computer vision concepts and practical software engineering, developing everything from real-time autonomous navigation systems to scalable cloud applications.
                        </p>
                        <p>
                            From optimizing C++ code for embedded systems at Cognizant to developing privacy-focused ML models at UMass, and now architecting robust document management systems at Innovise Technology, I bring a unique blend of computer vision expertise and full-stack development skills. I&#39;m particularly passionate about performance optimization through GPU acceleration, containerization, and cloud infrastructure, consistently delivering significant improvements across all my projects. Let me share with you how my diverse experience could contribute to your team&#39;s success.
                        </p>
                    </div>

                    <button
                        onClick={() => window.open('https://drive.google.com/file/d/1IjmHBYHZLsPYcOzLM11FNWBUvlX0JMkt/view', '_blank', 'noopener,noreferrer')}
                        className="inline-flex items-center gap-3 px-5 py-2 bg-bg-primary-dark border border-teal-dark text-teal-dark hover:text-teal-hover-dark hover:border-teal-hover-dark rounded-full transition-colors">
                        <FontAwesomeIcon icon={faFile} className="w-5 h-5"/>
                        <span className="font-firaCode font-medium text-md">View My Resume</span>
                    </button>
                </div>

                <div className='lg:w-1/4 rounded-3xl border border-border-dark'>
                    <div className="w-full h-[30rem] relative">
                        <Image
                            src="/personal-snapshot.png"
                            alt="Profile"
                            width={400}
                            height={400}
                            className="w-full h-full object-cover rounded-3xl"
                        />
                    </div>
                </div>
            </div>

            <GridLayerAboutMe />

        </div>
      </section>
    );
}
