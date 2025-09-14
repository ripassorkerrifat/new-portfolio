"use client";

import React from "react";

interface EducationItem {
    id: number;
    degree: string;
    institution: string;
    location: string;
    period: string;
    current?: boolean;
    description: string;
    achievements: string[];
    gpa?: string;
}

const EducationTimeline: React.FC = () => {
    const education: EducationItem[] = [
        {
            id: 1,
            degree: "Bachelor of Science in Computer Science and Engineering",
            institution: "Dhaka International University",
            location: "Dhaka, Bangladesh",
            period: "2021 - 2025",
            description:
                "Currently pursuing comprehensive computer science education with focus on software engineering, algorithms, data structures, and modern web technologies. Actively participating in programming competitions and tech events.",
            achievements: [
                "Active member of Computer Society",
                "Participating in programming competitions",
                "Working on various web development projects",
                "Learning modern software development practices",
                "Building expertise in full-stack development",
            ],
        },
        {
            id: 2,
            degree: "Higher Secondary Certificate (HSC) - Science",
            institution: "Moqbular Rahman Govt. College",
            location: "Panchagarh, Bangladesh",
            period: "2018 - 2020",
            description:
                "Completed higher secondary education in Science group with concentration in Mathematics, Physics, and Chemistry. Developed strong analytical and problem-solving skills that laid the foundation for computer science studies.",
            achievements: [
                "Completed Science group successfully",
                "Strong foundation in Mathematics and Physics",
                "Developed analytical thinking skills",
                "Prepared for engineering entrance exams",
            ],
        },
        {
            id: 3,
            degree: "Secondary School Certificate (SSC)",
            institution: "Thekorpara High School",
            location: "Bangladesh",
            period: "Below 2018",
            description:
                "Completed secondary education with good academic performance. Built strong foundation in mathematics, science, and developed early interest in technology and problem-solving.",
            achievements: [
                "Strong foundation in core subjects",
                "Developed interest in mathematics and science",
                "Active participation in school activities",
                "Built fundamental academic skills",
            ],
        },
    ];

    return (
        <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--primary-color)] via-[var(--secondary-color)] to-[var(--primary-color)]"></div>

            {/* Education Items */}
            <div className="space-y-8 md:space-y-12">
                {education.map((edu, index) => (
                    <div
                        key={edu.id}
                        className={`relative flex items-start ${
                            index % 2 === 0
                                ? "md:flex-row"
                                : "md:flex-row-reverse"
                        } flex-col md:space-x-8`}>
                        {/* Timeline Node */}
                        <div className="absolute -left-1 md:left-1/2 transform md:-translate-x-1/2 top-6 md:top-1/2 md:-translate-y-1/2">
                            <div
                                className={`w-3 h-3 md:w-4 md:h-4 rounded-full border-2 md:border-4 border-white shadow-lg ${
                                    edu.current
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
                                    <div className={`flex items-center mb-2 ${
                                        index % 2 === 0 
                                            ? "justify-start md:justify-end" 
                                            : "justify-start md:justify-start"
                                    }`}>
                                        <span className="text-xs md:text-sm font-medium text-[var(--text-secondary)] bg-[var(--primary-color)]/20 px-2 md:px-3 py-1 rounded-full">
                                            {edu.period}
                                        </span>
                                    </div>
                                    <h3 className="text-lg md:text-xl font-bold text-[var(--text-primary)] mb-1 leading-tight">
                                        {edu.degree}
                                    </h3>
                                    <div className="text-[var(--primary-color)] font-semibold text-sm md:text-base">
                                        <span>{edu.institution}</span>
                                        <span className="mx-2">•</span>
                                        <span className="text-xs sm:text-sm">
                                            {edu.location}
                                        </span>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-[var(--text-secondary)] mb-3 md:mb-4 leading-relaxed text-sm md:text-base">
                                    {edu.description}
                                </p>

                                {/* Achievements */}
                                <div>
                                    <h4 className="text-xs md:text-sm font-semibold text-[var(--text-primary)] mb-2 md:mb-3">
                                        Key Achievements:
                                    </h4>
                                    <ul className={`space-y-1.5 md:space-y-2 ${
                                        index % 2 === 0 
                                            ? "text-left md:text-right" 
                                            : "text-left md:text-left"
                                    }`}>
                                        {edu.achievements.map(
                                            (achievement, achievementIndex) => (
                                                <li
                                                    key={achievementIndex}
                                                    className={`flex items-start space-x-2 text-xs md:text-sm text-[var(--text-secondary)] ${
                                                        index % 2 === 0 
                                                            ? "md:flex-row-reverse md:space-x-reverse" 
                                                            : ""
                                                    }`}>
                                                    <span className="w-1.5 h-1.5 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] rounded-full mt-2 flex-shrink-0"></span>
                                                    <span>{achievement}</span>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EducationTimeline;
