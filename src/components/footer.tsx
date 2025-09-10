"use client";

import React from "react";
import {FaGithub, FaLinkedin, FaTwitter, FaDiscord} from "react-icons/fa";

const Footer = () => {
    const socialLinks = [
        {
            name: "GitHub",
            icon: <FaGithub />,
            href: "https://github.com/ripas",
            color: "hover:text-purple-400",
        },
        {
            name: "LinkedIn",
            icon: <FaLinkedin />,
            href: "https://linkedin.com/in/ripas",
            color: "hover:text-blue-400",
        },
        {
            name: "Twitter",
            icon: <FaTwitter />,
            href: "https://twitter.com/ripas",
            color: "hover:text-sky-400",
        },
        {
            name: "Discord",
            icon: <FaDiscord />,
            href: "https://discord.com/users/ripas",
            color: "hover:text-indigo-400",
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
            {/* Floating Elements - Banner Style */}
            <div className="absolute top-20 left-10 w-20 h-20 bg-[var(--primary-color)]/20 rounded-full blur-xl animate-float"></div>
            <div
                className="absolute bottom-40 right-20 w-24 h-24 bg-[var(--secondary-color)]/20 rounded-full blur-xl animate-float"
                style={{animationDelay: "2s"}}></div>
            <div
                className="absolute top-1/2 left-1/4 w-16 h-16 bg-[var(--accent-color)]/15 rounded-full blur-lg animate-float"
                style={{animationDelay: "4s"}}></div>

            {/* Main Footer Content */}
            <div className="relative z-10 container mx-auto px-6 py-16">
                {/* Simple Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
                        Ripas{" "}
                        <span className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text text-transparent">
                            Sorker
                        </span>
                    </h2>
                    <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto leading-relaxed">
                        Full Stack Developer crafting beautiful digital
                        experiences
                    </p>
                </div>

                {/* Simple Grid Layout */}
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* Quick Links */}
                    <div className="text-center">
                        <h4 className="text-xl font-bold text-[var(--text-primary)] mb-6">
                            Navigation
                        </h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors duration-300 text-lg">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div className="text-center">
                        <h4 className="text-xl font-bold text-[var(--text-primary)] mb-6">
                            Connect
                        </h4>
                        <div className="flex justify-center gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-12 h-12 glass rounded-2xl flex items-center justify-center text-[var(--text-secondary)] ${social.color} border border-[var(--border-color)]/30 hover:border-[var(--primary-color)]/60 transition-all duration-300 hover:scale-110 backdrop-blur-sm`}>
                                    <span className="text-xl">
                                        {social.icon}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="text-center">
                        <h4 className="text-xl font-bold text-[var(--text-primary)] mb-6">
                            Contact
                        </h4>
                        <div className="space-y-3 text-[var(--text-secondary)]">
                            <p>rifat@example.com</p>
                            <p>+880 123 456 789</p>
                            <p>Dhaka, Bangladesh</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Simple Bottom Bar */}
            <div className="relative z-10 border-t border-[var(--border-color)]/30 bg-[var(--primary-bg)]/80 backdrop-blur-xl">
                <div className="container mx-auto px-6 py-6">
                    <div className="text-center text-[var(--text-secondary)]">
                        &copy; {new Date().getFullYear()} Ripas Sorker Rifat.
                        Made with{" "}
                        <span className="text-red-400 animate-pulse">❤️</span>
                    </div>
                </div>
            </div>

            {/* Simple Scroll to Top Button */}
            <button
                onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}
                className="fixed bottom-8 right-8 w-12 h-12 glass rounded-2xl flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--primary-color)] border border-[var(--border-color)]/30 hover:border-[var(--primary-color)]/60 transition-all duration-300 hover:scale-110 z-50 backdrop-blur-sm"
                aria-label="Scroll to top">
                <span className="text-xl">↑</span>
            </button>
        </footer>
    );
};

export default Footer;
