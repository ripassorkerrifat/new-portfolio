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
        } catch {
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

    return (
        <section
            id="contact"
            className="py-20 bg-gradient-to-br from-[var(--primary-bg)] via-[var(--secondary-bg)] to-[var(--accent-bg)] relative overflow-hidden">
            {/* Enhanced Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-[var(--accent-color)]/15 to-[var(--primary-color)]/15 rounded-full blur-3xl animate-float-delayed"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-[var(--secondary-color)]/10 to-[var(--accent-color)]/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-10 right-1/4 w-48 h-48 bg-gradient-to-br from-[var(--primary-color)]/15 to-[var(--secondary-color)]/15 rounded-full blur-2xl animate-float" style={{animationDelay: "2s"}}></div>
                <div className="absolute bottom-10 left-1/3 w-64 h-64 bg-gradient-to-br from-[var(--accent-color)]/12 to-[var(--primary-color)]/12 rounded-full blur-2xl animate-float" style={{animationDelay: "4s"}}></div>
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

                {/* Enhanced Contact Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                    {contactMethods.map((method, index) => (
                        <a
                            key={method.title}
                            href={method.link}
                            className={`group relative overflow-hidden glass rounded-3xl p-8 border border-[var(--border-color)]/30 ${method.hoverColor} transition-all duration-700 hover:scale-110 hover:shadow-2xl backdrop-blur-xl animate-slide-up transform hover:-translate-y-2`}
                            style={{animationDelay: `${index * 0.15}s`}}>
                            
                            {/* Enhanced Animated Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                            
                            {/* Floating Glow Effect */}
                            <div className={`absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br ${method.color} rounded-full blur-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-500`}></div>
                            
                            {/* Pulse Ring Animation */}
                            <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-white/20 group-hover:animate-ping"></div>

                            <div className="relative text-center">
                                {/* Enhanced Icon Container */}
                                <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${method.color} rounded-3xl flex items-center justify-center border-2 border-[var(--border-color)]/40 group-hover:border-white/40 transition-all duration-500 group-hover:rotate-12 group-hover:scale-125 shadow-lg group-hover:shadow-2xl`}>
                                    <span className="text-3xl group-hover:scale-125 transition-transform duration-500 filter drop-shadow-lg">
                                        {method.icon}
                                    </span>
                                </div>
                                
                                {/* Enhanced Typography */}
                                <h3 className={`text-2xl font-bold text-[var(--text-primary)] mb-4 group-hover:${method.textColor} transition-colors duration-300`}>
                                    {method.title}
                                </h3>
                                <p className="text-[var(--text-primary)] font-bold mb-3 text-xl group-hover:text-white transition-colors duration-300">
                                    {method.value}
                                </p>
                                <p className="text-[var(--text-secondary)] text-base leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                                    {method.description}
                                </p>
                                
                                {/* Interactive Arrow */}
                                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="inline-flex items-center text-white font-semibold">
                                        <span className="mr-2">Connect</span>
                                        <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                                    </span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Enhanced Main Contact Section */}
                <div className="max-w-5xl mx-auto">
                    <div className="relative glass rounded-3xl p-12 border border-[var(--border-color)]/40 hover:border-[var(--primary-color)]/60 transition-all duration-700 backdrop-blur-xl bg-gradient-to-br from-[var(--primary-bg)]/95 to-[var(--secondary-bg)]/95 hover:shadow-2xl hover:shadow-[var(--primary-color)]/20 group overflow-hidden">
                        
                        {/* Floating Background Elements */}
                        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[var(--primary-color)]/10 to-[var(--secondary-color)]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-[var(--accent-color)]/10 to-[var(--primary-color)]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        
                        {/* Form Header */}
                        <div className="text-center mb-16 relative z-10">
                            <div className="inline-flex items-center gap-8 mb-10">
                                <div className="relative">
                                    <div className="w-24 h-24 bg-gradient-to-br from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 rounded-3xl flex items-center justify-center border-2 border-[var(--border-color)]/40 group-hover:border-[var(--primary-color)]/60 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 shadow-xl">
                                        <span className="text-5xl group-hover:scale-110 transition-transform duration-500 animate-pulse">
                                            💌
                                        </span>
                                    </div>
                                    <div className="absolute -inset-2 bg-gradient-to-r from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                                <div className="text-left">
                                    <h3 className="text-5xl font-bold text-[var(--text-primary)] mb-4 group-hover:text-[var(--primary-color)] transition-colors duration-300">
                                        Start a Conversation
                                    </h3>
                                    <p className="text-[var(--text-secondary)] text-2xl leading-relaxed">
                                        Tell me about your project and let's
                                        <br />
                                        <span className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text text-transparent font-semibold">
                                            make it happen together
                                        </span>
                                    </p>
                                </div>
                            </div>
                            
                            {/* Enhanced Stats */}
                            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-[var(--primary-color)] mb-2">24h</div>
                                    <div className="text-[var(--text-secondary)] text-sm">Response Time</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-[var(--secondary-color)] mb-2">100%</div>
                                    <div className="text-[var(--text-secondary)] text-sm">Satisfaction</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-[var(--accent-color)] mb-2">50+</div>
                                    <div className="text-[var(--text-secondary)] text-sm">Projects Done</div>
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

                        <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
                            <div className="grid md:grid-cols-2 gap-10">
                                <div className="group relative">
                                    <label
                                        htmlFor="name"
                                        className="block text-2xl font-bold text-[var(--text-primary)] mb-6 flex items-center gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center border-2 border-[var(--border-color)]/40 group-hover:border-blue-400/60 transition-all duration-300 group-hover:scale-110">
                                            <span className="text-2xl">👤</span>
                                        </div>
                                        Your Name
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-8 py-6 glass border-2 border-[var(--border-color)]/40 rounded-3xl text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:ring-4 focus:ring-[var(--primary-color)]/30 focus:border-[var(--primary-color)] transition-all duration-500 hover:border-[var(--secondary-color)]/60 backdrop-blur-sm text-xl group-hover:shadow-2xl bg-gradient-to-r from-[var(--primary-bg)]/50 to-[var(--secondary-bg)]/50"
                                            placeholder="What should I call you?"
                                        />
                                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[var(--primary-color)]/5 to-[var(--secondary-color)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                    </div>
                                </div>
                                <div className="group relative">
                                    <label
                                        htmlFor="email"
                                        className="block text-2xl font-bold text-[var(--text-primary)] mb-6 flex items-center gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center border-2 border-[var(--border-color)]/40 group-hover:border-green-400/60 transition-all duration-300 group-hover:scale-110">
                                            <span className="text-2xl">📧</span>
                                        </div>
                                        Email Address
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-8 py-6 glass border-2 border-[var(--border-color)]/40 rounded-3xl text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:ring-4 focus:ring-[var(--primary-color)]/30 focus:border-[var(--primary-color)] transition-all duration-500 hover:border-[var(--secondary-color)]/60 backdrop-blur-sm text-xl group-hover:shadow-2xl bg-gradient-to-r from-[var(--primary-bg)]/50 to-[var(--secondary-bg)]/50"
                                            placeholder="your@email.com"
                                        />
                                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[var(--primary-color)]/5 to-[var(--secondary-color)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="group relative">
                                <label
                                    htmlFor="subject"
                                    className="block text-2xl font-bold text-[var(--text-primary)] mb-6 flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center border-2 border-[var(--border-color)]/40 group-hover:border-purple-400/60 transition-all duration-300 group-hover:scale-110">
                                        <span className="text-2xl">💡</span>
                                    </div>
                                    Project Subject
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-8 py-6 glass border-2 border-[var(--border-color)]/40 rounded-3xl text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:ring-4 focus:ring-[var(--primary-color)]/30 focus:border-[var(--primary-color)] transition-all duration-500 hover:border-[var(--secondary-color)]/60 backdrop-blur-sm text-xl group-hover:shadow-2xl bg-gradient-to-r from-[var(--primary-bg)]/50 to-[var(--secondary-bg)]/50"
                                        placeholder="What's your project about?"
                                    />
                                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[var(--primary-color)]/5 to-[var(--secondary-color)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                </div>
                            </div>

                            <div className="group relative">
                                <label
                                    htmlFor="message"
                                    className="block text-2xl font-bold text-[var(--text-primary)] mb-6 flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl flex items-center justify-center border-2 border-[var(--border-color)]/40 group-hover:border-orange-400/60 transition-all duration-300 group-hover:scale-110">
                                        <span className="text-2xl">💬</span>
                                    </div>
                                    Tell Me More
                                </label>
                                <div className="relative">
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={8}
                                        className="w-full px-8 py-6 glass border-2 border-[var(--border-color)]/40 rounded-3xl text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:ring-4 focus:ring-[var(--primary-color)]/30 focus:border-[var(--primary-color)] transition-all duration-500 hover:border-[var(--secondary-color)]/60 backdrop-blur-sm resize-none text-xl leading-relaxed group-hover:shadow-2xl bg-gradient-to-r from-[var(--primary-bg)]/50 to-[var(--secondary-bg)]/50"
                                        placeholder="Share your vision! Tell me about your project goals, timeline, budget, or any specific requirements. The more details you provide, the better I can help bring your ideas to life."
                                    />
                                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[var(--primary-color)]/5 to-[var(--secondary-color)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                </div>
                            </div>

                            <div className="relative">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="group relative w-full bg-gradient-to-r from-[var(--primary-color)] via-[var(--secondary-color)] to-[var(--accent-color)] hover:from-[var(--primary-color)]/90 hover:via-[var(--secondary-color)]/90 hover:to-[var(--accent-color)]/90 text-white font-bold py-8 px-12 rounded-3xl transition-all duration-500 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-[var(--primary-color)]/40 focus:ring-offset-4 focus:ring-offset-[var(--primary-bg)] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none shadow-2xl hover:shadow-3xl hover:shadow-[var(--primary-color)]/40 text-2xl overflow-hidden">
                                    
                                    {/* Button Background Animation */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    
                                    <span className="relative flex items-center justify-center gap-4">
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-10 h-10 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                                                <span className="text-xl">Sending Your Message...</span>
                                            </>
                                        ) : (
                                            <>
                                                <span className="text-4xl group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">
                                                    🚀
                                                </span>
                                                <span className="text-2xl">Let's Start Building Together</span>
                                                <span className="text-2xl group-hover:translate-x-2 transition-transform duration-300">→</span>
                                            </>
                                        )}
                                    </span>
                                </button>
                            </div>
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
