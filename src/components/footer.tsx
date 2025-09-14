/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import {
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaInstagram,
    FaFacebook,
} from "react-icons/fa";

const Footer = () => {
    const socialLinks = [
        {
            name: "GitHub",
            icon: <FaGithub />,
            href: "https://github.com/ripassorkerrifat",
            color: "hover:text-purple-400",
            bgGradient: "from-purple-500/20 to-indigo-500/20",
        },
        {
            name: "LinkedIn",
            icon: <FaLinkedin />,
            href: "https://www.linkedin.com/in/ripas-sorker-rifat-b42a01257/",
            color: "hover:text-blue-400",
            bgGradient: "from-blue-500/20 to-cyan-500/20",
        },
        {
            name: "Facebook",
            icon: <FaFacebook />,
            href: "https://www.facebook.com/ripassorkerrifat",
            color: "hover:text-blue-500",
            bgGradient: "from-blue-600/20 to-blue-400/20",
        },
        {
            name: "Twitter",
            icon: <FaTwitter />,
            href: "https://x.com/ripassorker",
            color: "hover:text-sky-400",
            bgGradient: "from-sky-500/20 to-cyan-400/20",
        },
        {
            name: "Instagram",
            icon: <FaInstagram />,
            href: "https://www.instagram.com/ripassorkerrifat",
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
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
                {/* Enhanced Header Section */}
                <div className="text-center mb-12 ">
                    <div className="inline-flex items-center justify-center mb-8">
                        <div className="relative">
                            <div className="w-20 h-20 bg-gradient-to-br from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 rounded-3xl flex items-center justify-center border border-[var(--border-color)]/40 backdrop-blur-sm animate-pulse">
                                <span className="text-4xl">🚀</span>
                            </div>
                            <div className="absolute -inset-2 bg-gradient-to-r from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 rounded-3xl blur-lg animate-pulse"></div>
                        </div>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4 sm:mb-6">
                        Ripas{" "}
                        <span className="bg-gradient-to-r from-[var(--primary-color)] via-[var(--secondary-color)] to-[var(--accent-color)] bg-clip-text text-transparent animate-glow">
                            Sorker Rifat
                        </span>
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg text-[var(--text-secondary)] max-w-2xl lg:max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4">
                        Full Stack Developer crafting beautiful digital
                        experiences with modern technologies
                    </p>

                    {/* Call to Action */}
                    <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-8">
                        <a
                            href="#contact"
                            className="group bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-sm sm:text-base">
                            <span>Let's Work Together</span>
                            <span className="group-hover:translate-x-1 transition-transform duration-300">
                                →
                            </span>
                        </a>
                        <a
                            href="mailto:ripassorkerrifat@gmail.com"
                            className="group glass border border-[var(--border-color)]/50 hover:border-[var(--primary-color)]/60 text-[var(--text-primary)] hover:text-[var(--primary-color)] px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold hover:scale-105 transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-3 text-sm sm:text-base">
                            <span>📧</span>
                            <span>Send Email</span>
                        </a>
                    </div>
                </div>

                {/* Enhanced Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12  ">
                    {/* Quick Links */}
                    <div className="text-center hidden md:block lg:text-left">
                        <h4 className="text-2xl font-bold text-[var(--text-primary)] mb-8 flex items-center justify-center lg:justify-start gap-3">
                            <span className="w-8 h-8 bg-gradient-to-br from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 rounded-lg flex items-center justify-center">
                                🧭
                            </span>
                            Navigation
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
                        <h4 className="text-2xl font-bold text-[var(--text-primary)] mb-8 flex items-center justify-center lg:justify-start gap-3">
                            <span className="w-8 h-8 bg-gradient-to-br from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 rounded-lg flex items-center justify-center">
                                🌐
                            </span>
                            Connect
                        </h4>
                        <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`group relative w-10 h-10 sm:w-12 sm:h-12 glass rounded-2xl flex items-center justify-center text-[var(--text-secondary)] ${social.color} border border-[var(--border-color)]/30 hover:border-[var(--primary-color)]/60 transition-all duration-500 hover:scale-110 backdrop-blur-sm animate-slide-up overflow-hidden`}
                                    style={{animationDelay: `${index * 0.1}s`}}
                                    title={social.name}>
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${social.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                                    <span className="relative text-lg sm:text-xl group-hover:scale-125 transition-transform duration-300">
                                        {social.icon}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="text-center lg:text-left">
                        <h4 className="text-2xl font-bold text-[var(--text-primary)] mb-8 flex items-center justify-center lg:justify-start gap-3">
                            <span className="w-8 h-8 bg-gradient-to-br from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 rounded-lg flex items-center justify-center">
                                📞
                            </span>
                            Contact
                        </h4>
                        <div className="space-y-3 sm:space-y-4">
                            <a
                                href="mailto:ripassorkerrifat@gmail.com"
                                className="group flex items-center justify-center lg:justify-start gap-3 text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-all duration-300 hover:translate-x-2">
                                <span className="w-6 h-6 bg-gradient-to-br from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 rounded-lg flex items-center justify-center text-sm">
                                    📧
                                </span>
                                <span className="text-base">
                                    ripassorkerrifat@gmail.com
                                </span>
                            </a>
                            <a
                                href="tel:+8801744876681"
                                className="group flex items-center justify-center lg:justify-start gap-3 text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-all duration-300 hover:translate-x-2">
                                <span className="w-6 h-6 bg-gradient-to-br from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 rounded-lg flex items-center justify-center text-sm">
                                    📱
                                </span>
                                <span className="text-base">
                                    +880 1744876681
                                </span>
                            </a>
                            <div className="group flex items-center justify-center lg:justify-start gap-3 text-[var(--text-secondary)]">
                                <span className="w-6 h-6 bg-gradient-to-br from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 rounded-lg flex items-center justify-center text-sm">
                                    📍
                                </span>
                                <span className="text-sm sm:text-base lg:text-lg">
                                    Dhaka, Bangladesh
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Newsletter/CTA Section */}
                    <div className="text-center lg:text-left">
                        <h4 className="text-2xl font-bold text-[var(--text-primary)] mb-8 flex items-center justify-center lg:justify-start gap-3">
                            <span className="w-8 h-8 bg-gradient-to-br from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 rounded-lg flex items-center justify-center">
                                💡
                            </span>
                            Let's Connect
                        </h4>
                        <p className="text-[var(--text-secondary)] text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                            Ready to bring your ideas to life? Let's discuss
                            your next project!
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg text-sm sm:text-base">
                            <span>Get In Touch</span>
                            <span>🚀</span>
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
                        <span className="text-red-400 animate-pulse">❤️</span>
                    </div>
                </div>
            </div>

            {/* Simple Scroll to Top Button */}
            <button
                onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}
                className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 glass rounded-2xl flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--primary-color)] border border-[var(--border-color)]/30 hover:border-[var(--primary-color)]/60 transition-all duration-300 hover:scale-110 z-50 backdrop-blur-sm"
                aria-label="Scroll to top">
                <span className="text-lg sm:text-xl">↑</span>
            </button>
        </footer>
    );
};

export default Footer;
