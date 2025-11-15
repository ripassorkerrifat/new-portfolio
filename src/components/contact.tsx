/* eslint-disable react/no-unescaped-entities */

import React from "react";
import ContactForm from "./contact-form";

const Contact: React.FC = () => {
    return (
        <section
            id="contact"
            className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[var(--primary-bg)] via-[var(--secondary-bg)] to-[var(--accent-bg)] relative overflow-hidden">
            {/* Enhanced Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-[var(--accent-color)]/15 to-[var(--primary-color)]/15 rounded-full blur-3xl animate-float-delayed"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-[var(--secondary-color)]/10 to-[var(--accent-color)]/10 rounded-full blur-3xl animate-pulse"></div>
                <div
                    className="absolute top-10 right-1/4 w-48 h-48 bg-gradient-to-br from-[var(--primary-color)]/15 to-[var(--secondary-color)]/15 rounded-full blur-2xl animate-float"
                    style={{animationDelay: "2s"}}></div>
                <div
                    className="absolute bottom-10 left-1/3 w-64 h-64 bg-gradient-to-br from-[var(--accent-color)]/12 to-[var(--primary-color)]/12 rounded-full blur-2xl animate-float"
                    style={{animationDelay: "4s"}}></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-20 sm:mb-24 animate-slide-up">
                    <div className="mb-8 inline-block">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 border border-[var(--primary-color)]/40 backdrop-blur-md">
                            <div className="w-2 h-2 rounded-full bg-[var(--primary-color)] animate-pulse"></div>
                            <span className="text-xs sm:text-sm font-semibold text-[var(--primary-color)] uppercase tracking-wider">
                                Contact
                            </span>
                        </div>
                    </div>

                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[var(--text-primary)] mb-6 leading-tight">
                        Let's Build
                        <br />
                        <span className="bg-gradient-to-r from-[var(--primary-color)] via-[var(--secondary-color)] to-[var(--accent-color)] bg-clip-text text-transparent">
                            Something Great
                        </span>
                    </h2>

                    <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed font-light">
                        Have an amazing project in mind? I'd love to hear about
                        it. Let's collaborate and bring your vision to life.
                    </p>
                </div>

                {/* Enhanced Main Contact Section */}
                <div className="max-w-6xl mx-auto">
                    <div className="relative glass rounded-3xl p-3 sm:p-8 lg:p-12 border border-[var(--border-color)]/50 hover:border-[var(--primary-color)]/70 transition-all duration-700 backdrop-blur-xl bg-gradient-to-br from-[var(--primary-bg)]/80 via-[var(--secondary-bg)]/85 to-[var(--accent-bg)]/80 hover:shadow-2xl hover:shadow-[var(--primary-color)]/30 group overflow-hidden">
                        {/* Enhanced Floating Background Elements */}
                        <div className="absolute top-0 right-0 w-60 h-60 bg-gradient-to-br from-[var(--primary-color)]/25 to-[var(--secondary-color)]/15 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-[var(--accent-color)]/20 to-[var(--primary-color)]/15 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-[var(--secondary-color)]/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-700"></div>

                        {/* Form Header */}
                        <div className="text-center mb-8 sm:mb-12 relative z-10">
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 mb-8 sm:mb-10">
                                <div className="relative">
                                    <div className="lg:size-28 size-24 bg-gradient-to-br from-[var(--primary-color)]/30 to-[var(--secondary-color)]/25 rounded-3xl flex items-center justify-center border-2 border-[var(--primary-color)]/50 group-hover:border-[var(--primary-color)]/80 transition-all duration-500 group-hover:rotate-12 group-hover:scale-125 shadow-2xl group-hover:shadow-[var(--primary-color)]/40">
                                        <span className="text-4xl sm:text-5xl lg:text-6xl group-hover:scale-125 transition-transform duration-500 group-hover:rotate-6">
                                            💌
                                        </span>
                                    </div>
                                    <div className="absolute -inset-3 bg-gradient-to-r from-[var(--primary-color)]/30 via-[var(--secondary-color)]/20 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                                <div className="text-center sm:text-left">
                                    <h3 className="text-2xl sm:text-4xl font-bold text-[var(--text-primary)] mb-3 sm:mb-4 group-hover:text-[var(--primary-color)] transition-colors duration-300">
                                        Start a Conversation
                                    </h3>
                                    <p className="text-sm sm:text-base lg:text-lg text-[var(--text-secondary)] leading-relaxed font-light">
                                        Tell me about your project and let's
                                        <br />
                                        <span className="bg-gradient-to-r from-[var(--primary-color)] via-[var(--secondary-color)] to-[var(--accent-color)] bg-clip-text text-transparent font-semibold">
                                            make it happen together
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Dynamic Contact Form */}
                        <ContactForm className="relative z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
