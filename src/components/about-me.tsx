/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import {FaDownload, FaEnvelope} from "react-icons/fa";
import Image from "next/image";
import profile from "../assets/images/profile.webp";
import {useSettings} from "../contexts/SettingsContext";

import {
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaInstagram,
    FaFacebook,
} from "react-icons/fa";

const AboutMe = () => {
    const {settings} = useSettings();

    const getSocialLinks = () => [
        {
            name: "GitHub",
            icon: <FaGithub />,
            href: settings.socialLinks.github,
            color: "hover:text-purple-400",
            bgGradient: "from-purple-500/20 to-indigo-500/20",
        },
        {
            name: "LinkedIn",
            icon: <FaLinkedin />,
            href: settings.socialLinks.linkedin,
            color: "hover:text-blue-400",
            bgGradient: "from-blue-500/20 to-cyan-500/20",
        },
        {
            name: "Facebook",
            icon: <FaFacebook />,
            href: settings.socialLinks.facebook,
            color: "hover:text-blue-500",
            bgGradient: "from-blue-600/20 to-blue-400/20",
        },
        {
            name: "Twitter",
            icon: <FaTwitter />,
            href: settings.socialLinks.twitter,
            color: "hover:text-sky-400",
            bgGradient: "from-sky-500/20 to-cyan-400/20",
        },
        {
            name: "Instagram",
            icon: <FaInstagram />,
            href: settings.socialLinks.instagram,
            color: "hover:text-pink-400",
            bgGradient: "from-pink-500/20 to-rose-400/20",
        },
    ];

    const handleResumeDownload = () => {
        if (settings.resumeUrl) {
            window.open(settings.resumeUrl, "_blank");
        } else {
            // Fallback or show message
            alert(
                "Resume URL not configured. Please contact the administrator."
            );
        }
    };
    return (
        <section
            id="about"
            className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[var(--secondary-bg)] via-[var(--primary-bg)] to-[var(--accent-bg)] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-color)]/5 via-transparent to-[var(--secondary-color)]/5"></div>
            <div className="absolute top-20 left-10 w-80 h-80 bg-[var(--primary-color)]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--secondary-color)]/10 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 sm:mb-20">
                    {/* Subtitle Badge */}
                    <div className="mb-8 animate-slide-up inline-block">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary-color)]/10 border border-[var(--primary-color)]/30 backdrop-blur-sm">
                            <div className="w-2 h-2 rounded-full bg-[var(--primary-color)] animate-pulse"></div>
                            <span className="text-xs sm:text-sm font-semibold text-[var(--primary-color)] uppercase tracking-wider">
                                Who I Am
                            </span>
                        </div>
                    </div>

                    <h2
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-6 leading-tight animate-slide-up"
                        style={{animationDelay: "0.1s"}}>
                        About{" "}
                        <span className="bg-gradient-to-r from-[var(--primary-color)] via-[var(--secondary-color)] to-[var(--accent-color)] bg-clip-text text-transparent font-black">
                            Me
                        </span>
                    </h2>
                    <p
                        className="text-sm sm:text-base lg:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed animate-slide-up font-light"
                        style={{animationDelay: "0.2s"}}>
                        Get to know the developer behind the code. My journey,
                        passions, and what drives me to create exceptional
                        digital experiences.
                    </p>
                </div>

                {/* About Content - Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
                    {/* Left Column - Image */}
                    <div
                        className="animate-slide-up order-2 lg:order-1"
                        style={{animationDelay: "0.3s"}}>
                        <div className="relative group">
                            {/* Large Glow Background */}
                            <div className="absolute -inset-8 bg-gradient-to-br from-[var(--primary-color)]/50 to-[var(--secondary-color)]/30 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                            {/* Main Image */}
                            <div className="relative glass rounded-3xl overflow-hidden border border-[var(--border-color)]/40 backdrop-blur-xl">
                                <Image
                                    src={profile}
                                    alt="Ripas Sorker Rifat"
                                    width={500}
                                    height={500}
                                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-color)]/40 via-transparent to-transparent"></div>
                            </div>

                            {/* Floating Social Links */}
                            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 bg-[var(--primary-bg)]/80 backdrop-blur-xl rounded-full p-4 border border-[var(--border-color)]/30">
                                {getSocialLinks().map(
                                    (social: any, index: number) => (
                                        <a
                                            key={social.name}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`group/social relative w-11 h-11 glass rounded-full flex items-center justify-center text-[var(--text-secondary)] ${social.color} border border-[var(--border-color)]/40 hover:border-[var(--primary-color)]/70 transition-all duration-500 hover:scale-125 backdrop-blur-sm animate-slide-up overflow-hidden`}
                                            style={{
                                                animationDelay: `${
                                                    index * 0.08
                                                }s`,
                                            }}
                                            title={social.name}>
                                            <div
                                                className={`absolute inset-0 bg-gradient-to-br ${social.bgGradient} opacity-0 group-hover/social:opacity-100 transition-opacity duration-300`}></div>
                                            <span className="relative text-lg group-hover/social:scale-110 transition-transform duration-300">
                                                {social.icon}
                                            </span>
                                        </a>
                                    )
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Content */}
                    <div
                        className="animate-slide-up order-1 lg:order-2"
                        style={{animationDelay: "0.4s"}}>
                        <div className="space-y-8">
                            {/* Main Intro */}
                            <div className="space-y-4">
                                <h3 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] leading-tight">
                                    Passionate Developer
                                    <br />
                                    <span className="bg-gradient-to-r from-[var(--primary-color)] via-[var(--secondary-color)] to-[var(--accent-color)] bg-clip-text text-transparent">
                                        Building Digital Solutions
                                    </span>
                                </h3>
                                <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-light">
                                    I'm{" "}
                                    <span className="text-[var(--primary-color)] font-semibold">
                                        Ripas Sorker Rifat
                                    </span>
                                    , a full-stack developer pursuing my
                                    Bachelor's in Computer Science &
                                    Engineering. I specialize in creating
                                    scalable, user-centric applications with
                                    modern technologies.
                                </p>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-4">
                                <div className="glass rounded-2xl p-4 border border-[var(--border-color)]/30 text-center">
                                    <div className="text-3xl font-black bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text text-transparent mb-1">
                                        2+
                                    </div>
                                    <p className="text-xs text-[var(--text-secondary)] font-medium">
                                        Years Exp
                                    </p>
                                </div>
                                <div className="glass rounded-2xl p-4 border border-[var(--border-color)]/30 text-center">
                                    <div className="text-3xl font-black bg-gradient-to-r from-[var(--secondary-color)] to-[var(--accent-color)] bg-clip-text text-transparent mb-1">
                                        30+
                                    </div>
                                    <p className="text-xs text-[var(--text-secondary)] font-medium">
                                        Projects
                                    </p>
                                </div>
                                <div className="glass rounded-2xl p-4 border border-[var(--border-color)]/30 text-center">
                                    <div className="text-3xl font-black bg-gradient-to-r from-[var(--accent-color)] to-[var(--primary-color)] bg-clip-text text-transparent mb-1">
                                        99%
                                    </div>
                                    <p className="text-xs text-[var(--text-secondary)] font-medium">
                                        Satisfied
                                    </p>
                                </div>
                            </div>

                            {/* About Text */}
                            <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
                                <p className="text-sm sm:text-base font-light">
                                    With expertise in React, Next.js, Node.js,
                                    and modern databases, I build applications
                                    that solve real-world problems. My focus is
                                    on clean code, exceptional UX, and scalable
                                    architecture.
                                </p>
                                <p className="text-sm sm:text-base font-light">
                                    I've worked on OTA platforms, HRMS systems,
                                    and e-commerce solutions. I'm driven by the
                                    challenge of creating intuitive interfaces
                                    and robust backend systems that make a
                                    difference.
                                </p>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <button
                                    onClick={handleResumeDownload}
                                    className="group cursor-pointer flex items-center justify-center space-x-2 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] hover:from-[var(--primary-color)]/95 hover:to-[var(--secondary-color)]/95 text-white font-semibold py-3 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-[var(--primary-color)]/40 overflow-hidden">
                                    <FaDownload className="text-base group-hover:animate-bounce" />
                                    <span>Download Resume</span>
                                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </button>
                                <a
                                    href="#contact"
                                    className="group flex items-center justify-center space-x-2 glass border-2 border-[var(--primary-color)]/50 hover:border-[var(--primary-color)]/80 text-[var(--primary-color)] hover:text-white font-semibold py-3 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[var(--primary-color)]/20 relative overflow-hidden">
                                    <FaEnvelope className="text-base group-hover:scale-110 transition-transform duration-300" />
                                    <span>Get In Touch</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-color)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-[var(--border-color)]/50 to-transparent mt-20 mb-20"></div>

                {/* Skills Highlight Section */}
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-slide-up"
                    style={{animationDelay: "0.5s"}}>
                    {/* Card 1 */}
                    <div className="glass rounded-2xl p-6 border border-[var(--border-color)]/30 hover:border-[var(--primary-color)]/60 transition-all duration-300 group hover:shadow-lg hover:shadow-[var(--primary-color)]/20">
                        <div className="text-3xl mb-3">�</div>
                        <h4 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                            Full Stack
                        </h4>
                        <p className="text-sm text-[var(--text-secondary)]">
                            React, Next.js, Node.js, and modern databases
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="glass rounded-2xl p-6 border border-[var(--border-color)]/30 hover:border-[var(--secondary-color)]/60 transition-all duration-300 group hover:shadow-lg hover:shadow-[var(--secondary-color)]/20">
                        <div className="text-3xl mb-3">💡</div>
                        <h4 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                            Problem Solving
                        </h4>
                        <p className="text-sm text-[var(--text-secondary)]">
                            Building scalable solutions for real-world
                            challenges
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="glass rounded-2xl p-6 border border-[var(--border-color)]/30 hover:border-[var(--accent-color)]/60 transition-all duration-300 group hover:shadow-lg hover:shadow-[var(--accent-color)]/20">
                        <div className="text-3xl mb-3">✨</div>
                        <h4 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                            Clean Code
                        </h4>
                        <p className="text-sm text-[var(--text-secondary)]">
                            Maintainable, intuitive code with exceptional UX
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="glass rounded-2xl p-6 border border-[var(--border-color)]/30 hover:border-[var(--primary-color)]/60 transition-all duration-300 group hover:shadow-lg hover:shadow-[var(--primary-color)]/20">
                        <div className="text-3xl mb-3">🎯</div>
                        <h4 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                            User Focused
                        </h4>
                        <p className="text-sm text-[var(--text-secondary)]">
                            Creating seamless experiences that users love
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
