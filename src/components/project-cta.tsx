"use client";

import React from "react";
import {
    FaRocket,
    FaCode,
    FaExternalLinkAlt,
    FaLightbulb,
    FaHeart,
    FaStar,
    FaArrowRight,
} from "react-icons/fa";
import {useSettings} from "../contexts/SettingsContext";

const ProjectCTA: React.FC = () => {
    const {settings} = useSettings();
    return (
        <div className="relative mb-20">
            {/* Sophisticated Background Effects */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 md:left-1/4 md:w-96 md:h-96 w-72 h-72 bg-gradient-to-r from-[var(--primary-color)]/25 to-[var(--secondary-color)]/25 rounded-full blur-3xl animate-pulse"></div>
                <div
                    className="absolute bottom-0 right-1/4 md:w-96 md:h-96 w-72 h-72 bg-gradient-to-r from-[var(--secondary-color)]/20 to-[var(--accent-color)]/20 rounded-full blur-3xl animate-pulse"
                    style={{animationDelay: "2s"}}></div>
                <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-96 md:h-96 w-72 h-72 bg-gradient-to-r from-[var(--accent-color)]/15 to-[var(--primary-color)]/15 rounded-full blur-3xl animate-pulse"
                    style={{animationDelay: "4s"}}></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto md:px-6 px-4">
                {/* Main CTA Container */}
                <div className="glass rounded-3xl md:p-20 p-6 py-16 border border-[var(--border-color)]/30 backdrop-blur-2xl bg-gradient-to-br from-[var(--primary-bg)]/90 to-[var(--secondary-bg)]/90 overflow-hidden relative group">
                    {/* Animated Background Gradient */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[var(--primary-color)] via-transparent to-[var(--secondary-color)]"></div>
                    </div>

                    <div className="relative z-10 text-center">
                        {/* Icon Section with Animation */}
                        <div className="mb-12 flex justify-center animate-slide-up">
                            <div className="relative">
                                <div className="lg:size-32 md:size-28 size-24 bg-gradient-to-br from-[var(--primary-color)]/15 to-[var(--secondary-color)]/15 rounded-2xl flex items-center justify-center border border-[var(--border-color)]/40 backdrop-blur-sm group-hover:scale-110 transition-all duration-500 shadow-lg">
                                    <FaRocket className="lg:text-6xl md:text-5xl text-4xl text-[var(--primary-color)] animate-bounce" />
                                </div>
                                <div className="absolute -inset-6 bg-gradient-to-r from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Floating Accent Icons */}
                                <div
                                    className="absolute -top-3 -right-3 md:size-14 size-12 bg-gradient-to-r from-[var(--secondary-color)] to-[var(--accent-color)] rounded-xl flex items-center justify-center animate-bounce shadow-lg"
                                    style={{animationDelay: "0.5s"}}>
                                    <FaLightbulb className="text-white md:text-lg text-base" />
                                </div>
                                <div
                                    className="absolute -bottom-3 -left-3 md:size-14 size-12 bg-gradient-to-r from-[var(--accent-color)] to-[var(--primary-color)] rounded-xl flex items-center justify-center animate-bounce shadow-lg"
                                    style={{animationDelay: "1s"}}>
                                    <FaCode className="text-white md:text-lg text-base" />
                                </div>
                            </div>
                        </div>

                        {/* Main Heading */}
                        <h3
                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-6 leading-tight animate-slide-up"
                            style={{animationDelay: "0.1s"}}>
                            Let&apos;s Create Something{" "}
                            <br className="sm:block hidden" />
                            <span className="relative inline-block">
                                <span className="bg-gradient-to-r from-[var(--primary-color)] via-[var(--secondary-color)] to-[var(--accent-color)] bg-clip-text text-transparent font-black">
                                    Amazing Together
                                </span>
                                <div className="absolute -bottom-3 left-0 right-0 h-1.5 bg-gradient-to-r from-[var(--primary-color)] via-[var(--secondary-color)] to-[var(--accent-color)] rounded-full blur-sm opacity-60"></div>
                            </span>
                        </h3>

                        {/* Subheading */}
                        <p
                            className="text-[var(--text-secondary)] lg:text-lg md:mb-16 mb-10 leading-relaxed max-w-3xl mx-auto animate-slide-up font-light"
                            style={{animationDelay: "0.2s"}}>
                            I transform ideas into elegant digital solutions.
                            Whether you need a stunning website, a powerful web
                            app, or a complete digital transformation, I&apos;m
                            here to bring your vision to life.
                        </p>

                        {/* Stats Grid - Enhanced */}
                        <div className="grid grid-cols-2 md:grid-cols-4 md:gap-6 gap-3 md:mb-16 mb-10">
                            <div
                                className="glass md:p-8 p-5 rounded-2xl border border-[var(--border-color)]/30 hover:border-[var(--primary-color)]/60 transition-all duration-300 group animate-slide-up hover:shadow-lg hover:shadow-[var(--primary-color)]/20"
                                style={{animationDelay: "0.3s"}}>
                                <div className="flex items-center justify-center mb-4">
                                    <div className="md:w-14 md:h-14 w-12 h-12 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                                        <FaCode className="text-white md:text-2xl text-xl" />
                                    </div>
                                </div>
                                <div className="md:text-4xl text-3xl font-bold bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text text-transparent mb-2">
                                    30+
                                </div>
                                <div className="text-[var(--text-secondary)] text-xs md:text-sm font-medium">
                                    Projects Delivered
                                </div>
                            </div>

                            <div
                                className="glass md:p-8 p-5 rounded-2xl border border-[var(--border-color)]/30 hover:border-[var(--secondary-color)]/60 transition-all duration-300 group animate-slide-up hover:shadow-lg hover:shadow-[var(--secondary-color)]/20"
                                style={{animationDelay: "0.4s"}}>
                                <div className="flex items-center justify-center mb-4">
                                    <div className="md:w-14 md:h-14 w-12 h-12 bg-gradient-to-r from-[var(--secondary-color)] to-[var(--accent-color)] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                                        <FaHeart className="text-white md:text-2xl text-xl" />
                                    </div>
                                </div>
                                <div className="md:text-4xl text-3xl font-bold bg-gradient-to-r from-[var(--secondary-color)] to-[var(--accent-color)] bg-clip-text text-transparent mb-2">
                                    99%
                                </div>
                                <div className="text-[var(--text-secondary)] text-xs md:text-sm font-medium">
                                    Client Satisfaction
                                </div>
                            </div>

                            <div
                                className="glass md:p-8 p-5 rounded-2xl border border-[var(--border-color)]/30 hover:border-[var(--accent-color)]/60 transition-all duration-300 group animate-slide-up hover:shadow-lg hover:shadow-[var(--accent-color)]/20"
                                style={{animationDelay: "0.5s"}}>
                                <div className="flex items-center justify-center mb-4">
                                    <div className="md:w-14 md:h-14 w-12 h-12 bg-gradient-to-r from-[var(--accent-color)] to-[var(--primary-color)] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                                        <FaStar className="text-white md:text-2xl text-xl" />
                                    </div>
                                </div>
                                <div className="md:text-4xl text-3xl font-bold bg-gradient-to-r from-[var(--accent-color)] to-[var(--primary-color)] bg-clip-text text-transparent mb-2">
                                    24/7
                                </div>
                                <div className="text-[var(--text-secondary)] text-xs md:text-sm font-medium">
                                    Support Ready
                                </div>
                            </div>

                            <div
                                className="glass md:p-8 p-5 rounded-2xl border border-[var(--border-color)]/30 hover:border-[var(--primary-color)]/60 transition-all duration-300 group animate-slide-up hover:shadow-lg hover:shadow-[var(--primary-color)]/20"
                                style={{animationDelay: "0.6s"}}>
                                <div className="flex items-center justify-center mb-4">
                                    <div className="md:w-14 md:h-14 w-12 h-12 bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                                        <FaRocket className="text-white md:text-2xl text-xl" />
                                    </div>
                                </div>
                                <div className="md:text-4xl text-3xl font-bold bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)] bg-clip-text text-transparent mb-2">
                                    2+
                                </div>
                                <div className="text-[var(--text-secondary)] text-xs md:text-sm font-medium">
                                    Years Experience
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col md:flex-row md:gap-6 gap-4 justify-center">
                            <a
                                href="#contact"
                                className="group flex items-center justify-center relative bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] hover:from-[var(--primary-color)]/95 hover:to-[var(--secondary-color)]/95 text-white font-semibold md:py-5 py-3.5 md:px-12 px-8 rounded-2xl transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-[var(--primary-color)]/40 overflow-hidden animate-slide-up"
                                style={{animationDelay: "0.7s"}}>
                                <span className="relative z-10 flex items-center gap-3 md:text-base text-sm">
                                    <FaRocket className="md:text-lg text-base group-hover:rotate-12 transition-transform duration-300" />
                                    <span>Start Your Project</span>
                                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </a>

                            <a
                                href={settings.socialLinks.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center glass border-2 border-[var(--border-color)]/50 hover:border-[var(--secondary-color)]/70 text-[var(--text-primary)] hover:text-[var(--secondary-color)] font-semibold md:py-5 py-3.5 md:px-12 px-8 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-lg hover:shadow-[var(--secondary-color)]/20 relative overflow-hidden animate-slide-up"
                                style={{animationDelay: "0.8s"}}>
                                <span className="relative z-10 flex items-center gap-3 md:text-base text-sm">
                                    <FaCode className="md:text-lg text-base group-hover:rotate-12 transition-transform duration-300" />
                                    <span>View Portfolio</span>
                                    <FaExternalLinkAlt className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-[var(--secondary-color)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCTA;
