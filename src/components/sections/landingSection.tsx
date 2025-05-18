"use client";

import React, { useState, useEffect, useMemo } from "react";

export default function LandingSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(currentText);

  const letters = useMemo(() => "~!@#$%^&*<>?|/{}[]:;(CV)=+", []);

  const roles = useMemo(
    () => [
      "Software Engineer",
      "Full Stack Engineer",
      "Full Stack Developer",
      "Machine Learning Engineer",
      "Computer Vision Engineer",
      "Computer Vision Researcher",
      "Software Developer",
    ],
    []
  );

  useEffect(() => {
    setIsVisible(true);
    setCurrentText(roles[0]);

    const animateText = () => {
      const nextIndex = (currentIndex + 1) % roles.length;
      const nextRole = roles[nextIndex];
      let iteration = 0;

      const interval = setInterval(() => {
        setCurrentText(
          nextRole
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return nextRole[index];
              }
              return letter === " "
                ? " "
                : letters[Math.floor(Math.random() * letters.length)];
            })
            .join("")
        );

        if (iteration >= nextRole.length) {
          clearInterval(interval);
        }
        iteration += 1 / 3;
      }, 60);

      setCurrentIndex(nextIndex);
      return () => clearInterval(interval);
    };

    const changeInterval = setInterval(animateText, 6000);
    return () => clearInterval(changeInterval);
  }, [currentIndex, letters, roles]);

  return (
    <section
      id="home"
      className="w-full h-[100dvh] relative isolate overflow-hidden"
    >
      {/* Noise Filter Container */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <svg className="absolute inset-0 h-full w-full">
          <defs>
            <filter id="noise">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.65"
                numOctaves="3"
                stitchTiles="stitch"
              />
              <feColorMatrix type="saturate" values="0" />
            </filter>
          </defs>
          <rect width="100%" height="100%" filter="url(#noise)" opacity="0.5" />
        </svg>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-bg-primary-dark to-bg-primary-dark" />

      {/* Main Container for Content and Social Icons */}
      <div className="relative h-full w-full mx-auto max-w-[85rem]">
        {/* Content Container */}
        <div className="h-full flex items-center justify-left px-6 sm:px-8 md:px-10">
          <div
            className={`transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="space-y-2 md:space-y-3 text-left">
              {/* Greeting */}
              <div className="text-lg sm:text-xl md:text-2xl text-text-tertiary-dark font-firaSans">
                Hey there{" "}
                <span className="ml-1 inline-block animate-wave">👋</span>
              </div>

              {/* Name */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal">
                <span className="text-text-tertiary-dark font-firaSans">
                  I&#39;m{" "}
                </span>
                <span className="ml-2 text-text-primary-dark tracking-tight font-poppins">
                  Kamalay Kishore
                </span>
              </h1>

              {/* Role - with responsive width for line breaks */}

              {/* Description */}
              <p className="text-lg sm:text-xl md:text-2xl text-text-secondary-dark font-firaSans font-light leading-relaxed max-w-3xl">
                A top performing full stack developer with over 10 years of
                experience in building scalable web applications using Java,
                Spring Boot, Microservices, and ReactJS. Proficient in RESTful
                APIs, NodeJS, ExpressJS, and front-end development with
                JavaScript and TypeScript. Strong in database integration with
                SQL, OracleDB, DB2, and Vertica using JPA/JDBC. Skilled in AWS,
                GitHub, JIRA, and Agile/TDD delivery practices.
                <span className="ml-1 inline-block animate-rocket">🚀</span>
              </p>
            </div>
          </div>
        </div>
        {/* Social Links Container */}{" "}
      </div>
    </section>
  );
}
