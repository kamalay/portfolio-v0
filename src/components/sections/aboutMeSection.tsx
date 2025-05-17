"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";

export default function AboutMeSection() {
  return (
    <section id="about" className="min-h-screen w-full pt-20">
      <div className="flex flex-col gap-6">
        {/* Section Heading */}
        <div className="pl-20">
          <h1 className="text-3xl pb-1 font-semibold font-poppins tracking-wider text-text-primary-dark">
            About Me
          </h1>
          <p className="text-lg text-text-tertiary-dark font-firaCode font-medium">
            Learning, Growing, Evolving — Each Degree a Chapter in My Story
          </p>
        </div>

        {/* Section Content */}
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
          <div className="lg:w-3/4 bg-bg-secondary-dark rounded-3xl border border-border-dark p-10 space-y-4">
            <div className="text-text-secondary-dark font-firaSans text-justify space-y-4">
              <h1 className="text-3xl">Hello Again, I&#39;m Kishore ✌️.</h1>

              <p className="pb-2">
                I&#39;m a Senior Software Engineer with nearly 10 years of
                experience in the Software Development Lifecycle (SDLC), I have
                expertise in core areas such as Analysis, Design,
                Implementation, Testing, and Deployment of Object-Oriented,
                Client-Server, Web-Based and Distributed Enterprise
                Applications. Experience of development using software
                development methodologies such as Agile, Waterfall development
                and Test-Driven Development (TDD) environments and Utilized
                GitHub, JIRA, Bitbucket, Confluence for version control. Skilled
                in designing and developing Web-centric applications using
                modern technologies such as HTML5, JavaScript, ReactJS,
                ExpressJS, Typescript and worked closely with UX designers and
                leveraged Figma Design tool for Application Development
              </p>
              <p>
                Skilled in applying core Java concepts, including Collections
                Framework, OOPS fundamentals to develop robust and
                high-performance applications. Proficient in Java and
                experienced in working with a variety of Java frameworks,
                including Spring, Spring MVC, Spring Boot, Spring JPA, Spring
                JDBC, and Microservices. Proficient in writing SQL queries and
                experienced in working with diverse databases such as OracleDB,
                DB2, and VerticaDB.
              </p>
              <p>
                Reliable, resourceful, and efficient team player with good
                communication and interpersonal skills, problem solving and
                debugging skills able to adapt quickly to new technologies.
                Actively engaged in meetings with Product Owners, stakeholders
                and vendors collaborated across multiple teams to deliver
                optimal solutions. Led and mentored offshore teams and junior
                developers, providing guidance and support to ensure successful
                project execution.
              </p>
            </div>

            <button
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1IjmHBYHZLsPYcOzLM11FNWBUvlX0JMkt/view",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="inline-flex items-center gap-3 px-5 py-2 bg-bg-primary-dark border border-teal-dark text-teal-dark hover:text-teal-hover-dark hover:border-teal-hover-dark rounded-full transition-colors"
            >
              <FontAwesomeIcon icon={faFile} className="w-5 h-5" />
              <span className="font-firaCode font-medium text-md">
                View My Resume
              </span>
            </button>
          </div>

          <div className="lg:w-1/4 rounded-3xl border border-border-dark">
            <div className="w-full h-[30rem] relative">
              <Image
                src="/kishoreimg.jpeg"
                alt="Profile"
                width={400}
                height={400}
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
