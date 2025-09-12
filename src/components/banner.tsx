"use client";

import Typewriter from "typewriter-effect";
import SkillsMarquee from "./skills-marquee";
import Lottie from "lottie-react";

import coding from "../assets/skills.json";

const Banner = () => {
    return (
        <>
            <section className="relative min-h-screen bg-gradient-to-br from-[var(--primary-bg)] via-[var(--secondary-bg)] to-[var(--accent-bg)] overflow-hidden pt-20">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%239C92AC%22%20fill-opacity=%220.1%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

                {/* Floating Elements */}
                <div className="absolute top-20 left-10 w-20 h-20 bg-[var(--primary-color)]/20 rounded-full blur-xl animate-float"></div>
                <div
                    className="absolute top-40 right-20 w-32 h-32 bg-[var(--accent-color)]/20 rounded-full blur-xl animate-float"
                    style={{animationDelay: "2s"}}></div>
                <div
                    className="absolute bottom-40 left-20 w-24 h-24 bg-[var(--secondary-color)]/20 rounded-full blur-xl animate-float"
                    style={{animationDelay: "4s"}}></div>
                <div
                    className="absolute top-1/2 right-10 w-16 h-16 bg-[var(--success-color)]/15 rounded-full blur-lg animate-float"
                    style={{animationDelay: "1s"}}></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 flex flex-col lg:flex-row items-center justify-between min-h-screen md:!-mt-20">
                    {/* Left Content */}
                    <div className="flex-1 text-center lg:text-left mb-8 lg:mb-0 z-10 max-w-2xl lg:max-w-none">
                        <div className="mb-6 animate-slide-up">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[var(--text-primary)] mb-4 leading-tight">
                                <span className="text-[var(--secondary-color)] animate-glow">
                                    Hello!
                                </span>{" "}
                                I am
                                <br />
                                <span className="bg-gradient-to-r from-[var(--primary-color)] via-[var(--secondary-color)] to-[var(--accent-color)] bg-clip-text text-transparent">
                                    Ripas Sorker Rifat
                                </span>
                            </h1>
                        </div>

                        <div
                            className="text-base sm:text-lg lg:text-xl text-[var(--primary-color)] font-semibold mb-6 sm:mb-8 h-10 sm:h-12 animate-slide-up"
                            style={{animationDelay: "0.2s"}}>
                            <Typewriter
                                options={{
                                    strings: [
                                        "I'm a Full Stack Developer",
                                        "I'm a React Specialist",
                                        "I'm a Next.js Expert",
                                        "I'm a Problem Solver",
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    delay: 75,
                                    deleteSpeed: 50,
                                }}
                            />
                        </div>

                        <p
                            className="text-sm sm:text-base lg:text-lg text-[var(--text-secondary)] mb-6 sm:mb-8 max-w-xl lg:max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-slide-up"
                            style={{animationDelay: "0.4s"}}>
                            Passionate about creating innovative web solutions
                            with modern technologies. I specialize in building
                            scalable applications that deliver exceptional user
                            experiences.
                        </p>

                        <div
                            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start animate-slide-up"
                            style={{animationDelay: "0.6s"}}>
                            <button className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] hover:from-[var(--primary-color)]/80 hover:to-[var(--secondary-color)]/80 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[var(--glow-primary)] glass text-sm sm:text-base">
                                Resume ↓
                            </button>
                            <button className="border-2 border-[var(--secondary-color)] text-[var(--secondary-color)] hover:bg-[var(--secondary-color)] hover:text-[var(--primary-bg)] font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 transform hover:scale-105 glass text-sm sm:text-base">
                                View Projects
                            </button>
                        </div>

                        {/* Social Links */}
                        <div
                            className="flex gap-4 sm:gap-6 justify-center lg:justify-start mt-6 sm:mt-8 animate-slide-up"
                            style={{animationDelay: "0.8s"}}>
                            <a
                                href="#"
                                className="text-[var(--text-muted)] hover:text-[var(--secondary-color)] transition-colors duration-300 transform hover:scale-110 p-3 rounded-full glass  hover:shadow-[var(--glow-secondary)]">
                                <svg
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="text-[var(--text-muted)] hover:text-[var(--secondary-color)] transition-colors duration-300 transform hover:scale-110 p-3 rounded-full glass  hover:shadow-[var(--glow-secondary)]">
                                <svg
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="text-[var(--text-muted)] hover:text-[var(--secondary-color)] transition-colors duration-300 transform hover:scale-110 p-3 rounded-full glass  hover:shadow-[var(--glow-secondary)]">
                                <svg
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Right Content - Hero Image/Graphic */}
                    <div className="flex-1 flex justify-center lg:justify-end z-10 mt-8 lg:mt-0">
                        <div className="relative w-full max-w-[330px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[560px] aspect-square">
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-600/20 rounded-full blur-3xl transform scale-110"></div>

                            {/* Hero Graphic with Lottie Animation */}
                            <div className="relative glass rounded-full p-2 sm:p-4 shadow-2xl w-full aspect-square flex items-center justify-center animate-float animate-glow">
                                <div className="text-center w-full h-full">
                                    <div className="w-full h-full flex items-center justify-center p-4 sm:p-6 md:p-8">
                                        <Lottie
                                            loop
                                            animationData={coding}
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                maxWidth: "350px",
                                                maxHeight: "350px",
                                            }}
                                            className="filter drop-shadow-lg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Skills Marquee Section - Moved to Banner */}
                <div className="absolute bottom-12 sm:bottom-16 md:bottom-20 lg:bottom-24 left-0 right-0 z-10">
                    <SkillsMarquee />
                </div>
            </section>
        </>
    );
};

export default Banner;
