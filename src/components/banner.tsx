/* eslint-disable @next/next/no-img-element */
"use client";

import Typewriter from "typewriter-effect";
import SkillsMarquee from "./skills-marquee";
import Lottie from "lottie-react";
import {useRouter} from "next/navigation";
import {useSettings} from "../hooks/useSettings";
import {
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaInstagram,
    FaFacebook,
    FaDownload,
    FaEye,
} from "react-icons/fa";

import coding from "../assets/skills.json";

const Banner = () => {
    const router = useRouter();
    const {settings} = useSettings();

    const handleResumeDownload = () => {
        if (settings.resumeUrl) {
            window.open(settings.resumeUrl, "_blank");
        } else {
            alert(
                "Resume URL not configured. Please contact the administrator."
            );
        }
    };

    const getSocialLinks = () => [
        {
            name: "GitHub",
            icon: <FaGithub />,
            href: settings.socialLinks.github,
        },
        {
            name: "LinkedIn",
            icon: <FaLinkedin />,
            href: settings.socialLinks.linkedin,
        },
        {
            name: "Facebook",
            icon: <FaFacebook />,
            href: settings.socialLinks.facebook,
        },
        {
            name: "Twitter",
            icon: <FaTwitter />,
            href: settings.socialLinks.twitter,
        },
        {
            name: "Instagram",
            icon: <FaInstagram />,
            href: settings.socialLinks.instagram,
        },
    ];

    return (
        <>
            <section
                id="home"
                className="relative min-h-screen bg-gradient-to-br from-[var(--primary-bg)] via-[var(--secondary-bg)] to-[var(--accent-bg)] overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-color)]/5 via-transparent to-[var(--secondary-color)]/5"></div>

                {/* Core Skills Background - 10 Essential Skills */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {/* React */}
                    <div
                        className="absolute top-[12%] left-[8%] w-8 h-8 glass rounded-full flex items-center justify-center animate-blink shadow-lg"
                        style={{animationDelay: "0s"}}>
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                            alt="React"
                            className="w-5 h-5 filter drop-shadow-md"
                        />
                    </div>

                    {/* Next.js */}
                    <div
                        className="absolute top-[25%] right-[12%] w-7 h-7 glass rounded-full flex items-center justify-center animate-blink shadow-lg"
                        style={{animationDelay: "1.5s"}}>
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
                            alt="Next.js"
                            className="w-4 h-4 filter drop-shadow-md"
                        />
                    </div>

                    {/* TypeScript */}
                    <div
                        className="absolute bottom-[35%] left-[5%] w-8 h-8 glass rounded-full flex items-center justify-center animate-blink shadow-lg"
                        style={{animationDelay: "3s"}}>
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                            alt="TypeScript"
                            className="w-5 h-5 filter drop-shadow-md"
                        />
                    </div>

                    {/* Node.js */}
                    <div
                        className="absolute top-[65%] right-[44%] w-7 h-7 glass rounded-full flex items-center justify-center animate-blink shadow-lg"
                        style={{animationDelay: "4.5s"}}>
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
                            alt="Node.js"
                            className="w-4 h-4 filter drop-shadow-md"
                        />
                    </div>

                    {/* MongoDB */}
                    <div
                        className="absolute bottom-[15%] right-[25%] w-6 h-6 glass rounded-full flex items-center justify-center animate-blink shadow-lg"
                        style={{animationDelay: "6s"}}>
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
                            alt="MongoDB"
                            className="w-4 h-4 filter drop-shadow-md"
                        />
                    </div>

                    {/* JavaScript */}
                    <div
                        className="absolute top-[85%] left-[15%] w-7 h-7 glass rounded-full flex items-center justify-center animate-blink shadow-lg"
                        style={{animationDelay: "2s"}}>
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                            alt="JavaScript"
                            className="w-4 h-4 filter drop-shadow-md"
                        />
                    </div>

                    {/* Tailwind CSS */}
                    <div
                        className="absolute top-[18%] right-[45%] w-6 h-6 glass rounded-full flex items-center justify-center animate-blink shadow-lg"
                        style={{animationDelay: "5s"}}>
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                            alt="Tailwind CSS"
                            className="w-4 h-4 filter drop-shadow-md"
                        />
                    </div>

                    {/* Docker */}
                    <div
                        className="absolute top-[13%] right-[5%] w-6 h-6 glass rounded-full flex items-center justify-center animate-blink shadow-lg"
                        style={{animationDelay: "3.5s"}}>
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
                            alt="Docker"
                            className="w-4 h-4 filter drop-shadow-md"
                        />
                    </div>

                    {/* Git */}
                    <div
                        className="absolute top-[82%] left-[35%] w-7 h-7 glass rounded-full flex items-center justify-center animate-blink shadow-lg"
                        style={{animationDelay: "1s"}}>
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
                            alt="Git"
                            className="w-4 h-4 filter drop-shadow-md"
                        />
                    </div>

                    {/* AWS */}
                    <div
                        className="absolute top-[35%] left-[55%] w-8 h-8 glass rounded-full flex items-center justify-center animate-blink shadow-lg"
                        style={{animationDelay: "4s"}}>
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
                            alt="AWS"
                            className="w-5 h-5 filter drop-shadow-md"
                        />
                    </div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 flex flex-col lg:flex-row items-center justify-between min-h-screen md:!-mt-10 !mt-20">
                    {/* Skills Animation Section with Spillover Effect */}
                    <div className="flex-1 flex justify-center lg:justify-end z-10 mt-8 lg:mt-0 order-1 lg:order-2 mb-8 lg:mb-0">
                        <div className="relative w-full max-w-[330px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[560px] aspect-square">
                            {/* Subtle Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-600/20 rounded-full blur-3xl transform scale-110 animate-pulse"></div>

                            {/* Spillover Skills (Hidden by default, shown on hover) */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none">
                                {/* Additional skills that spill out */}
                                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-10 h-10 glass rounded-full flex items-center justify-center shadow-lg transition-all duration-700 delay-100">
                                    <img
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                                        alt="JavaScript"
                                        className="w-6 h-6 filter drop-shadow-md"
                                    />
                                </div>
                                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-10 h-10 glass rounded-full flex items-center justify-center shadow-lg transition-all duration-700 delay-200">
                                    <img
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                                        alt="Python"
                                        className="w-6 h-6 filter drop-shadow-md"
                                    />
                                </div>
                                <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-10 h-10 glass rounded-full flex items-center justify-center shadow-lg transition-all duration-700 delay-300">
                                    <img
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                                        alt="Tailwind CSS"
                                        className="w-6 h-6 filter drop-shadow-md"
                                    />
                                </div>
                                <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-10 h-10 glass rounded-full flex items-center justify-center shadow-lg transition-all duration-700 delay-400">
                                    <img
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
                                        alt="Git"
                                        className="w-6 h-6 filter drop-shadow-md"
                                    />
                                </div>

                                {/* Corner spillover skills */}
                                <div className="absolute -top-6 -left-6 w-8 h-8 glass rounded-full flex items-center justify-center shadow-lg transition-all duration-700 delay-500">
                                    <img
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg"
                                        alt="Redux"
                                        className="w-5 h-5 filter drop-shadow-md"
                                    />
                                </div>
                                <div className="absolute -top-6 -right-6 w-8 h-8 glass rounded-full flex items-center justify-center shadow-lg transition-all duration-700 delay-600">
                                    <img
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
                                        alt="Express.js"
                                        className="w-5 h-5 filter drop-shadow-md"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -left-6 w-8 h-8 glass rounded-full flex items-center justify-center shadow-lg transition-all duration-700 delay-700">
                                    <img
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg"
                                        alt="Firebase"
                                        className="w-5 h-5 filter drop-shadow-md"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -right-6 w-8 h-8 glass rounded-full flex items-center justify-center shadow-lg transition-all duration-700 delay-800">
                                    <img
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg"
                                        alt="Prisma"
                                        className="w-5 h-5 filter drop-shadow-md"
                                    />
                                </div>
                            </div>

                            {/* Main Animation Container */}
                            <div className="relative glass rounded-full p-4 sm:p-6 shadow-2xl w-full aspect-square flex items-center justify-center animate-float group hover:scale-105 transition-all duration-500 overflow-hidden">
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/30 via-purple-500/30 to-pink-500/30 opacity-50 animate-spin-slow group-hover:opacity-70"></div>
                                <div className="absolute inset-1 rounded-full bg-[var(--primary-bg)]/90 backdrop-blur-sm"></div>

                                <div className="relative text-center w-full h-full z-10 rounded-full overflow-hidden">
                                    <div className="w-full h-full flex items-center justify-center p-6 group-hover:scale-105 transition-transform duration-500">
                                        <Lottie
                                            loop
                                            animationData={coding}
                                            style={{
                                                height: "85%",
                                                width: "85%",
                                                filter: "drop-shadow(0 0 15px rgba(59, 130, 246, 0.2))",
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile: Introduction Content Second */}
                    <div className="flex-1 text-center lg:text-left mb-8 lg:mb-0 z-10 max-w-2xl lg:max-w-none order-2 lg:order-1">
                        <div className="mb-6 animate-slide-up">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[var(--text-primary)] mb-4 leading-tight">
                                <span className="text-[var(--secondary-color)] animate-glow">
                                    Hello!
                                </span>{" "}
                                I am
                                <br />
                                <span className="bg-gradient-to-r from-[var(--primary-color)] via-[var(--secondary-color)] to-[var(--accent-color)] bg-clip-text text-transparent">
                                    Ripas Sorker Rifat
                                </span>
                            </h1>
                        </div>

                        <div
                            className="text-base sm:text-lg lg:text-xl text-green-500 font-semibold mb-6 sm:mb-8 h-10 sm:h-12 animate-slide-up"
                            style={{animationDelay: "0.2s"}}>
                            <Typewriter
                                options={{
                                    strings: [
                                        "I'm a Full Stack Developer",
                                        "I'm a React Specialist",
                                        "I'm a Next.js Expert",
                                        "I'm a Problem Solver",
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    delay: 75,
                                    deleteSpeed: 50,
                                }}
                            />
                        </div>

                        <p
                            className="text-sm sm:text-base lg:text-lg text-[var(--text-secondary)] mb-6 sm:mb-8 max-w-xl lg:max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-slide-up"
                            style={{animationDelay: "0.4s"}}>
                            Passionate about creating innovative web solutions
                            with modern technologies. I specialize in building
                            scalable applications that deliver exceptional user
                            experiences.
                        </p>

                        {/* Action Buttons */}
                        <div
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up"
                            style={{animationDelay: "0.6s"}}>
                            <button
                                onClick={handleResumeDownload}
                                className="group cursor-pointer relative overflow-hidden bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] hover:from-[var(--primary-color)]/90 hover:to-[var(--secondary-color)]/90 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-[var(--primary-color)]/50">
                                <div className="flex items-center justify-center space-x-2">
                                    <FaDownload className="text-lg group-hover:animate-bounce" />
                                    <span>Download Resume</span>
                                </div>
                                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                            <button
                                onClick={() => router.push("/projects")}
                                className="group cursor-pointer relative overflow-hidden border-2 border-[var(--secondary-color)] text-[var(--secondary-color)] hover:bg-[var(--secondary-color)] hover:text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-[var(--secondary-color)]/30">
                                <div className="flex items-center justify-center space-x-2">
                                    <FaEye className="text-lg group-hover:scale-110 transition-transform duration-300" />
                                    <span>View Projects</span>
                                </div>
                            </button>
                        </div>

                        {/* Social Links */}
                        <div
                            className="flex gap-4 justify-center lg:justify-start mt-8 animate-slide-up"
                            style={{animationDelay: "0.8s"}}>
                            {getSocialLinks().map(
                                (social: any, index: number) => (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative p-3 rounded-full glass border border-[var(--border-color)]/30 hover:border-[var(--primary-color)]/60 text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-[var(--primary-color)]/25"
                                        style={{
                                            animationDelay: `${index * 0.1}s`,
                                        }}
                                        title={social.name}>
                                        <div className="text-xl group-hover:scale-125 transition-transform duration-300">
                                            {social.icon}
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-color)]/10 to-[var(--secondary-color)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                                    </a>
                                )
                            )}
                        </div>
                    </div>
                </div>

                {/* Skills Marquee Section */}
                <div className="md:absolute md:bottom-20 lg:bottom-2 left-0 right-0 z-10">
                    <SkillsMarquee />
                </div>
            </section>
        </>
    );
};

export default Banner;
