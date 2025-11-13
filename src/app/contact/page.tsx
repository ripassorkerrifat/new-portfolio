/* eslint-disable react/no-unescaped-entities */
import React from "react";
import ContactForm from "@/components/contact-form";

const contactMethods = [
    {
        icon: "📧",
        title: "Email",
        value: "ripassorkerrifat@gmail.com",
        description: "Send me an email anytime",
        link: "mailto:ripassorkerrifat@gmail.com",
        color: "from-blue-500/20 to-cyan-500/20",
        hoverColor: "hover:border-blue-400/60",
        textColor: "text-blue-400",
    },
    {
        icon: "📱",
        title: "Phone",
        value: "+880 1744876681",
        description: "Call me for urgent matters",
        link: "tel:+8801744876681",
        color: "from-green-500/20 to-emerald-500/20",
        hoverColor: "hover:border-green-400/60",
        textColor: "text-green-400",
    },
    {
        icon: "📍",
        title: "Location",
        value: "Dhaka, Bangladesh",
        description: "Available for local meetings",
        link: "#",
        color: "from-purple-500/20 to-pink-500/20",
        hoverColor: "hover:border-purple-400/60",
        textColor: "text-purple-400",
    },
    {
        icon: "💬",
        title: "Response Time",
        value: "< 24 hours",
        description: "Quick response guaranteed",
        link: "#",
        color: "from-orange-500/20 to-red-500/20",
        hoverColor: "hover:border-orange-400/60",
        textColor: "text-orange-400",
    },
];

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[var(--primary-bg)] via-[var(--secondary-bg)] to-[var(--accent-bg)]">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 rounded-full blur-3xl animate-float"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-[var(--accent-color)]/15 to-[var(--primary-color)]/15 rounded-full blur-3xl animate-float-delayed"></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--text-primary)] mb-6">
                            Let's Work{" "}
                            <span className="bg-gradient-to-r from-[var(--primary-color)] via-[var(--secondary-color)] to-[var(--accent-color)] bg-clip-text text-transparent">
                                Together
                            </span>
                        </h1>
                        <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
                            Have a project in mind or want to discuss potential
                            opportunities? I'd love to hear from you!
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Methods Grid */}
            <section className="py-12 sm:py-16 lg:py-20 relative">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {contactMethods.map((method, index) => (
                            <a
                                key={method.title}
                                href={method.link}
                                className={`group relative overflow-hidden glass rounded-3xl p-6 border border-[var(--border-color)]/30 ${method.hoverColor} transition-all duration-700 hover:scale-105 hover:shadow-2xl backdrop-blur-xl transform hover:-translate-y-1`}
                                style={{animationDelay: `${index * 0.15}s`}}>
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                                <div className="relative z-10 text-center">
                                    <div
                                        className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center border-2 border-[var(--border-color)]/40 group-hover:border-white/40 transition-all duration-500 group-hover:rotate-6`}>
                                        <span className="text-2xl group-hover:scale-110 transition-transform duration-500">
                                            {method.icon}
                                        </span>
                                    </div>
                                    <h3
                                        className={`text-lg font-bold mb-1 group-hover:${method.textColor} transition-colors duration-300`}>
                                        {method.title}
                                    </h3>
                                    <p className="text-sm text-[var(--text-secondary)] group-hover:text-white/90 transition-colors duration-300">
                                        {method.value}
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-12 sm:py-16 lg:py-20 relative">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto glass rounded-3xl p-6 sm:p-8 lg:p-12 border border-[var(--border-color)]/40 hover:border-[var(--primary-color)]/60 transition-all duration-500 backdrop-blur-xl hover:shadow-2xl hover:shadow-[var(--primary-color)]/10">
                        <div className="text-center mb-10">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
                                Send Me a Message
                            </h2>
                            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
                                Have a question or want to work together? Fill
                                out the form below and I'll get back to you as
                                soon as possible.
                            </p>
                        </div>
                        <ContactForm />
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-12 sm:py-16 lg:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-[var(--primary-bg)] to-[var(--secondary-bg)] rounded-3xl overflow-hidden shadow-2xl border border-[var(--border-color)]/30">
                        <div className="h-64 sm:h-80 md:h-96 w-full relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.70871153461!2d90.3991305!3d23.7906531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a0b0d3d0a1%3A0x8f9a8e7b8d3d0a1!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1620000000000!5m2!1sen!2sbd"
                                width="100%"
                                height="100%"
                                style={{border: 0}}
                                allowFullScreen
                                loading="lazy"
                                className="opacity-90 hover:opacity-100 transition-opacity duration-300"></iframe>
                            <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-bg)] to-transparent pointer-events-none"></div>
                            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                                <p className="text-sm font-medium text-gray-800 flex items-center">
                                    <span className="mr-2">📍</span>
                                    Based in Dhaka, Bangladesh
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-color)]/5 to-[var(--secondary-color)]/5 -rotate-1 scale-105"></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-6">
                            Ready to Start Your Project?
                        </h2>
                        <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
                            I'm currently available for freelance work. Let's
                            create something amazing together!
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a
                                href="#contact"
                                className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white px-8 py-4 rounded-full font-medium text-lg hover:shadow-lg hover:shadow-[var(--primary-color)]/30 transition-all duration-300 transform hover:-translate-y-1">
                                Get In Touch
                            </a>
                            <a
                                href="mailto:ripassorkerrifat@gmail.com"
                                className="border-2 border-[var(--border-color)] text-[var(--text-primary)] px-8 py-4 rounded-full font-medium text-lg hover:bg-white/5 transition-all duration-300">
                                ripassorkerrifat@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
