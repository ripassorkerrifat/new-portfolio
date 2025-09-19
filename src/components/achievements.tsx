"use client";

import React, {useState} from "react";
import {
    FaTrophy,
    FaMedal,
    FaStar,
    FaAward,
    FaCrown,
    FaGem,
} from "react-icons/fa";

const Achievements = () => {
    const [activeCategory, setActiveCategory] = useState("academic");

    const achievementCategories = [
        {
            id: "academic",
            label: "Academic",
            icon: <FaTrophy />,
            color: "from-yellow-400 to-orange-500",
        },
        {
            id: "professional",
            label: "Professional",
            icon: <FaAward />,
            color: "from-blue-400 to-purple-500",
        },
        {
            id: "technical",
            label: "Technical",
            icon: <FaGem />,
            color: "from-green-400 to-teal-500",
        },
        {
            id: "leadership",
            label: "Leadership",
            icon: <FaCrown />,
            color: "from-purple-400 to-pink-500",
        },
    ];

    const achievements = {
        academic: [
            {
                title: "Dean's List Recognition",
                description:
                    "Achieved Dean's List for 3 consecutive semesters with outstanding academic performance",
                year: "2020-2021",
                icon: <FaTrophy />,
                level: "Gold",
                stats: "Top 5% of Class",
            },
            {
                title: "Best Final Year Project Award",
                description:
                    "Recognized for innovative web application project using React and Node.js",
                year: "2022",
                icon: <FaAward />,
                level: "Platinum",
                stats: "1st Place",
            },
            {
                title: "Programming Contest Winner",
                description:
                    "Won university-level programming competition with algorithmic problem solving",
                year: "2021",
                icon: <FaMedal />,
                level: "Gold",
                stats: "30+ Participants",
            },
            {
                title: "Board Scholarship Recipient",
                description:
                    "Awarded merit-based scholarship for exceptional HSC results",
                year: "2018",
                icon: <FaStar />,
                level: "Diamond",
                stats: "GPA 5.00/5.00",
            },
        ],
        professional: [
            {
                title: "AWS Certified Developer",
                description:
                    "Successfully passed AWS Developer Associate certification exam",
                year: "2023",
                icon: <FaAward />,
                level: "Professional",
                stats: "Valid until 2026",
            },
            {
                title: "Google Cloud Professional",
                description:
                    "Achieved Google Cloud Professional Developer certification",
                year: "2023",
                icon: <FaGem />,
                level: "Professional",
                stats: "Cloud Expert",
            },
            {
                title: "Meta React Certification",
                description:
                    "Advanced React certification from Meta (Facebook)",
                year: "2022",
                icon: <FaTrophy />,
                level: "Advanced",
                stats: "React Specialist",
            },
            {
                title: "Node.js Professional",
                description:
                    "Professional certification in Node.js development",
                year: "2022",
                icon: <FaMedal />,
                level: "Professional",
                stats: "Backend Expert",
            },
        ],
        technical: [
            {
                title: "Full Stack Mastery",
                description:
                    "Completed comprehensive full-stack development program",
                year: "2021",
                icon: <FaGem />,
                level: "Master",
                stats: "300+ Hours",
            },
            {
                title: "Open Source Contributor",
                description:
                    "Active contributor to popular open-source projects on GitHub",
                year: "2020-2023",
                icon: <FaStar />,
                level: "Contributor",
                stats: "30+ Contributions",
            },
            {
                title: "DevOps Specialist",
                description:
                    "Mastered containerization, CI/CD, and cloud deployment",
                year: "2023",
                icon: <FaTrophy />,
                level: "Specialist",
                stats: "Docker & K8s",
            },
            {
                title: "Performance Optimization Expert",
                description:
                    "Specialized in web performance and optimization techniques",
                year: "2022",
                icon: <FaAward />,
                level: "Expert",
                stats: "90+ PageSpeed",
            },
        ],
        leadership: [
            {
                title: "Tech Team Lead",
                description:
                    "Led development team of 5+ developers on multiple projects",
                year: "2022-2023",
                icon: <FaCrown />,
                level: "Leader",
                stats: "5+ Team Members",
            },
            {
                title: "Mentor & Trainer",
                description:
                    "Mentored junior developers and conducted technical workshops",
                year: "2021-2023",
                icon: <FaStar />,
                level: "Mentor",
                stats: "20+ Mentees",
            },
            {
                title: "Project Manager",
                description:
                    "Successfully managed multiple client projects from inception to delivery",
                year: "2022",
                icon: <FaAward />,
                level: "Manager",
                stats: "100% Success Rate",
            },
            {
                title: "Community Builder",
                description:
                    "Built and grew local developer community with regular meetups",
                year: "2021-2023",
                icon: <FaGem />,
                level: "Builder",
                stats: "200+ Members",
            },
        ],
    };

    const getLevelColor = (level: string) => {
        switch (level.toLowerCase()) {
            case "diamond":
                return "from-cyan-400 to-blue-500";
            case "platinum":
                return "from-gray-300 to-gray-500";
            case "gold":
                return "from-yellow-400 to-orange-500";
            case "professional":
                return "from-blue-400 to-indigo-500";
            case "master":
                return "from-purple-400 to-pink-500";
            case "expert":
                return "from-red-400 to-pink-500";
            case "specialist":
                return "from-green-400 to-teal-500";
            case "advanced":
                return "from-orange-400 to-red-500";
            case "leader":
                return "from-purple-500 to-indigo-600";
            case "mentor":
                return "from-teal-400 to-cyan-500";
            case "manager":
                return "from-indigo-400 to-purple-500";
            case "builder":
                return "from-pink-400 to-rose-500";
            case "contributor":
                return "from-emerald-400 to-green-500";
            default:
                return "from-gray-400 to-gray-600";
        }
    };

    return (
        <section
            id="achievements"
            className="py-20 bg-gradient-to-br from-[var(--primary-bg)] via-[var(--secondary-bg)] to-[var(--accent-bg)] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 rounded-full blur-3xl animate-pulse"></div>
                <div
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-[var(--secondary-color)]/15 to-[var(--accent-color)]/15 rounded-full blur-3xl animate-pulse"
                    style={{animationDelay: "3s"}}></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center mb-8">
                        <div className="relative">
                            <div className="w-20 h-20 bg-gradient-to-br from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 rounded-3xl flex items-center justify-center border border-[var(--border-color)]/40 backdrop-blur-sm">
                                <FaTrophy className="text-4xl text-[var(--primary-color)] animate-bounce" />
                            </div>
                            <div className="absolute -inset-2 bg-gradient-to-r from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 rounded-3xl blur-lg animate-pulse"></div>
                        </div>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-[var(--text-primary)] mb-6 animate-slide-up">
                        My{" "}
                        <span className="bg-gradient-to-r from-[var(--primary-color)] via-[var(--secondary-color)] to-[var(--accent-color)] bg-clip-text text-transparent animate-glow">
                            Achievements
                        </span>
                    </h2>
                    <p
                        className="text-[var(--text-secondary)] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed animate-slide-up"
                        style={{animationDelay: "0.2s"}}>
                        Milestones and recognitions that mark my journey of
                        continuous growth and excellence in technology and
                        leadership.
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {achievementCategories.map((category, index) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`group flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-105 ${
                                activeCategory === category.id
                                    ? `bg-gradient-to-r ${category.color} text-white shadow-2xl shadow-[var(--primary-color)]/30`
                                    : "glass border border-[var(--border-color)]/40 text-[var(--text-secondary)] hover:border-[var(--primary-color)]/60 hover:text-[var(--primary-color)] backdrop-blur-xl"
                            }`}
                            style={{animationDelay: `${index * 0.1}s`}}>
                            <span
                                className={`text-2xl transition-transform duration-300 ${
                                    activeCategory === category.id
                                        ? "scale-110"
                                        : "group-hover:scale-110"
                                }`}>
                                {category.icon}
                            </span>
                            <span>{category.label}</span>
                        </button>
                    ))}
                </div>

                {/* Achievements Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {achievements[
                        activeCategory as keyof typeof achievements
                    ].map((achievement, index) => (
                        <div
                            key={index}
                            className="group glass rounded-3xl p-8 border border-[var(--border-color)]/40 hover:border-[var(--primary-color)]/60 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-[var(--primary-color)]/20 backdrop-blur-xl animate-slide-up"
                            style={{animationDelay: `${index * 0.15}s`}}>
                            {/* Achievement Header */}
                            <div className="flex items-start justify-between mb-6">
                                <div className="flex items-center gap-4">
                                    <div
                                        className={`w-16 h-16 bg-gradient-to-br ${getLevelColor(
                                            achievement.level
                                        )} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                        <span className="text-2xl">
                                            {achievement.icon}
                                        </span>
                                    </div>
                                    <div>
                                        <div
                                            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${getLevelColor(
                                                achievement.level
                                            )} text-white mb-2`}>
                                            <FaStar className="text-xs" />
                                            {achievement.level}
                                        </div>
                                        <p className="text-[var(--text-secondary)] text-sm">
                                            {achievement.year}
                                        </p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="glass px-3 py-2 rounded-xl border border-[var(--border-color)]/30">
                                        <p className="text-[var(--primary-color)] font-bold text-sm">
                                            {achievement.stats}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Achievement Content */}
                            <div>
                                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4 group-hover:text-[var(--primary-color)] transition-colors duration-300">
                                    {achievement.title}
                                </h3>
                                <p className="text-[var(--text-secondary)] leading-relaxed text-lg">
                                    {achievement.description}
                                </p>
                            </div>

                            {/* Hover Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-color)]/5 to-[var(--secondary-color)]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        </div>
                    ))}
                </div>

                {/* Achievement Stats */}
                <div className="mt-20 max-w-4xl mx-auto">
                    <div className="glass rounded-3xl p-12 border border-[var(--border-color)]/40 hover:border-[var(--primary-color)]/60 transition-all duration-500 backdrop-blur-xl text-center">
                        <h3 className="text-3xl font-bold text-[var(--text-primary)] mb-8">
                            Achievement Summary
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div className="group">
                                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-2xl flex items-center justify-center border border-yellow-400/30 group-hover:scale-110 transition-transform duration-300">
                                    <FaTrophy className="text-3xl text-yellow-400" />
                                </div>
                                <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-2">
                                    16+
                                </div>
                                <div className="text-[var(--text-secondary)]">
                                    Total Awards
                                </div>
                            </div>
                            <div className="group">
                                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-2xl flex items-center justify-center border border-blue-400/30 group-hover:scale-110 transition-transform duration-300">
                                    <FaAward className="text-3xl text-blue-400" />
                                </div>
                                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                                    10+
                                </div>
                                <div className="text-[var(--text-secondary)]">
                                    Certifications
                                </div>
                            </div>
                            <div className="group">
                                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-green-400/20 to-teal-500/20 rounded-2xl flex items-center justify-center border border-green-400/30 group-hover:scale-110 transition-transform duration-300">
                                    <FaGem className="text-3xl text-green-400" />
                                </div>
                                <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent mb-2">
                                    5+
                                </div>
                                <div className="text-[var(--text-secondary)]">
                                    Years Experience
                                </div>
                            </div>
                            <div className="group">
                                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-2xl flex items-center justify-center border border-purple-400/30 group-hover:scale-110 transition-transform duration-300">
                                    <FaCrown className="text-3xl text-purple-400" />
                                </div>
                                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
                                    20+
                                </div>
                                <div className="text-[var(--text-secondary)]">
                                    Projects Led
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
