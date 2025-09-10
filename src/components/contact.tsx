/* eslint-disable react/no-unescaped-entities */
"use client";

import {useState} from "react";

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const Contact: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [submitStatus, setSubmitStatus] = useState<
        "idle" | "success" | "error"
    >("idle");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        try {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            setSubmitStatus("success");
            setFormData({name: "", email: "", subject: "", message: ""});
        } catch (error) {
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus("idle"), 3000);
        }
    };

    const contactMethods = [
        {
            icon: "📧",
            title: "Email",
            value: "rifat@example.com",
            description: "Send me an email anytime",
            link: "mailto:rifat@example.com",
        },
        {
            icon: "📱",
            title: "Phone",
            value: "+880 123 456 789",
            description: "Call me for urgent matters",
            link: "tel:+880123456789",
        },
        {
            icon: "📍",
            title: "Location",
            value: "Dhaka, Bangladesh",
            description: "Available for local meetings",
            link: "#",
        },
        {
            icon: "💬",
            title: "Response Time",
            value: "< 24 hours",
            description: "Quick response guaranteed",
            link: "#",
        },
    ];

    return (
        <section
            id="contact"
            className="py-20 bg-gradient-to-br from-[var(--primary-bg)] via-[var(--secondary-bg)] to-[var(--accent-bg)] relative overflow-hidden">
            {/* Enhanced Background Elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[var(--primary-color)]/30 to-[var(--secondary-color)]/30 rounded-full blur-3xl animate-pulse"></div>
                <div
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-[var(--secondary-color)]/20 to-[var(--primary-color)]/20 rounded-full blur-3xl animate-pulse"
                    style={{animationDelay: "3s"}}></div>
                <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[var(--accent-color)]/10 to-[var(--primary-color)]/10 rounded-full blur-3xl animate-pulse"
                    style={{animationDelay: "1.5s"}}></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Modern Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center mb-8">
                        <div className="relative">
                            <div className="w-20 h-20 bg-gradient-to-br from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 rounded-3xl flex items-center justify-center border border-[var(--border-color)]/40 backdrop-blur-sm">
                                <span className="text-4xl animate-bounce">
                                    💫
                                </span>
                            </div>
                            <div className="absolute -inset-2 bg-gradient-to-r from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 rounded-3xl blur-lg animate-pulse"></div>
                        </div>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-[var(--text-primary)] mb-6 animate-slide-up">
                        Let's Create{" "}
                        <span className="bg-gradient-to-r from-[var(--primary-color)] via-[var(--secondary-color)] to-[var(--accent-color)] bg-clip-text text-transparent animate-glow">
                            Together
                        </span>
                    </h2>
                    <p
                        className="text-[var(--text-secondary)] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed animate-slide-up"
                        style={{animationDelay: "0.2s"}}>
                        Have an amazing project in mind? I'd love to hear about
                        it! Let's collaborate and bring your vision to life with
                        cutting-edge technology and creative solutions.
                    </p>
                </div>

                {/* Quick Contact Cards */}
                <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {contactMethods.map((method, index) => (
                        <a
                            key={method.title}
                            href={method.link}
                            className="group relative overflow-hidden glass rounded-3xl p-8 border border-[var(--border-color)]/30 hover:border-[var(--primary-color)]/60 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-[var(--primary-color)]/25 backdrop-blur-xl animate-slide-up"
                            style={{animationDelay: `${index * 0.15}s`}}>
                            {/* Animated background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-color)]/5 to-[var(--secondary-color)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative text-center">
                                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 rounded-2xl flex items-center justify-center border border-[var(--border-color)]/40 group-hover:border-[var(--primary-color)]/60 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                                    <span className="text-2xl group-hover:scale-125 transition-transform duration-500">
                                        {method.icon}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-[var(--primary-color)] transition-colors duration-300">
                                    {method.title}
                                </h3>
                                <p className="text-[var(--text-primary)] font-semibold mb-2 text-lg">
                                    {method.value}
                                </p>
                                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                                    {method.description}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Main Contact Section - Centered Single Column */}
                <div className="max-w-4xl mx-auto">
                    <div className="glass rounded-3xl p-12 border border-[var(--border-color)]/40 hover:border-[var(--primary-color)]/60 transition-all duration-700 backdrop-blur-xl bg-gradient-to-br from-[var(--primary-bg)]/95 to-[var(--secondary-bg)]/95 hover:shadow-2xl hover:shadow-[var(--primary-color)]/20 group">
                        {/* Form Header */}
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-6 mb-8">
                                <div className="w-20 h-20 bg-gradient-to-br from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 rounded-3xl flex items-center justify-center border border-[var(--border-color)]/40 group-hover:border-[var(--primary-color)]/60 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                                    <span className="text-4xl group-hover:scale-110 transition-transform duration-500">
                                        💌
                                    </span>
                                </div>
                                <div className="text-left">
                                    <h3 className="text-4xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-[var(--primary-color)] transition-colors duration-300">
                                        Start a Conversation
                                    </h3>
                                    <p className="text-[var(--text-secondary)] text-xl">
                                        Tell me about your project and let's
                                        make it happen
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Success/Error Messages */}
                        {submitStatus === "success" && (
                            <div className="mb-10 p-8 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-3xl text-green-400 flex items-center gap-6 backdrop-blur-sm animate-slide-up shadow-lg">
                                <div className="w-16 h-16 bg-green-500/20 rounded-3xl flex items-center justify-center border border-green-500/40">
                                    <span className="text-3xl animate-bounce">
                                        🎉
                                    </span>
                                </div>
                                <div>
                                    <div className="font-bold text-2xl mb-2">
                                        Message sent successfully!
                                    </div>
                                    <div className="text-green-300/80 text-lg">
                                        I'll get back to you within 24 hours.
                                        Excited to discuss your project!
                                    </div>
                                </div>
                            </div>
                        )}
                        {submitStatus === "error" && (
                            <div className="mb-10 p-8 bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/30 rounded-3xl text-red-400 flex items-center gap-6 backdrop-blur-sm animate-slide-up shadow-lg">
                                <div className="w-16 h-16 bg-red-500/20 rounded-3xl flex items-center justify-center border border-red-500/40">
                                    <span className="text-3xl">⚠️</span>
                                </div>
                                <div>
                                    <div className="font-bold text-2xl mb-2">
                                        Something went wrong!
                                    </div>
                                    <div className="text-red-300/80 text-lg">
                                        Please try again or reach out directly
                                        via email or phone.
                                    </div>
                                </div>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="group">
                                    <label
                                        htmlFor="name"
                                        className="block text-xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-3">
                                        <div className="w-10 h-10 bg-gradient-to-br from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 rounded-2xl flex items-center justify-center border border-[var(--border-color)]/40">
                                            <span className="text-lg">👤</span>
                                        </div>
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-6 py-5 glass border border-[var(--border-color)]/40 rounded-2xl text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]/60 focus:border-[var(--primary-color)] transition-all duration-500 hover:border-[var(--secondary-color)]/60 backdrop-blur-sm text-lg group-hover:shadow-lg"
                                        placeholder="What should I call you?"
                                    />
                                </div>
                                <div className="group">
                                    <label
                                        htmlFor="email"
                                        className="block text-xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-3">
                                        <div className="w-10 h-10 bg-gradient-to-br from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 rounded-2xl flex items-center justify-center border border-[var(--border-color)]/40">
                                            <span className="text-lg">📧</span>
                                        </div>
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-6 py-5 glass border border-[var(--border-color)]/40 rounded-2xl text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]/60 focus:border-[var(--primary-color)] transition-all duration-500 hover:border-[var(--secondary-color)]/60 backdrop-blur-sm text-lg group-hover:shadow-lg"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>

                            <div className="group">
                                <label
                                    htmlFor="subject"
                                    className="block text-xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gradient-to-br from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 rounded-2xl flex items-center justify-center border border-[var(--border-color)]/40">
                                        <span className="text-lg">💡</span>
                                    </div>
                                    Project Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-6 py-5 glass border border-[var(--border-color)]/40 rounded-2xl text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]/60 focus:border-[var(--primary-color)] transition-all duration-500 hover:border-[var(--secondary-color)]/60 backdrop-blur-sm text-lg group-hover:shadow-lg"
                                    placeholder="What's your project about?"
                                />
                            </div>

                            <div className="group">
                                <label
                                    htmlFor="message"
                                    className="block text-xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gradient-to-br from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 rounded-2xl flex items-center justify-center border border-[var(--border-color)]/40">
                                        <span className="text-lg">💬</span>
                                    </div>
                                    Tell Me More
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={8}
                                    className="w-full px-6 py-5 glass border border-[var(--border-color)]/40 rounded-2xl text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]/60 focus:border-[var(--primary-color)] transition-all duration-500 hover:border-[var(--secondary-color)]/60 backdrop-blur-sm resize-none text-lg leading-relaxed group-hover:shadow-lg"
                                    placeholder="Share your vision! Tell me about your project goals, timeline, budget, or any specific requirements. The more details you provide, the better I can help bring your ideas to life."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="group relative w-full bg-gradient-to-r from-[var(--primary-color)] via-[var(--secondary-color)] to-[var(--accent-color)] hover:from-[var(--primary-color)]/90 hover:via-[var(--secondary-color)]/90 hover:to-[var(--accent-color)]/90 text-white font-bold py-6 px-12 rounded-2xl transition-all duration-500 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]/60 focus:ring-offset-2 focus:ring-offset-[var(--primary-bg)] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none shadow-2xl hover:shadow-3xl hover:shadow-[var(--primary-color)]/40 text-2xl">
                                <span className="flex items-center justify-center gap-4">
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                                            <span>Sending Your Message...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span className="text-3xl group-hover:scale-125 transition-transform duration-300">
                                                🚀
                                            </span>
                                            <span>Let's Start Building</span>
                                        </>
                                    )}
                                </span>
                            </button>
                        </form>

                        {/* Enhanced Bottom Section */}
                        <div className="mt-12 pt-8 border-t border-[var(--border-color)]/20">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center border border-green-500/30">
                                        <span className="text-2xl">🔒</span>
                                    </div>
                                    <div>
                                        <div className="font-bold text-[var(--text-primary)] text-lg">
                                            100% Secure
                                        </div>
                                        <div className="text-[var(--text-secondary)]">
                                            Your information is encrypted and
                                            protected
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center border border-blue-500/30">
                                        <span className="text-2xl">⚡</span>
                                    </div>
                                    <div>
                                        <div className="font-bold text-[var(--text-primary)] text-lg">
                                            Quick Response
                                        </div>
                                        <div className="text-[var(--text-secondary)]">
                                            I'll get back to you within 24 hours
                                        </div>
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

export default Contact;
