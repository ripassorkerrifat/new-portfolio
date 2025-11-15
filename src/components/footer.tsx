/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import {
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaInstagram,
    FaFacebook,
    FaMapMarkerAlt,
    FaPhone,
    FaEnvelope,
    FaCompass,
    FaGlobe,
    FaRocket,
    FaHeart,
} from "react-icons/fa";
import {useSettings} from "../contexts/SettingsContext";

const Footer = () => {
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

    const quickLinks = [
        {name: "About", href: "#about"},
        {name: "Skills", href: "#skills"},
        {name: "Projects", href: "#projects"},
        {name: "Contact", href: "#contact"},
    ];

    return (
        <footer className="relative bg-gradient-to-br from-[var(--primary-bg)] via-[var(--secondary-bg)] to-[var(--accent-bg)] overflow-hidden">
            {/* Enhanced Floating Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 rounded-full blur-3xl animate-float"></div>
                <div
                    className="absolute bottom-40 right-20 w-40 h-40 bg-gradient-to-br from-[var(--secondary-color)]/15 to-[var(--accent-color)]/15 rounded-full blur-3xl animate-float"
                    style={{animationDelay: "2s"}}></div>
                <div
                    className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-[var(--accent-color)]/10 to-[var(--primary-color)]/10 rounded-full blur-2xl animate-float"
                    style={{animationDelay: "4s"}}></div>
                <div
                    className="absolute top-10 right-1/3 w-20 h-20 bg-gradient-to-br from-[var(--primary-color)]/15 to-[var(--accent-color)]/15 rounded-full blur-xl animate-float"
                    style={{animationDelay: "1s"}}></div>
            </div>

            {/* Main Footer Content */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
                {/* Enhanced Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
                    {/* Quick Links */}
                    <div className="text-center hidden md:block lg:text-left">
                        <h4 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] mb-6 sm:mb-8 flex items-center justify-center lg:justify-start gap-3 uppercase tracking-wider">
                            <span className="w-8 h-8 bg-gradient-to-br from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 rounded-lg flex items-center justify-center text-base text-[var(--primary-color)]">
                                <FaCompass />
                            </span>
                            <span className="text-sm font-semibold">
                                Navigation
                            </span>
                        </h4>
                        <ul className="space-y-3 sm:space-y-4">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="group text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-all duration-300 text-sm sm:text-base flex items-center justify-center lg:justify-start gap-3 hover:translate-x-2">
                                        <span className="w-2 h-2 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div className="text-center lg:text-left">
                        <h4 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] mb-6 sm:mb-8 flex items-center justify-center lg:justify-start gap-3 uppercase tracking-wider">
                            <span className="w-8 h-8 bg-gradient-to-br from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 rounded-lg flex items-center justify-center text-base text-[var(--secondary-color)]">
                                <FaGlobe />
                            </span>
                            <span className="text-sm font-semibold">
                                Connect
                            </span>
                        </h4>
                        <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
                            {getSocialLinks().map(
                                (social: any, index: number) => (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`group relative w-10 h-10 sm:w-12 sm:h-12 glass rounded-2xl flex items-center justify-center text-[var(--text-secondary)] ${social.color} border border-[var(--border-color)]/30 hover:border-[var(--primary-color)]/60 transition-all duration-500 hover:scale-110 backdrop-blur-sm animate-slide-up overflow-hidden`}
                                        style={{
                                            animationDelay: `${index * 0.1}s`,
                                        }}
                                        title={social.name}>
                                        <div
                                            className={`absolute inset-0 bg-gradient-to-br ${social.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                                        <span className="relative text-lg sm:text-xl group-hover:scale-125 transition-transform duration-300">
                                            {social.icon}
                                        </span>
                                    </a>
                                )
                            )}
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="text-center lg:text-left">
                        <h4 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] mb-6 sm:mb-8 flex items-center justify-center lg:justify-start gap-3 uppercase tracking-wider">
                            <span className="w-8 h-8 bg-gradient-to-br from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 rounded-lg flex items-center justify-center text-base text-[var(--accent-color)]">
                                <FaPhone />
                            </span>
                            <span className="text-sm font-semibold">
                                Contact
                            </span>
                        </h4>
                        <div className="space-y-3 sm:space-y-4">
                            <a
                                href="mailto:ripassorkerrifat@gmail.com"
                                className="group flex items-center justify-center lg:justify-start gap-3 text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-all duration-300 hover:translate-x-2">
                                <span className="w-6 h-6 bg-gradient-to-br from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 rounded-lg flex items-center justify-center text-sm text-[var(--primary-color)]">
                                    <FaEnvelope />
                                </span>
                                <span className="text-base">
                                    ripassorkerrifat@gmail.com
                                </span>
                            </a>
                            <a
                                href="tel:+8801744876681"
                                className="group flex items-center justify-center lg:justify-start gap-3 text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-all duration-300 hover:translate-x-2">
                                <span className="w-6 h-6 bg-gradient-to-br from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 rounded-lg flex items-center justify-center text-sm text-[var(--secondary-color)]">
                                    <FaPhone />
                                </span>
                                <span className="text-base">
                                    +880 1744876681
                                </span>
                            </a>
                            <div className="group flex items-center justify-center lg:justify-start gap-3 text-[var(--text-secondary)]">
                                <span className="w-6 h-6 bg-gradient-to-br from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 rounded-lg flex items-center justify-center text-sm text-[var(--accent-color)]">
                                    <FaMapMarkerAlt />
                                </span>
                                <span className="text-sm sm:text-base lg:text-lg">
                                    Dhaka, Bangladesh
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Newsletter/CTA Section */}
                    <div className="text-center lg:text-left">
                        <h4 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] mb-6 sm:mb-8 flex items-center justify-center lg:justify-start gap-3 uppercase tracking-wider">
                            <span className="w-8 h-8 bg-gradient-to-br from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 rounded-lg flex items-center justify-center text-base text-[var(--primary-color)]">
                                <FaRocket />
                            </span>
                            <span className="text-sm font-semibold">
                                Connect
                            </span>
                        </h4>
                        <p className="text-[var(--text-secondary)] text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed font-light">
                            Ready to bring your ideas to life? Let's discuss
                            your next project!
                        </p>
                        <a
                            href="#contact"
                            className="group inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] hover:from-[var(--primary-color)]/95 hover:to-[var(--secondary-color)]/95 text-white font-semibold px-6 py-3 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-[var(--primary-color)]/40 text-sm sm:text-base overflow-hidden">
                            <span className="relative z-10">Get In Touch</span>
                            <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">
                                <FaRocket />
                            </span>
                            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </a>
                    </div>
                </div>
            </div>

            {/* Simple Bottom Bar */}
            <div className="relative z-10 border-t border-[var(--border-color)]/30 bg-[var(--primary-bg)]/80 backdrop-blur-xl">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
                    <div className="text-center text-sm sm:text-base text-[var(--text-secondary)]">
                        &copy; {new Date().getFullYear()} Ripas Sorker Rifat.
                        Made with{" "}
                        <span className="text-red-400 animate-pulse inline-flex items-center">
                            <FaHeart />
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
