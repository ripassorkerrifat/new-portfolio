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
            description: "Developing and maintaining full-stack web applications including OTA platforms, HRMS systems, and e-commerce solutions. Leading frontend development with React/Next.js and building robust backend APIs with Node.js and modern databases.",
            technologies: ["React", "Next.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "TypeScript", "JavaScript", "Prisma", "Tailwind CSS", "Redux", "React"]
        },
        {
            id: 2,
            title: "Freelance Developer",
            company: "Independent Projects",
            location: "Remote",
            type: "Freelance",
            period: "2022 - Present",
            current: true,
            description: "Working on various freelance projects including jewelry e-commerce platforms, portfolio websites, HRMS solutions, and custom web applications for clients worldwide. Specializing in modern React/Next.js frontends with full-stack capabilities.",
            technologies: ["React", "Next.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "TypeScript", "JavaScript", "Prisma", "Tailwind CSS", "Framer", "Redux"]
        },
        {
            id: 3,
            title: "Junior Full Stack Developer (Internship)",
            company: "Eduphy Academy",
            location: "Remote",
            type: "Internship",
            period: "November 2023 - February 2024",
            description: "Gained hands-on experience in full-stack development through practical projects. Worked with educational technology platforms and learned industry best practices.",
            technologies: ["React", "Node.js", "MongoDB", "Express.js", "JavaScript", "HTML", "CSS"]
        }
    ];

    return (
        <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--primary-color)] via-[var(--secondary-color)] to-[var(--primary-color)]"></div>

            {/* Experience Items */}
            <div className="space-y-12">
                {experiences.map((experience, index) => (
                    <div
                        key={experience.id}
                        className={`relative flex items-center ${
                            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                        } flex-col md:space-x-8`}
                    >
                        {/* Timeline Node */}
                        <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-1/2">
                            <div className={`w-4 h-4 rounded-full border-4 border-white shadow-lg ${
                                experience.current 
                                    ? "bg-gradient-to-r from-green-500 to-emerald-500" 
                                    : "bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)]"
                            }`}>
                            </div>
                        </div>

                        {/* Content Card */}
                        <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                            index % 2 === 0 ? "md:text-right" : "md:text-left"
                        }`}>
                            <div className="bg-[var(--card-bg)]/50 backdrop-blur-xl rounded-2xl p-6 border border-[var(--border-color)]/30 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                                {/* Header */}
                                <div className="mb-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-medium text-[var(--text-secondary)] bg-[var(--primary-color)]/20 px-3 py-1 rounded-full">
                                            {experience.period}
                                        </span>
                                        {experience.current && (
                                            <span className="text-xs font-semibold text-green-500 bg-green-500/20 px-2 py-1 rounded-full animate-pulse">
                                                Current
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1">
                                        {experience.title}
                                    </h3>
                                    <div className="flex items-center space-x-2 text-[var(--primary-color)] font-semibold">
                                        <span>{experience.company}</span>
                                        <span>•</span>
                                        <span>{experience.location}</span>
                                    </div>
                                    <span className="text-sm text-[var(--text-secondary)] font-medium">
                                        {experience.type}
                                    </span>
                                </div>

                                {/* Description */}
                                <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
                                    {experience.description}
                                </p>

                                {/* Technologies */}
                                <div>
                                    <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-3">
                                        Technologies Used:
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {experience.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="text-xs font-medium bg-gradient-to-r from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 text-[var(--primary-color)] px-3 py-1 rounded-full border border-[var(--primary-color)]/30 hover:bg-[var(--primary-color)]/30 transition-all duration-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Spacer for alternating layout */}
                        <div className="hidden md:block w-5/12"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExperienceTimeline;
