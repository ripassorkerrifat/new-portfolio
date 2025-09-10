/* eslint-disable react/no-unescaped-entities */
"use client";

import {useState, useEffect} from "react";
import {
    FaUser,
    FaCode,
    FaTrophy,
    FaMapMarkerAlt,
    FaEnvelope,
    FaPhone,
    FaCalendarAlt,
    FaRocket,
    FaLightbulb,
    FaHeart,
    FaDownload,
    FaEye,
} from "react-icons/fa";

const About = () => {
    const [activeTab, setActiveTab] = useState("about");
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const tabs = [
        {id: "about", label: "About Me", icon: <FaUser />},
        {id: "experience", label: "Experience", icon: <FaCode />},
        {id: "achievements", label: "Achievements", icon: <FaTrophy />},
    ];

    return (
        <section
            id="about"
            className="py-20 bg-gradient-to-br from-[var(--primary-bg)] via-[var(--secondary-bg)] to-[var(--accent-bg)] relative overflow-hidden">
            {/* Enhanced Background Elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 rounded-full blur-3xl animate-pulse"></div>
                <div
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-[var(--secondary-color)]/15 to-[var(--accent-color)]/15 rounded-full blur-3xl animate-pulse"
                    style={{animationDelay: "3s"}}></div>
                <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[var(--accent-color)]/10 to-[var(--primary-color)]/10 rounded-full blur-3xl animate-pulse"
                    style={{animationDelay: "1.5s"}}></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Modern Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center justify-center mb-8">
                        <div className="relative">
                            <div className="w-20 h-20 bg-gradient-to-br from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 rounded-3xl flex items-center justify-center border border-[var(--border-color)]/40 backdrop-blur-sm">
                                <FaUser className="text-4xl text-[var(--primary-color)] animate-bounce" />
                            </div>
                            <div className="absolute -inset-2 bg-gradient-to-r from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 rounded-3xl blur-lg animate-pulse"></div>
                        </div>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-[var(--text-primary)] mb-6 animate-slide-up">
                        About{" "}
                        <span className="bg-gradient-to-r from-[var(--primary-color)] via-[var(--secondary-color)] to-[var(--accent-color)] bg-clip-text text-transparent animate-glow">
                            Me
                        </span>
                    </h2>
                    <p
                        className="text-[var(--text-secondary)] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed animate-slide-up"
                        style={{animationDelay: "0.2s"}}>
                        Passionate full-stack developer crafting innovative
                        digital solutions with cutting-edge technologies and
                        creative problem-solving.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left Content */}
                    <div className="space-y-8">
                        {/* Enhanced Tab Navigation */}
                        <div className="flex flex-wrap justify-center gap-6 mb-12">
                            {tabs.map((tab, index) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`group flex items-center space-x-3 px-8 py-4 rounded-2xl font-semibold transition-all duration-500 transform hover:scale-105 animate-slide-up ${
                                        activeTab === tab.id
                                            ? "bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white shadow-2xl shadow-[var(--primary-color)]/30 backdrop-blur-xl"
                                            : "glass border border-[var(--border-color)] text-[var(--text-secondary)] hover:border-[var(--primary-color)]/50 hover:shadow-xl hover:shadow-[var(--primary-color)]/20 backdrop-blur-xl"
                                    }`}
                                    style={{animationDelay: `${index * 0.1}s`}}>
                                    <span
                                        className={`text-xl transition-transform duration-300 ${
                                            activeTab === tab.id
                                                ? "scale-110"
                                                : "group-hover:scale-110"
                                        }`}>
                                        {tab.icon}
                                    </span>
                                    <span className="text-lg">{tab.label}</span>
                                </button>
                            ))}
                        </div>

                        {/* Enhanced Tab Content */}
                        <div className="group glass rounded-3xl p-10 border border-[var(--border-color)] hover:border-[var(--primary-color)]/60 transition-all duration-700 transform hover:scale-105 hover:shadow-2xl hover:shadow-[var(--primary-color)]/20 backdrop-blur-xl relative overflow-hidden">
                            {/* Background Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-color)]/5 to-[var(--secondary-color)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative z-10">
                                {activeTab === "about" && (
                                    <div className="space-y-8">
                                        <div className="flex items-center space-x-4 mb-6">
                                            <div className="w-16 h-16 bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] rounded-2xl flex items-center justify-center shadow-lg">
                                                <FaRocket className="text-2xl text-white" />
                                            </div>
                                            <h3 className="text-3xl font-bold text-[var(--text-primary)]">
                                                Full Stack Developer
                                            </h3>
                                        </div>

                                        <div className="space-y-6">
                                            <p className="text-[var(--text-secondary)] leading-relaxed text-lg">
                                                I'm a passionate full-stack
                                                developer with over 3+ years of
                                                experience crafting modern web
                                                applications that make a
                                                difference. I specialize in
                                                React, Next.js, Node.js, and
                                                cutting-edge technologies to
                                                build scalable, user-centric
                                                solutions.
                                            </p>
                                            <p className="text-[var(--text-secondary)] leading-relaxed text-lg">
                                                When I'm not coding, you'll find
                                                me exploring emerging
                                                technologies, contributing to
                                                open-source projects, or
                                                mentoring fellow developers. I
                                                believe in continuous learning
                                                and sharing knowledge with the
                                                community.
                                            </p>
                                        </div>

                                        {/* Enhanced Personal Info */}
                                        <div className="grid md:grid-cols-2 gap-6 mt-8">
                                            <div className="glass p-4 rounded-2xl border border-[var(--border-color)]/50">
                                                <div className="flex items-center space-x-3 mb-2">
                                                    <FaUser className="text-[var(--primary-color)]" />
                                                    <span className="text-[var(--primary-color)] font-semibold">
                                                        Name
                                                    </span>
                                                </div>
                                                <p className="text-[var(--text-primary)] font-medium">
                                                    Ripas Sorker Rifat
                                                </p>
                                            </div>
                                            <div className="glass p-4 rounded-2xl border border-[var(--border-color)]/50">
                                                <div className="flex items-center space-x-3 mb-2">
                                                    <FaMapMarkerAlt className="text-[var(--secondary-color)]" />
                                                    <span className="text-[var(--primary-color)] font-semibold">
                                                        Location
                                                    </span>
                                                </div>
                                                <p className="text-[var(--text-primary)] font-medium">
                                                    Bangladesh
                                                </p>
                                            </div>
                                            <div className="glass p-4 rounded-2xl border border-[var(--border-color)]/50">
                                                <div className="flex items-center space-x-3 mb-2">
                                                    <FaEnvelope className="text-[var(--accent-color)]" />
                                                    <span className="text-[var(--primary-color)] font-semibold">
                                                        Email
                                                    </span>
                                                </div>
                                                <p className="text-[var(--text-primary)] font-medium">
                                                    rifat@example.com
                                                </p>
                                            </div>
                                            <div className="glass p-4 rounded-2xl border border-[var(--border-color)]/50">
                                                <div className="flex items-center space-x-3 mb-2">
                                                    <FaPhone className="text-[var(--primary-color)]" />
                                                    <span className="text-[var(--primary-color)] font-semibold">
                                                        Phone
                                                    </span>
                                                </div>
                                                <p className="text-[var(--text-primary)] font-medium">
                                                    +880 123 456 789
                                                </p>
                                            </div>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex flex-wrap gap-4 mt-8">
                                            <button className="group flex items-center space-x-2 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                                                <FaDownload className="group-hover:animate-bounce" />
                                                <span>Download CV</span>
                                            </button>
                                            <button className="group flex items-center space-x-2 glass border border-[var(--primary-color)]/30 text-[var(--primary-color)] px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition-all duration-300 hover:bg-[var(--primary-color)]/10">
                                                <FaEye className="group-hover:animate-pulse" />
                                                <span>View Portfolio</span>
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {activeTab === "experience" && (
                                    <div className="space-y-8">
                                        <div className="flex items-center space-x-4 mb-6">
                                            <div className="w-16 h-16 bg-gradient-to-br from-[var(--secondary-color)] to-[var(--accent-color)] rounded-2xl flex items-center justify-center shadow-lg">
                                                <FaCode className="text-2xl text-white" />
                                            </div>
                                            <h3 className="text-3xl font-bold text-[var(--text-primary)]">
                                                Professional Journey
                                            </h3>
                                        </div>

                                        <div className="space-y-8">
                                            <div className="glass p-6 rounded-2xl border border-[var(--border-color)]/50 hover:border-[var(--primary-color)]/50 transition-all duration-300">
                                                <div className="flex items-start space-x-4">
                                                    <div className="w-4 h-4 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] rounded-full mt-2 flex-shrink-0"></div>
                                                    <div className="flex-1">
                                                        <div className="flex items-center space-x-2 mb-2">
                                                            <FaCalendarAlt className="text-[var(--primary-color)]" />
                                                            <span className="text-[var(--primary-color)] font-medium text-sm">
                                                                2022 - Present
                                                            </span>
                                                        </div>
                                                        <h4 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                                                            Senior Full Stack
                                                            Developer
                                                        </h4>
                                                        <p className="text-[var(--secondary-color)] font-semibold mb-3">
                                                            Tech Solutions Inc.
                                                        </p>
                                                        <p className="text-[var(--text-secondary)] leading-relaxed">
                                                            Leading development
                                                            of enterprise-level
                                                            web applications
                                                            using React,
                                                            Next.js, and
                                                            Node.js. Mentoring
                                                            junior developers
                                                            and architecting
                                                            scalable solutions
                                                            for high-traffic
                                                            applications.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="glass p-6 rounded-2xl border border-[var(--border-color)]/50 hover:border-[var(--primary-color)]/50 transition-all duration-300">
                                                <div className="flex items-start space-x-4">
                                                    <div className="w-4 h-4 bg-gradient-to-r from-[var(--secondary-color)] to-[var(--accent-color)] rounded-full mt-2 flex-shrink-0"></div>
                                                    <div className="flex-1">
                                                        <div className="flex items-center space-x-2 mb-2">
                                                            <FaCalendarAlt className="text-[var(--secondary-color)]" />
                                                            <span className="text-[var(--secondary-color)] font-medium text-sm">
                                                                2021 - 2022
                                                            </span>
                                                        </div>
                                                        <h4 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                                                            Full Stack Developer
                                                        </h4>
                                                        <p className="text-[var(--secondary-color)] font-semibold mb-3">
                                                            Digital Agency
                                                        </p>
                                                        <p className="text-[var(--text-secondary)] leading-relaxed">
                                                            Developed responsive
                                                            web applications and
                                                            RESTful APIs.
                                                            Collaborated with
                                                            design teams to
                                                            implement
                                                            pixel-perfect UI/UX
                                                            designs and optimize
                                                            user experiences.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="glass p-6 rounded-2xl border border-[var(--border-color)]/50 hover:border-[var(--primary-color)]/50 transition-all duration-300">
                                                <div className="flex items-start space-x-4">
                                                    <div className="w-4 h-4 bg-gradient-to-r from-[var(--accent-color)] to-[var(--primary-color)] rounded-full mt-2 flex-shrink-0"></div>
                                                    <div className="flex-1">
                                                        <div className="flex items-center space-x-2 mb-2">
                                                            <FaCalendarAlt className="text-[var(--accent-color)]" />
                                                            <span className="text-[var(--accent-color)] font-medium text-sm">
                                                                2020 - 2021
                                                            </span>
                                                        </div>
                                                        <h4 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                                                            Frontend Developer
                                                        </h4>
                                                        <p className="text-[var(--secondary-color)] font-semibold mb-3">
                                                            StartUp Co.
                                                        </p>
                                                        <p className="text-[var(--text-secondary)] leading-relaxed">
                                                            Built modern,
                                                            responsive web
                                                            interfaces using
                                                            React and
                                                            TypeScript.
                                                            Optimized
                                                            application
                                                            performance and
                                                            implemented industry
                                                            best practices.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === "achievements" && (
                                    <div className="space-y-8">
                                        <div className="flex items-center space-x-4 mb-6">
                                            <div className="w-16 h-16 bg-gradient-to-br from-[var(--accent-color)] to-[var(--primary-color)] rounded-2xl flex items-center justify-center shadow-lg">
                                                <FaTrophy className="text-2xl text-white" />
                                            </div>
                                            <h3 className="text-3xl font-bold text-[var(--text-primary)]">
                                                Achievements & Recognition
                                            </h3>
                                        </div>

                                        <div className="grid gap-6">
                                            <div className="glass p-6 rounded-2xl border border-[var(--border-color)]/50 hover:border-[var(--primary-color)]/50 transition-all duration-300 group">
                                                <div className="flex items-start space-x-4">
                                                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                                        <FaTrophy className="text-white text-lg" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <h4 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                                                            Best Developer Award
                                                            2023
                                                        </h4>
                                                        <p className="text-[var(--text-secondary)] leading-relaxed">
                                                            Recognized for
                                                            outstanding
                                                            performance and
                                                            innovation in
                                                            full-stack
                                                            development
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="glass p-6 rounded-2xl border border-[var(--border-color)]/50 hover:border-[var(--primary-color)]/50 transition-all duration-300 group">
                                                <div className="flex items-start space-x-4">
                                                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                                        <FaCode className="text-white text-lg" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <h4 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                                                            Open Source
                                                            Contributor
                                                        </h4>
                                                        <p className="text-[var(--text-secondary)] leading-relaxed">
                                                            Active contributor
                                                            to popular React and
                                                            Node.js projects
                                                            with 500+ GitHub
                                                            contributions
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="glass p-6 rounded-2xl border border-[var(--border-color)]/50 hover:border-[var(--primary-color)]/50 transition-all duration-300 group">
                                                <div className="flex items-start space-x-4">
                                                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                                        <FaLightbulb className="text-white text-lg" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <h4 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                                                            Tech Speaker &
                                                            Mentor
                                                        </h4>
                                                        <p className="text-[var(--text-secondary)] leading-relaxed">
                                                            Regular speaker at
                                                            developer
                                                            conferences and
                                                            mentor to 50+ junior
                                                            developers
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="glass p-6 rounded-2xl border border-[var(--border-color)]/50 hover:border-[var(--primary-color)]/50 transition-all duration-300 group">
                                                <div className="flex items-start space-x-4">
                                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                                        <FaHeart className="text-white text-lg" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <h4 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                                                            Community Leader
                                                        </h4>
                                                        <p className="text-[var(--text-secondary)] leading-relaxed">
                                                            Founded local
                                                            developer community
                                                            with 1000+ members
                                                            and organized 20+
                                                            tech events
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    {/* Enhanced Right Content - Profile & Stats */}
                    <div className="space-y-8">
                        {/* Enhanced Profile Card */}
                        <div className="group relative animate-slide-up">
                            <div className="glass rounded-3xl p-8 border border-[var(--border-color)] hover:border-[var(--primary-color)]/60 transition-all duration-700 transform hover:scale-105 hover:shadow-2xl hover:shadow-[var(--primary-color)]/20 backdrop-blur-xl relative overflow-hidden">
                                {/* Background Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-color)]/5 to-[var(--secondary-color)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="relative z-10 text-center">
                                    {/* Enhanced Avatar */}
                                    <div className="relative mb-6">
                                        <div className="w-40 h-40 bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] rounded-full mx-auto p-2 shadow-2xl group-hover:scale-110 transition-all duration-500">
                                            <div className="w-full h-full bg-gradient-to-br from-[var(--accent-color)] to-[var(--primary-color)] rounded-full flex items-center justify-center">
                                                <span className="text-5xl font-bold text-white">
                                                    RS
                                                </span>
                                            </div>
                                        </div>
                                        <div className="absolute -inset-4 bg-gradient-to-r from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 rounded-full blur-2xl animate-pulse"></div>
                                    </div>

                                    <h3 className="text-3xl font-bold text-[var(--text-primary)] mb-3">
                                        Ripas Sorker Rifat
                                    </h3>
                                    <p className="text-[var(--primary-color)] font-semibold text-xl mb-4">
                                        Full Stack Developer
                                    </p>
                                    <div className="glass px-6 py-3 rounded-2xl border border-[var(--border-color)]/50 inline-block">
                                        <p className="text-[var(--text-secondary)] italic">
                                            "Code is poetry written in logic"
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Enhanced Quick Stats */}
                        <div className="grid grid-cols-2 gap-6">
                            <div className="group glass rounded-2xl p-6 border border-[var(--border-color)] hover:border-[var(--primary-color)]/50 transition-all duration-500 text-center backdrop-blur-xl relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-color)]/5 to-[var(--secondary-color)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative z-10">
                                    <div className="w-12 h-12 bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] rounded-xl mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <FaRocket className="text-white text-lg" />
                                    </div>
                                    <div className="text-4xl font-bold text-[var(--text-primary)] mb-2">
                                        120+
                                    </div>
                                    <div className="text-[var(--text-secondary)] font-medium">
                                        Projects Completed
                                    </div>
                                </div>
                            </div>

                            <div className="group glass rounded-2xl p-6 border border-[var(--border-color)] hover:border-[var(--primary-color)]/50 transition-all duration-500 text-center backdrop-blur-xl relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-[var(--secondary-color)]/5 to-[var(--accent-color)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative z-10">
                                    <div className="w-12 h-12 bg-gradient-to-br from-[var(--secondary-color)] to-[var(--accent-color)] rounded-xl mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <FaCalendarAlt className="text-white text-lg" />
                                    </div>
                                    <div className="text-4xl font-bold text-[var(--text-primary)] mb-2">
                                        3+
                                    </div>
                                    <div className="text-[var(--text-secondary)] font-medium">
                                        Years Experience
                                    </div>
                                </div>
                            </div>

                            <div className="group glass rounded-2xl p-6 border border-[var(--border-color)] hover:border-[var(--primary-color)]/50 transition-all duration-500 text-center backdrop-blur-xl relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-color)]/5 to-[var(--primary-color)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative z-10">
                                    <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-color)] to-[var(--primary-color)] rounded-xl mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <FaHeart className="text-white text-lg" />
                                    </div>
                                    <div className="text-4xl font-bold text-[var(--text-primary)] mb-2">
                                        45+
                                    </div>
                                    <div className="text-[var(--text-secondary)] font-medium">
                                        Happy Clients
                                    </div>
                                </div>
                            </div>

                            <div className="group glass rounded-2xl p-6 border border-[var(--border-color)] hover:border-[var(--primary-color)]/50 transition-all duration-500 text-center backdrop-blur-xl relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-color)]/5 to-[var(--accent-color)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative z-10">
                                    <div className="w-12 h-12 bg-gradient-to-br from-[var(--primary-color)] to-[var(--accent-color)] rounded-xl mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <FaTrophy className="text-white text-lg" />
                                    </div>
                                    <div className="text-4xl font-bold text-[var(--text-primary)] mb-2">
                                        8+
                                    </div>
                                    <div className="text-[var(--text-secondary)] font-medium">
                                        Awards Won
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
