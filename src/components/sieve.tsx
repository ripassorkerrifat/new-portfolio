import React from "react";
import Button from "./button";

export default function Sieve() {
    const services = [
        {
            title: "Web Development",
            description:
                "Building responsive and modern web applications using the latest technologies.",
            icon: "🌐",
        },
        {
            title: "Frontend Design",
            description:
                "Creating beautiful and intuitive user interfaces with attention to detail.",
            icon: "🎨",
        },
        {
            title: "Backend Solutions",
            description:
                "Developing robust server-side applications and APIs for seamless functionality.",
            icon: "⚙️",
        },
        {
            title: "Mobile Development",
            description:
                "Building cross-platform mobile applications for iOS and Android.",
            icon: "📱",
        },
    ];

    return (
        <section className="w-full py-24 px-4 bg-[var(--primary-bg)]">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        What I{" "}
                        <span className="text-[var(--button-color)]">
                            Offer
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
                        I provide comprehensive web development services to help
                        bring your ideas to life with modern technologies and
                        best practices.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                            <div className="text-4xl mb-4 text-center">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3 text-center">
                                {service.title}
                            </h3>
                            <p className="text-white/70 text-center leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Button className="text-lg px-8 py-3 shadow-lg hover:shadow-xl hover:bg-[var(--button-color)]/90 transition-all duration-200">
                        View My Work
                    </Button>
                </div>
            </div>
        </section>
    );
}
