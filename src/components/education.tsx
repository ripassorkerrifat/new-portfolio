"use client";

import {
    FaGraduationCap,
    FaStar,
    FaTrophy,
    FaUniversity,
    FaSchool,
} from "react-icons/fa";

const Education = () => {
    const educationData = [
        {
            degree: "Bachelor of Science in Computer Science & Engineering",
            institution: "Dhaka International University",
            year: "2021 - 2025",
            grade: "Currently Pursuing",
            description:
                "Specialized in Computer Science and Engineering with focus on Software Development, Web Technologies, and Modern Programming Paradigms.",
            achievements: [
                "Active Student",
                "Programming Enthusiast",
                "Web Development Focus",
                "Modern Tech Stack Learning",
            ],
            icon: <FaGraduationCap />,
            color: "from-blue-500 to-purple-600",
            bgColor: "from-blue-500/10 to-purple-600/10",
            status: "current",
        },
        {
            degree: "Higher Secondary Certificate (HSC)",
            institution: "Moqbular Rahman Govt. College, Panchagarh",
            year: "2018 - 2020",
            grade: "Science Group",
            description:
                "Completed Higher Secondary education in Science group with focus on Mathematics, Physics, Chemistry, and Biology.",
            achievements: [
                "Science Group Graduate",
                "Strong Foundation in Sciences",
                "Mathematics Excellence",
                "Academic Achievement",
            ],
            icon: <FaUniversity />,
            color: "from-green-500 to-teal-600",
            bgColor: "from-green-500/10 to-teal-600/10",
            status: "completed",
        },
        {
            degree: "Secondary School Certificate (SSC)",
            institution: "Thekorpara High School",
            year: "Below 2018",
            grade: "Completed",
            description:
                "Completed secondary education with strong academic foundation and preparation for higher studies.",
            achievements: [
                "Secondary Education Complete",
                "Academic Foundation",
                "Preparation for Higher Studies",
                "Well-rounded Education",
            ],
            icon: <FaSchool />,
            color: "from-orange-500 to-red-600",
            bgColor: "from-orange-500/10 to-red-600/10",
            status: "completed",
        },
    ];

    return (
        <section
            id="education"
            className="py-20 bg-gradient-to-br from-[var(--primary-bg)] via-[var(--secondary-bg)] to-[var(--accent-bg)] relative overflow-hidden">
            {/* Enhanced Background Elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 rounded-full blur-3xl animate-pulse"></div>
                <div
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-[var(--secondary-color)]/15 to-[var(--accent-color)]/15 rounded-full blur-3xl animate-pulse"
                    style={{animationDelay: "3s"}}></div>
                <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[var(--accent-color)]/10 to-[var(--primary-color)]/10 rounded-full blur-3xl animate-pulse"
                    style={{animationDelay: "1.5s"}}></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Modern Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center justify-center mb-8">
                        <div className="relative">
                            <div className="w-20 h-20 bg-gradient-to-br from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 rounded-3xl flex items-center justify-center border border-[var(--border-color)]/40 backdrop-blur-sm">
                                <FaGraduationCap className="text-4xl text-[var(--primary-color)] animate-bounce" />
                            </div>
                            <div className="absolute -inset-2 bg-gradient-to-r from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 rounded-3xl blur-lg animate-pulse"></div>
                        </div>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-[var(--text-primary)] mb-6 animate-slide-up">
                        My{" "}
                        <span className="bg-gradient-to-r from-[var(--primary-color)] via-[var(--secondary-color)] to-[var(--accent-color)] bg-clip-text text-transparent animate-glow">
                            Education
                        </span>
                    </h2>
                    <p
                        className="text-[var(--text-secondary)] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed animate-slide-up"
                        style={{animationDelay: "0.2s"}}>
                        My academic journey from secondary school to pursuing
                        Computer Science & Engineering at university level.
                    </p>
                </div>

                {/* Timeline Content */}
                <div className="max-w-5xl mx-auto">
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--primary-color)] via-[var(--secondary-color)] to-[var(--accent-color)] rounded-full opacity-30"></div>

                        <div className="space-y-12">
                            {educationData.map((edu, index) => (
                                <div
                                    key={index}
                                    className="relative animate-slide-up"
                                    style={{animationDelay: `${index * 0.2}s`}}>
                                    {/* Timeline Node */}
                                    <div className="absolute left-6 top-8 w-5 h-5 bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] rounded-full border-4 border-[var(--primary-bg)] shadow-lg z-10"></div>

                                    {/* Timeline Content */}
                                    <div className="ml-20 group">
                                        <div className="glass rounded-3xl p-8 border border-[var(--border-color)] hover:border-[var(--primary-color)]/60 transition-all duration-700 transform hover:scale-105 hover:shadow-2xl hover:shadow-[var(--primary-color)]/20 backdrop-blur-xl relative overflow-hidden">
                                            {/* Background Gradient */}
                                            <div
                                                className={`absolute inset-0 bg-gradient-to-br ${edu.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                                            <div className="relative z-10">
                                                {/* Header */}
                                                <div className="flex items-start justify-between mb-6">
                                                    <div className="flex items-center space-x-4">
                                                        <div
                                                            className={`w-16 h-16 bg-gradient-to-br ${edu.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                                                            <span className="text-2xl">
                                                                {edu.icon}
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <h3 className="text-2xl lg:text-3xl font-bold text-[var(--text-primary)] mb-1 group-hover:text-[var(--primary-color)] transition-colors duration-300">
                                                                {edu.degree}
                                                            </h3>
                                                            <p className="text-[var(--primary-color)] font-semibold text-lg">
                                                                {
                                                                    edu.institution
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="text-right">
                                                        <div className="glass px-4 py-2 text-nowrap rounded-full border border-[var(--primary-color)]/30">
                                                            <span className="text-[var(--primary-color)] font-bold">
                                                                {edu.year}
                                                            </span>
                                                        </div>
                                                        {edu.status ===
                                                            "current" && (
                                                            <div className="mt-2 inline-flex items-center px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30">
                                                                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                                                                <span className="text-green-400 text-sm font-medium">
                                                                    Current
                                                                </span>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>

                                                {/* Grade */}
                                                <div className="mb-6">
                                                    <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full">
                                                        <FaTrophy className="text-[var(--secondary-color)]" />
                                                        <span className="text-[var(--text-secondary)] font-medium">
                                                            {edu.grade}
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Description */}
                                                <p className="text-[var(--text-secondary)] leading-relaxed text-lg mb-6">
                                                    {edu.description}
                                                </p>

                                                {/* Achievements */}
                                                <div className="border-t border-[var(--border-color)] pt-6">
                                                    <h4 className="text-[var(--text-primary)] font-bold text-xl mb-4 flex items-center space-x-2">
                                                        <FaStar className="text-[var(--primary-color)]" />
                                                        <span>
                                                            Key Highlights
                                                        </span>
                                                    </h4>
                                                    <div className="grid md:grid-cols-2 gap-4">
                                                        {edu.achievements.map(
                                                            (
                                                                achievement,
                                                                i
                                                            ) => (
                                                                <div
                                                                    key={i}
                                                                    className="flex items-center space-x-3 glass p-3 rounded-xl">
                                                                    <div className="w-3 h-3 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] rounded-full flex-shrink-0"></div>
                                                                    <span className="text-[var(--text-secondary)]">
                                                                        {
                                                                            achievement
                                                                        }
                                                                    </span>
                                                                </div>
                                                            )
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
