/* eslint-disable react/no-unescaped-entities */
"use client";

import {FaUser, FaDownload, FaEnvelope} from "react-icons/fa";
import Image from "next/image";
import profile from "../assets/images/profile.webp";
import {useSettings} from "../hooks/useSettings";

import {
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaInstagram,
    FaFacebook,
} from "react-icons/fa";

const AboutMe = () => {
    const {settings, loading} = useSettings();

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
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-flex items-center justify-center mb-8">
                        <div className="relative">
                            <div className="w-20 h-20 bg-gradient-to-br from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 rounded-3xl flex items-center justify-center border border-[var(--border-color)]/40 backdrop-blur-sm">
                                <FaUser className="animate-bounce text-2xl text-white" />
                            </div>
                            <div className="absolute -inset-2 bg-gradient-to-r from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 rounded-3xl blur-lg animate-pulse"></div>
                        </div>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4 sm:mb-6 animate-slide-up">
                        About{" "}
                        <span className="bg-gradient-to-r from-[var(--primary-color)] via-[var(--secondary-color)] to-[var(--accent-color)] bg-clip-text text-transparent animate-glow">
                            Me
                        </span>
                    </h2>
                    <p
                        className="text-sm sm:text-base lg:text-lg text-[var(--text-secondary)] max-w-xl lg:max-w-2xl mx-auto leading-relaxed animate-slide-up px-4"
                        style={{animationDelay: "0.2s"}}>
                        Get to know the person behind the code - my journey,
                        passions, and what drives me to create exceptional
                        digital experiences.
                    </p>
                </div>

                {/* About Content */}
                <div className="">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                        {/* Left Column - Image */}
                        <div
                            className="animate-slide-up"
                            style={{animationDelay: "0.3s"}}>
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] rounded-3xl blur-2xl opacity-20 transform rotate-6"></div>
                                <div className="relative bg-gradient-to-br from-[var(--card-bg)] to-[var(--card-bg)]/20 backdrop-blur-xl rounded-3xl p-4 sm:p-6 lg:p-8 border border-[var(--border-color)]">
                                    <div className="relative">
                                        <Image
                                            src={profile}
                                            alt="Ripas Sorker Rifat"
                                            width={400}
                                            height={400}
                                            className="rounded-2xl w-full h-auto object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-color)]/30 to-transparent rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Content */}
                        <div
                            className="animate-slide-up"
                            style={{animationDelay: "0.4s"}}>
                            <div className="space-y-6">
                                <div className="space-y-4 md:text-lg text-base">
                                    <p className="text-[var(--text-secondary)] leading-relaxed">
                                        Hi, I'm{" "}
                                        <span className="text-[var(--primary-color)] font-semibold">
                                            Ripas Sorker Rifat
                                        </span>
                                        , a passionate full-stack developer
                                        currently pursuing my Bachelor's degree
                                        in Computer Science & Engineering at
                                        Dhaka International University.
                                    </p>
                                    <p className="text-[var(--text-secondary)] leading-relaxed">
                                        I specialize in React, Next.js, Node.js,
                                        and various databases. My journey
                                        started with curiosity about how web
                                        applications work, and it has evolved
                                        into a career dedicated to building
                                        exceptional user experiences.
                                    </p>
                                    <p className="text-[var(--text-secondary)] leading-relaxed">
                                        With over 2 years of professional
                                        experience, I've worked on diverse
                                        projects including{" "}
                                        <span className="text-[var(--primary-color)] font-medium">
                                            OTA (Online Travel Agency) platforms
                                        </span>{" "}
                                        as a frontend expert, comprehensive{" "}
                                        <span className="text-[var(--primary-color)] font-medium">
                                            HRMS (Human Resource Management
                                            Systems)
                                        </span>
                                        , and elegant{" "}
                                        <span className="text-[var(--primary-color)] font-medium">
                                            jewelry e-commerce platforms
                                        </span>
                                        . I'm passionate about writing clean,
                                        maintainable code and creating intuitive
                                        user interfaces that solve real-world
                                        problems.
                                    </p>
                                    <p className="text-[var(--text-secondary)] leading-relaxed">
                                        My expertise spans across frontend
                                        development with modern frameworks,
                                        full-stack application architecture, and
                                        creating seamless user experiences for
                                        complex business domains. I enjoy
                                        tackling challenging projects that
                                        require both technical excellence and
                                        creative problem-solving.
                                    </p>
                                </div>

                                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                                    {getSocialLinks().map(
                                        (social: any, index: number) => (
                                            <a
                                                key={social.name}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`group relative size-12 glass rounded-2xl flex items-center justify-center text-[var(--text-secondary)] ${social.color} border border-[var(--border-color)]/30 hover:border-[var(--primary-color)]/60 transition-all duration-500 hover:scale-110 backdrop-blur-sm animate-slide-up overflow-hidden`}
                                                style={{
                                                    animationDelay: `${
                                                        index * 0.1
                                                    }s`,
                                                }}
                                                title={social.name}>
                                                <div
                                                    className={`absolute inset-0 bg-gradient-to-br ${social.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                                                <span className="relative text-xl group-hover:scale-125 transition-transform duration-300">
                                                    {social.icon}
                                                </span>
                                            </a>
                                        )
                                    )}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-wrap gap-4 mt-8">
                                    <button
                                        onClick={handleResumeDownload}
                                        className="cursor-pointer md:w-auto w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg hover:shadow-[var(--primary-color)]/25 transition-all duration-300 transform hover:-translate-y-1">
                                        <FaDownload className="text-sm" />
                                        <span>Download Resume</span>
                                    </button>
                                    <a
                                        href="#contact"
                                        className="md:w-auto w-full flex items-center justify-center space-x-2 border border-[var(--primary-color)] text-[var(--primary-color)] px-8 py-4 rounded-2xl font-semibold hover:bg-[var(--primary-color)] hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                                        <FaEnvelope className="text-sm" />
                                        <span>Get In Touch</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
