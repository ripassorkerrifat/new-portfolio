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
                "Justan",
                "JWT",
                "AWS",
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
            company: "Edupy Academy",
            location: "Remote",
            type: "Internship",
            period: "April 2023 - September 2023",
            description:
                "Developed a comprehensive EduTech learning and marketplace platform for Edupy Academy. Designed and implemented a responsive web application with a modern React/Next.js frontend and robust Node.js backend. Built a scalable and secure API for marketplace functionality and integrated with various third-party services.",
            technologies: [
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Tailwind CSS",
                "Framer",
                "Node.js",
                "Express.js",
                "MongoDB",
                "TypeScript",
                "JavaScript",
                "Socket.io",
            ],
        },
        {
            id: 4,
            title: "Web Developer",
            company: "The Change",
            location: "Remote",
            type: "Internship",
            period: "April 2022 - September 2022",
            description:
                "Worked on a social activities project during the internship. Gained hands-on experience in web development by building a responsive website, implementing APIs, and optimizing performance. Developed a deep understanding of web technologies and industry best practices.",
            technologies: [
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Tailwind CSS",
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
                            <div className="group relative bg-gradient-to-br from-[var(--card-bg)]/80 via-[var(--card-bg)]/60 to-[var(--card-bg)]/40 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-[var(--border-color)]/20 shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-500 overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-[var(--primary-color)]/5 before:via-transparent before:to-[var(--secondary-color)]/5 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500">
                                {/* Decorative Corner */}
                                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[var(--primary-color)]/10 to-transparent rounded-bl-3xl"></div>
                                
                                {/* Header */}
                                <div className="relative z-10 mb-4 md:mb-6">
                                    <div
                                        className={`flex flex-col gap-2 mb-2 ${
                                            index % 2 === 0
                                                ? "items-start md:items-end"
                                                : "items-start md:items-start"
                                        }`}>
                                        <div className="flex gap-3">
                                            <span className="text-xs md:text-sm font-semibold text-white bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] px-3 md:px-4 py-2 rounded-full shadow-lg">
                                                {experience.period}
                                            </span>
                                            {experience.current && (
                                                <span className="text-xs font-bold text-white bg-gradient-to-r from-green-500 to-emerald-500 px-3 py-2 rounded-full animate-pulse shadow-lg">
                                                    ● Current
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--primary-color)] transition-colors duration-300">
                                        {experience.title}
                                    </h3>
                                    <div className="flex flex-wrap items-center gap-2 mb-2">
                                        <span className="text-sm md:text-base font-semibold text-[var(--primary-color)]">
                                            {experience.company}
                                        </span>
                                        <span className="w-1 h-1 bg-[var(--text-secondary)] rounded-full"></span>
                                        <span className="text-xs md:text-sm text-[var(--text-secondary)] font-medium bg-[var(--primary-bg)]/50 px-2 py-1 rounded-lg">
                                            {experience.type}
                                        </span>
                                        <span className="w-1 h-1 bg-[var(--text-secondary)] rounded-full"></span>
                                        <span className="text-xs md:text-sm text-[var(--text-secondary)]">
                                            📍 {experience.location}
                                        </span>
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="relative z-10 mb-5 md:mb-6">
                                    <p className="text-[var(--text-secondary)] leading-relaxed text-sm md:text-base bg-[var(--primary-bg)]/30 p-4 rounded-2xl border-l-4 border-[var(--primary-color)]/50">
                                        {experience.description}
                                    </p>
                                </div>

                                {/* Technologies */}
                                <div className="relative z-10">
                                    <h4 className="text-sm md:text-base font-bold text-[var(--text-primary)] mb-3 md:mb-4 flex items-center gap-2">
                                        <span className="w-2 h-2 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] rounded-full"></span>
                                        Tech Stack
                                    </h4>
                                    <div
                                        className={`flex flex-wrap gap-2 md:gap-3 ${
                                            index % 2 === 0
                                                ? "justify-start md:justify-end"
                                                : "justify-start md:justify-start"
                                        }`}>
                                        {experience.technologies.map(
                                            (tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="text-xs md:text-sm font-semibold bg-gradient-to-r from-[var(--primary-color)]/15 to-[var(--secondary-color)]/15 text-[var(--primary-color)] px-3 md:px-4 py-2 rounded-xl border border-[var(--primary-color)]/20 hover:border-[var(--primary-color)]/50 hover:shadow-lg hover:scale-105 transition-all duration-300 backdrop-blur-sm">
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
