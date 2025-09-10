/* eslint-disable react/no-unescaped-entities */
"use client";

import {useEffect, useState} from "react";
import {FaUsers, FaRocket, FaClock, FaChartLine} from "react-icons/fa";

const Stats = () => {
    const [counters, setCounters] = useState({
        clients: 0,
        projects: 0,
        experience: 0,
        awards: 0,
    });

    const finalValues = {
        clients: 45,
        projects: 120,
        experience: 3,
        awards: 8,
    };

    useEffect(() => {
        const animateCounters = () => {
            const duration = 2000; // 2 seconds
            const steps = 60;
            const stepDuration = duration / steps;

            let step = 0;
            const timer = setInterval(() => {
                step++;
                const progress = step / steps;

                setCounters({
                    clients: Math.floor(finalValues.clients * progress),
                    projects: Math.floor(finalValues.projects * progress),
                    experience: Math.floor(finalValues.experience * progress),
                    awards: Math.floor(finalValues.awards * progress),
                });

                if (step >= steps) {
                    clearInterval(timer);
                    setCounters(finalValues);
                }
            }, stepDuration);
        };

        // Trigger animation when component mounts
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    animateCounters();
                    observer.disconnect();
                }
            },
            {threshold: 0.5}
        );

        const element = document.getElementById("stats-section");
        if (element) {
            observer.observe(element);
        }

        return () => observer.disconnect();
    }, []);

    const stats = [
        {
            icon: <FaUsers />,
            value: counters.clients,
            suffix: "+",
            label: "Happy Clients",
            description: "Satisfied customers worldwide",
            color: "from-green-400 to-emerald-600",
            bgColor: "from-green-400/10 to-emerald-600/10",
            borderColor: "border-green-400/30",
        },
        {
            icon: <FaRocket />,
            value: counters.projects,
            suffix: "+",
            label: "Projects Completed",
            description: "Successful deliveries",
            color: "from-blue-400 to-cyan-600",
            bgColor: "from-blue-400/10 to-cyan-600/10",
            borderColor: "border-blue-400/30",
        },
        {
            icon: <FaClock />,
            value: counters.experience,
            suffix: "+",
            label: "Years Experience",
            description: "Professional development",
            color: "from-purple-400 to-pink-600",
            bgColor: "from-purple-400/10 to-pink-600/10",
            borderColor: "border-purple-400/30",
        },
    ];

    return (
        <section
            id="stats-section"
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
                                <FaChartLine className="text-4xl text-[var(--primary-color)] animate-bounce" />
                            </div>
                            <div className="absolute -inset-2 bg-gradient-to-r from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 rounded-3xl blur-lg animate-pulse"></div>
                        </div>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-[var(--text-primary)] mb-6 animate-slide-up">
                        Professional{" "}
                        <span className="bg-gradient-to-r from-[var(--primary-color)] via-[var(--secondary-color)] to-[var(--accent-color)] bg-clip-text text-transparent animate-glow">
                            Statistics
                        </span>
                    </h2>
                    <p
                        className="text-[var(--text-secondary)] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed animate-slide-up"
                        style={{animationDelay: "0.2s"}}>
                        Numbers that showcase my journey, dedication, and the
                        impact I've made in the world of technology and
                        development.
                    </p>
                </div>

                {/* Enhanced Stats Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto mb-20">
                    {stats.map((stat, index) => (
                        <div
                            key={stat.label}
                            className="group relative animate-slide-up"
                            style={{animationDelay: `${index * 0.15}s`}}>
                            <div
                                className={`glass rounded-3xl p-8 border ${stat.borderColor} hover:border-[var(--primary-color)]/60 transition-all duration-700 transform hover:scale-105 hover:shadow-2xl hover:shadow-[var(--primary-color)]/20 backdrop-blur-xl relative overflow-hidden`}>
                                {/* Background Gradient */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${stat.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                                {/* Icon Container */}
                                <div className="relative z-10 mb-6">
                                    <div
                                        className={`w-20 h-20 mx-auto bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                                        <span className="text-3xl">
                                            {stat.icon}
                                        </span>
                                    </div>
                                </div>

                                {/* Counter Display */}
                                <div className="relative z-10 text-center mb-6">
                                    <div
                                        className={`text-5xl lg:text-6xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300`}>
                                        {stat.value}
                                        {stat.suffix}
                                    </div>
                                    <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--primary-color)] transition-colors duration-300">
                                        {stat.label}
                                    </h3>
                                    <p className="text-[var(--text-secondary)] leading-relaxed">
                                        {stat.description}
                                    </p>
                                </div>

                                {/* Enhanced Progress Bar */}
                                <div className="relative z-10">
                                    <div className="w-full bg-[var(--border-color)]/20 rounded-full h-2 overflow-hidden backdrop-blur-sm">
                                        <div
                                            className={`h-full bg-gradient-to-r ${stat.color} transition-all duration-1500 ease-out rounded-full shadow-lg`}
                                            style={{
                                                width: `${
                                                    (stat.value /
                                                        (stat.label ===
                                                        "Projects Completed"
                                                            ? 120
                                                            : stat.label ===
                                                              "Happy Clients"
                                                            ? 45
                                                            : stat.label ===
                                                              "Years Experience"
                                                            ? 3
                                                            : 8)) *
                                                    100
                                                }%`,
                                            }}></div>
                                    </div>
                                    <div className="flex justify-between mt-2 text-xs text-[var(--text-secondary)]">
                                        <span>0</span>
                                        <span>
                                            {stat.label === "Projects Completed"
                                                ? "120+"
                                                : stat.label === "Happy Clients"
                                                ? "45+"
                                                : stat.label ===
                                                  "Years Experience"
                                                ? "3+"
                                                : "8+"}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Info */}
                <div className="mt-16 text-center">
                    <div className="glass rounded-2xl p-8 border border-[var(--border-color)] max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                            Why Choose Me?
                        </h3>
                        <div className="grid md:grid-cols-3 gap-8 text-left">
                            <div className="flex items-start space-x-4">
                                <div className="w-8 h-8 bg-[var(--primary-color)]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg
                                        className="w-4 h-4 text-[var(--primary-color)]"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-[var(--text-primary)] font-semibold mb-1">
                                        Quality Delivery
                                    </h4>
                                    <p className="text-[var(--text-secondary)] text-sm">
                                        100% project completion rate with
                                        high-quality standards
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="w-8 h-8 bg-[var(--secondary-color)]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg
                                        className="w-4 h-4 text-[var(--secondary-color)]"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-[var(--text-primary)] font-semibold mb-1">
                                        On-Time Delivery
                                    </h4>
                                    <p className="text-[var(--text-secondary)] text-sm">
                                        Always meeting deadlines and project
                                        milestones
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="w-8 h-8 bg-[var(--accent-color)]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg
                                        className="w-4 h-4 text-[var(--accent-color)]"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-[var(--text-primary)] font-semibold mb-1">
                                        Client Satisfaction
                                    </h4>
                                    <p className="text-[var(--text-secondary)] text-sm">
                                        Dedicated to exceeding client
                                        expectations
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
