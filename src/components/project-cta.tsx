"use client";

import {
    FaRocket,
    FaCode,
    FaLightbulb,
    FaStar,
    FaArrowRight,
    FaExternalLinkAlt,
    FaHeart,
} from "react-icons/fa";

const ProjectCTA: React.FC = () => {
    return (
        <div className="relative mb-20">
            {/* Enhanced Background Effects */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 md:left-1/4 md:w-80 md:h-80 w-60 h-60 bg-gradient-to-r from-[var(--primary-color)]/30 to-[var(--secondary-color)]/30 rounded-full blur-3xl animate-pulse"></div>
                <div
                    className="absolute bottom-0 right-1/4 md:w-80 md:h-80 w-60 h-60 bg-gradient-to-r from-[var(--secondary-color)]/25 to-[var(--accent-color)]/25 rounded-full blur-3xl animate-pulse"
                    style={{animationDelay: "2s"}}></div>
                <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-80 md:h-80 w-60 h-60 bg-gradient-to-r from-[var(--accent-color)]/20 to-[var(--primary-color)]/20 rounded-full blur-3xl animate-pulse"
                    style={{animationDelay: "4s"}}></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto md:px-6 px-4">
                {/* Main CTA Container */}
                <div className="glass rounded-4xl md:p-16 p-4 py-12  border border-[var(--border-color)]/40 backdrop-blur-xl bg-gradient-to-br from-[var(--primary-bg)]/95 to-[var(--secondary-bg)]/95 overflow-hidden relative group">
                    {/* Floating Elements */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-8 left-8 w-24 h-24 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] rounded-full blur-xl animate-pulse"></div>
                        <div
                            className="absolute bottom-8 right-8 w-32 h-32 bg-gradient-to-r from-[var(--secondary-color)] to-[var(--accent-color)] rounded-full blur-2xl animate-pulse"
                            style={{animationDelay: "1.5s"}}></div>
                        <div
                            className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-r from-[var(--accent-color)] to-[var(--primary-color)] rounded-full blur-lg animate-pulse"
                            style={{animationDelay: "3s"}}></div>
                        <div
                            className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)] rounded-full blur-xl animate-pulse"
                            style={{animationDelay: "0.5s"}}></div>
                    </div>

                    <div className="relative z-10 text-center">
                        {/* Enhanced Icon Section */}
                        <div className="mb-12 flex justify-center">
                            <div className="relative">
                                <div className="lg:size-28 md:size-24 size-20 bg-gradient-to-br from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 rounded-3xl flex items-center justify-center border border-[var(--border-color)]/40 backdrop-blur-sm group-hover:scale-110 transition-all duration-500">
                                    <FaRocket className="lg:text-5xl md:text-4xl text-3xl text-[var(--primary-color)] animate-bounce" />
                                </div>
                                <div className="absolute -inset-4 bg-gradient-to-r from-[var(--primary-color)]/30 to-[var(--secondary-color)]/30 rounded-3xl blur-xl animate-pulse"></div>

                                {/* Floating Icons */}
                                <div
                                    className="absolute -top-4 -right-4 md:size-12 size-10 bg-gradient-to-r from-[var(--secondary-color)] to-[var(--accent-color)] rounded-full flex items-center justify-center animate-bounce"
                                    style={{animationDelay: "0.5s"}}>
                                    <FaLightbulb className="text-white text-lg" />
                                </div>
                                <div
                                    className="absolute -bottom-4 -left-4 md:size-12 size-10 bg-gradient-to-r from-[var(--accent-color)] to-[var(--primary-color)] rounded-full flex items-center justify-center animate-bounce"
                                    style={{animationDelay: "1s"}}>
                                    <FaCode className="text-white text-lg" />
                                </div>
                            </div>
                        </div>

                        {/* Enhanced Heading */}
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-8 leading-tight animate-slide-up">
                            Ready to Build Something{" "}
                            <br className="sm:block hidden" />
                            <span className="relative inline-block">
                                <span className="bg-gradient-to-r from-[var(--primary-color)] via-[var(--secondary-color)] to-[var(--accent-color)] bg-clip-text text-transparent animate-glow">
                                    Extraordinary
                                </span>
                                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] rounded-full animate-pulse"></div>
                            </span>
                            ?
                        </h3>

                        {/* Enhanced Subheading */}
                        <p
                            className="text-[var(--text-secondary)] lg:text-xl md:mb-16 mb-8 leading-relaxed max-w-4xl mx-auto animate-slide-up"
                            style={{animationDelay: "0.2s"}}>
                            I&apos;m passionate about transforming innovative
                            ideas into powerful digital solutions. Let&apos;s
                            collaborate and create something that makes a real
                            impact in the world!
                        </p>

                        {/* Enhanced Stats Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 md:gap-8 gap-4 md:mb-16 mb-8">
                            <div
                                className="glass md:p-6 p-4 rounded-2xl border border-[var(--border-color)]/30 hover:border-[var(--primary-color)]/50 transition-all duration-300 group animate-slide-up"
                                style={{animationDelay: "0.3s"}}>
                                <div className="flex items-center justify-center mb-4">
                                    <div className="md:w-12 md:h-12 w-10 h-10 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <FaCode className="text-white text-xl" />
                                    </div>
                                </div>
                                <div className="md:text-4xl text-3xl font-bold text-[var(--primary-color)] mb-2 group-hover:scale-110 transition-transform duration-300">
                                    50+
                                </div>
                                <div className="text-[var(--text-secondary)] text-sm font-medium">
                                    Projects Completed
                                </div>
                            </div>

                            <div
                                className="glass md:p-6 p-4 rounded-2xl border border-[var(--border-color)]/30 hover:border-[var(--secondary-color)]/50 transition-all duration-300 group animate-slide-up"
                                style={{animationDelay: "0.4s"}}>
                                <div className="flex items-center justify-center mb-4">
                                    <div className="md:w-12 md:h-12 w-10 h-10 bg-gradient-to-r from-[var(--secondary-color)] to-[var(--accent-color)] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <FaHeart className="text-white text-xl" />
                                    </div>
                                </div>
                                <div className="md:text-4xl text-3xl font-bold text-[var(--secondary-color)] mb-2 group-hover:scale-110 transition-transform duration-300">
                                    99%
                                </div>
                                <div className="text-[var(--text-secondary)] text-sm font-medium">
                                    Client Satisfaction
                                </div>
                            </div>

                            <div
                                className="glass md:p-6 p-4 rounded-2xl border border-[var(--border-color)]/30 hover:border-[var(--accent-color)]/50 transition-all duration-300 group animate-slide-up"
                                style={{animationDelay: "0.5s"}}>
                                <div className="flex items-center justify-center mb-4">
                                    <div className="md:w-12 md:h-12 w-10 h-10 bg-gradient-to-r from-[var(--accent-color)] to-[var(--primary-color)] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <FaStar className="text-white text-xl" />
                                    </div>
                                </div>
                                <div className="md:text-4xl text-3xl font-bold text-[var(--accent-color)] mb-2 group-hover:scale-110 transition-transform duration-300">
                                    24/7
                                </div>
                                <div className="text-[var(--text-secondary)] text-sm font-medium">
                                    Support Available
                                </div>
                            </div>

                            <div
                                className="glass md:p-6 p-4 rounded-2xl border border-[var(--border-color)]/30 hover:border-[var(--primary-color)]/50 transition-all duration-300 group animate-slide-up"
                                style={{animationDelay: "0.6s"}}>
                                <div className="flex items-center justify-center mb-4">
                                    <div className="md:w-12 md:h-12 w-10 h-10 bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <FaRocket className="text-white text-xl" />
                                    </div>
                                </div>
                                <div className="md:text-4xl text-3xl font-bold text-[var(--primary-color)] mb-2 group-hover:scale-110 transition-transform duration-300">
                                    2+
                                </div>
                                <div className="text-[var(--text-secondary)] text-sm font-medium">
                                    Years Experience
                                </div>
                            </div>
                        </div>

                        {/* Enhanced Action Buttons */}
                        <div className="flex flex-col md:flex-row md:gap-8 gap-4 justify-center">
                            <a
                                href="#contact"
                                className="group flex items-center justify-center relative bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] hover:from-[var(--primary-color)]/90 hover:to-[var(--secondary-color)]/90 text-white font-bold md:py-6 py-4 md:px-16 px-8 rounded-3xl transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-[var(--primary-color)]/50 overflow-hidden animate-slide-up"
                                style={{animationDelay: "0.7s"}}>
                                <span className="relative z-10 flex items-center gap-4 md:text-lg text-base">
                                    <FaRocket className="md:text-xl text-lg group-hover:rotate-12 transition-transform duration-300" />
                                    <span>Start Your Project</span>
                                    <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="absolute -inset-2 bg-gradient-to-r from-[var(--primary-color)]/50 to-[var(--secondary-color)]/50 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </a>

                            <a
                                href="https://github.com/ripassorkerrifat"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center glass border-2 border-[var(--border-color)]/50 hover:border-[var(--secondary-color)]/80 text-[var(--text-primary)] hover:text-[var(--secondary-color)] font-bold md:py-6 py-4 md:px-16 px-8 rounded-3xl transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-[var(--secondary-color)]/30 relative overflow-hidden animate-slide-up"
                                style={{animationDelay: "0.8s"}}>
                                <span className="relative z-10 flex items-center gap-4 md:text-lg text-base">
                                    <FaCode className="md:text-xl text-lg group-hover:rotate-12 transition-transform duration-300" />
                                    <span>Explore My Work</span>
                                    <FaExternalLinkAlt className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform duration-300" />
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
