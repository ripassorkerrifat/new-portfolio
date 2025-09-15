"use client";

import React from "react";

interface ExperienceItem {
    id: number;
    title: string;
    company: string;
    location: string;
    type: string;
    period: string;
    current?: boolean;
    description: string;
    technologies: string[];
}

const ExperienceTimeline: React.FC = () => {
    const experiences: ExperienceItem[] = [
        {
            id: 1,
            title: "Full Stack Developer",
            company: "Cadence IT",
            location: "Remote",
            type: "Full Time",
            period: "March 2024 - Present",
            current: true,
            description:
                "Developing and maintaining full-stack web applications including OTA platforms, HRMS systems, and e-commerce solutions. Leading frontend development with React/Next.js and building robust backend APIs with Node.js and modern DB.",
            technologies: [
                "React",
                "Next.js",
                "Node.js",
                "Express.js",
                "MongoDB",
                "PostgreSQL",
                "TypeScript",
                "JavaScript",
                "Prisma",
                "Tailwind CSS",
                "Redux",
                "React",
            ],
        },
        {
            id: 2,
            title: "Freelance Developer",
            company: "Independent Projects",
            location: "Remote",
            type: "Freelance",
            period: "2022 - Present",
            current: true,
            description:
                "Working on various freelance projects including OTA platforms, portfolio websites, HRMS solutions, and custom web applications for clients worldwide. Specializing in modern React/Next.js frontend with full-stack capabilities.",
            technologies: [
                "React",
                "Next.js",
                "Node.js",
                "Express.js",
                "MongoDB",
                "PostgreSQL",
                "TypeScript",
                "JavaScript",
                "Prisma",
                "Tailwind CSS",
                "Framer",
                "Redux",
            ],
        },
        {
            id: 3,
            title: "Junior Web Developer",
            company: "Company Name",
            location: "Remote",
            type: "Internship",
            period: "April 2023 - September 2023",
            description:
                "Gained practical experience in web development through a comprehensive internship project. Worked on various web development tasks such as building responsive websites, implementing APIs, and optimizing performance. Developed a deep understanding of web technologies and industry best practices.",
            technologies: [
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Tailwind CSS",
                "Framer",
            ],
        },
        {
            id: 4,
            title: "Web Developer",
            company: "Company Name",
            location: "Remote",
            type: "Internship",
            period: "April 2022 - September 2022",
            description:
                "Gained practical experience in web development through a comprehensive internship project. Worked on various web development tasks such as building responsive websites, implementing APIs, and optimizing performance. Developed a deep understanding of web technologies and industry best practices.",
            technologies: [
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Tailwind CSS",
                "Framer",
            ],
        },
    ];

    return (
        <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--primary-color)] via-[var(--secondary-color)] to-[var(--primary-color)]"></div>

            {/* Experience Items */}
            <div className="space-y-8 md:space-y-12">
                {experiences.map((experience, index) => (
                    <div
                        key={experience.id}
                        className={`relative flex items-start ${
                            index % 2 === 0
                                ? "md:flex-row"
                                : "md:flex-row-reverse"
                        } flex-col md:space-x-8`}>
                        {/* Timeline Node */}
                        <div className="absolute -left-1 md:left-1/2 transform md:-translate-x-1/2 top-6 md:top-1/2 md:-translate-y-1/2">
                            <div
                                className={`w-3 h-3 md:w-4 md:h-4 rounded-full border-2 md:border-4 border-white shadow-lg ${
                                    experience.current
                                        ? "bg-gradient-to-r from-green-500 to-emerald-500"
                                        : "bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)]"
                                }`}></div>
                        </div>

                        {/* Content Card */}
                        <div
                            className={`w-[96%] md:w-[46%] ml-4 md:ml-0 text-left ${
                                index % 2 === 0
                                    ? "md:text-right"
                                    : "md:text-left"
                            }`}>
                            <div className="bg-[var(--card-bg)]/50 backdrop-blur-xl rounded-2xl p-4 md:p-6 border border-[var(--border-color)]/30 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                                {/* Header */}
                                <div className="mb-3 md:mb-4">
                                    <div
                                        className={`flex flex-col gap-2 mb-2 ${
                                            index % 2 === 0
                                                ? "items-start md:items-end"
                                                : "items-start md:items-start"
                                        }`}>
                                        <div className="flex gap-2">
                                            <span className="text-xs md:text-sm font-medium text-[var(--text-secondary)] bg-[var(--primary-color)]/20 px-2 md:px-3 py-1 rounded-full w-fit">
                                                {experience.period}
                                            </span>
                                            {experience.current && (
                                                <span className="text-xs font-semibold text-green-500 bg-green-500/20 px-2 py-1 rounded-full animate-pulse w-fit">
                                                    Current
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <h3 className="text-lg md:text-xl font-bold text-[var(--text-primary)] mb-1">
                                        {experience.title}{" "}
                                        <span className="text-xs md:text-sm text-[var(--text-secondary)] font-medium">
                                            ( {experience.type})
                                        </span>
                                    </h3>
                                    <div className="text-[var(--primary-color)] font-semibold text-sm md:text-base">
                                        <span>{experience.company}</span>
                                        <span className="mx-2">•</span>
                                        <span className="text-xs sm:text-sm">
                                            {experience.location}
                                        </span>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-[var(--text-secondary)] mb-3 md:mb-4 leading-relaxed text-sm md:text-base">
                                    {experience.description}
                                </p>

                                {/* Technologies */}
                                <div>
                                    <h4 className="text-xs md:text-sm font-semibold text-[var(--text-primary)] mb-2 md:mb-3">
                                        Technologies Used:
                                    </h4>
                                    <div
                                        className={`flex flex-wrap gap-1.5 md:gap-2 ${
                                            index % 2 === 0
                                                ? "justify-start md:justify-end"
                                                : "justify-start md:justify-start"
                                        }`}>
                                        {experience.technologies.map(
                                            (tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="text-xs font-medium bg-gradient-to-r from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 text-[var(--primary-color)] px-2 md:px-3 py-1 rounded-full border border-[var(--primary-color)]/30 hover:bg-[var(--primary-color)]/30 transition-all duration-300">
                                                    {tech}
                                                </span>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExperienceTimeline;
