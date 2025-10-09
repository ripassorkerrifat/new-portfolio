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
                            <div className="group relative bg-gradient-to-br from-[var(--card-bg)]/80 via-[var(--card-bg)]/60 to-[var(--card-bg)]/40 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-[var(--border-color)]/20 shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-500 overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-[var(--primary-color)]/5 before:via-transparent before:to-[var(--secondary-color)]/5 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500">
                                {/* Decorative Corner */}
                                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[var(--secondary-color)]/10 to-transparent rounded-bl-3xl"></div>
                                
                                {/* Header */}
                                <div className="relative z-10 mb-4 md:mb-6">
                                    <div className={`flex items-center mb-2 ${
                                        index % 2 === 0 
                                            ? "justify-start md:justify-end" 
                                            : "justify-start md:justify-start"
                                    }`}>
                                        <span className="text-xs md:text-sm font-semibold text-white bg-gradient-to-r from-[var(--secondary-color)] to-[var(--accent-color)] px-3 md:px-4 py-2 rounded-full shadow-lg">
                                            {edu.period}
                                        </span>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--secondary-color)] transition-colors duration-300 leading-tight">
                                        {edu.degree}
                                    </h3>
                                    <div className="flex flex-wrap items-center gap-2 mb-2">
                                        <span className="text-sm md:text-base font-semibold text-[var(--secondary-color)]">
                                            {edu.institution}
                                        </span>
                                        <span className="w-1 h-1 bg-[var(--text-secondary)] rounded-full"></span>
                                        <span className="text-xs md:text-sm text-[var(--text-secondary)]">
                                            🎓 {edu.location}
                                        </span>
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="relative z-10 mb-5 md:mb-6">
                                    <p className="text-[var(--text-secondary)] leading-relaxed text-sm md:text-base bg-[var(--primary-bg)]/30 p-4 rounded-2xl border-l-4 border-[var(--secondary-color)]/50">
                                        {edu.description}
                                    </p>
                                </div>

                                {/* Achievements */}
                                <div className="relative z-10">
                                    <h4 className="text-sm md:text-base font-bold text-[var(--text-primary)] mb-3 md:mb-4 flex items-center gap-2">
                                        <span className="w-2 h-2 bg-gradient-to-r from-[var(--secondary-color)] to-[var(--accent-color)] rounded-full"></span>
                                        Key Achievements
                                    </h4>
                                    <div className="grid gap-2 md:gap-3">
                                        {edu.achievements.map(
                                            (achievement, achievementIndex) => (
                                                <div
                                                    key={achievementIndex}
                                                    className="flex items-start gap-3 text-xs md:text-sm text-[var(--text-secondary)] bg-gradient-to-r from-[var(--secondary-color)]/10 to-[var(--accent-color)]/5 p-3 rounded-xl border border-[var(--secondary-color)]/20 hover:border-[var(--secondary-color)]/40 hover:shadow-md transition-all duration-300">
                                                    <span className="w-2 h-2 bg-gradient-to-r from-[var(--secondary-color)] to-[var(--accent-color)] rounded-full mt-1.5 flex-shrink-0"></span>
                                                    <span className="leading-relaxed">{achievement}</span>
                                                </div>
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

export default EducationTimeline;
