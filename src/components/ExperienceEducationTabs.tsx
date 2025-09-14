"use client";

import React, {useState} from "react";
import {FaBriefcase, FaGraduationCap} from "react-icons/fa";
import ExperienceTimeline from "./ExperienceTimeline";
import EducationTimeline from "./EducationTimeline";

const ExperienceEducationTabs: React.FC = () => {
    const [activeTab, setActiveTab] = useState<"experience" | "education">(
        "experience"
    );

    const tabs = [
        {
            id: "experience",
            label: "Experience",
            icon: FaBriefcase,
            component: <ExperienceTimeline />,
        },
        {
            id: "education",
            label: "Education",
            icon: FaGraduationCap,
            component: <EducationTimeline />,
        },
    ];

    return (
        <section
            id="experience"
            className="py-8 sm:py-16 lg:py-20 bg-gradient-to-br from-[var(--secondary-bg)] via-[var(--primary-bg)] to-[var(--secondary-bg)] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--secondary-color)]/5 via-transparent to-[var(--accent-color)]/5"></div>
            <div className="absolute top-20 right-10 w-80 h-80 bg-[var(--secondary-color)]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-[var(--accent-color)]/10 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-8 sm:mb-12">
                    <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-3 sm:mb-6 animate-slide-up">
                        Professional{" "}
                        <span className="bg-gradient-to-r from-[var(--primary-color)] via-[var(--secondary-color)] to-[var(--accent-color)] bg-clip-text text-transparent animate-glow">
                            Journey
                        </span>
                    </h2>
                    <p
                        className="text-sm sm:text-base lg:text-lg text-[var(--text-secondary)] max-w-2xl lg:max-w-3xl mx-auto leading-relaxed animate-slide-up px-4"
                        style={{animationDelay: "0.2s"}}>
                        My career path showcases a progression from curious
                        beginner to experienced full-stack developer, with each
                        role contributing to my growth and expertise.
                    </p>
                </div>

                {/* Tab Navigation */}
                <div className="flex justify-center mb-8 sm:mb-12">
                    <div className="bg-[var(--card-bg)]/50 backdrop-blur-xl rounded-2xl p-1.5 sm:p-2 border border-[var(--border-color)]/30 shadow-xl w-full max-w-md sm:max-w-none sm:w-auto">
                        <div className="flex space-x-1 sm:space-x-2">
                            {tabs.map((tab) => {
                                const IconComponent = tab.icon;
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() =>
                                            setActiveTab(
                                                tab.id as
                                                    | "experience"
                                                    | "education"
                                            )
                                        }
                                        className={`cursor-pointer flex items-center justify-center space-x-2 sm:space-x-3 px-3 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold transition-all duration-300 flex-1 sm:flex-none text-sm sm:text-base ${
                                            activeTab === tab.id
                                                ? "bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white shadow-lg transform scale-105"
                                                : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--primary-bg)]/50"
                                        }`}>
                                        <IconComponent className="text-base sm:text-lg" />
                                        <span className="inline">
                                            {tab.label}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Tab Content */}
                <div
                    className="animate-slide-up"
                    style={{animationDelay: "0.4s"}}>
                    {tabs.find((tab) => tab.id === activeTab)?.component}
                </div>
            </div>
        </section>
    );
};

export default ExperienceEducationTabs;
