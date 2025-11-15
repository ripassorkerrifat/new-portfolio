/* eslint-disable @next/next/no-img-element */
"use client";

import Typewriter from "typewriter-effect";
// import SkillsMarquee from "./skills-marquee";
import Lottie from "lottie-react";
import {useRouter} from "next/navigation";
import {useSettings} from "../contexts/SettingsContext";
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
                {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div
                        className="absolute top-[12%] left-[8%] w-8 h-8 glass rounded-full flex items-center justify-center animate-blink shadow-lg"
                        style={{animationDelay: "0s"}}>
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                            alt="React"
                            className="w-5 h-5 filter drop-shadow-md"
                        />
                    </div>

                    <div
                        className="absolute top-[25%] right-[12%] w-7 h-7 glass rounded-full flex items-center justify-center animate-blink shadow-lg"
                        style={{animationDelay: "1.5s"}}>
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
                            alt="Next.js"
                            className="w-4 h-4 filter drop-shadow-md"
                        />
                    </div>

                    <div
                        className="absolute bottom-[35%] left-[2%] w-8 h-8 glass rounded-full flex items-center justify-center animate-blink shadow-lg"
                        style={{animationDelay: "3s"}}>
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                            alt="TypeScript"
                            className="w-5 h-5 filter drop-shadow-md"
                        />
                    </div>

                    <div
                        className="absolute top-[65%] right-[44%] w-7 h-7 glass rounded-full flex items-center justify-center animate-blink shadow-lg"
                        style={{animationDelay: "4.5s"}}>
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
                            alt="Node.js"
                            className="w-4 h-4 filter drop-shadow-md"
                        />
                    </div>

                    <div
                        className="absolute bottom-[15%] right-[25%] w-6 h-6 glass rounded-full flex items-center justify-center animate-blink shadow-lg"
                        style={{animationDelay: "6s"}}>
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
                            alt="MongoDB"
                            className="w-4 h-4 filter drop-shadow-md"
                        />
                    </div>

                    <div
                        className="absolute top-[85%] left-[15%] w-7 h-7 glass rounded-full flex items-center justify-center animate-blink shadow-lg"
                        style={{animationDelay: "2s"}}>
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                            alt="JavaScript"
                            className="w-4 h-4 filter drop-shadow-md"
                        />
                    </div>

                    <div
                        className="absolute top-[18%] right-[45%] w-6 h-6 glass rounded-full flex items-center justify-center animate-blink shadow-lg"
                        style={{animationDelay: "5s"}}>
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                            alt="Tailwind CSS"
                            className="w-4 h-4 filter drop-shadow-md"
                        />
                    </div>

                    <div
                        className="absolute top-[13%] right-[5%] w-6 h-6 glass rounded-full flex items-center justify-center animate-blink shadow-lg"
                        style={{animationDelay: "3.5s"}}>
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
                            alt="Docker"
                            className="w-4 h-4 filter drop-shadow-md"
                        />
                    </div>

                    <div
                        className="absolute top-[82%] left-[35%] w-7 h-7 glass rounded-full flex items-center justify-center animate-blink shadow-lg"
                        style={{animationDelay: "1s"}}>
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
                            alt="Git"
                            className="w-4 h-4 filter drop-shadow-md"
                        />
                    </div>

                    <div
                        className="absolute top-[35%] left-[55%] w-8 h-8 glass rounded-full flex items-center justify-center animate-blink shadow-lg"
                        style={{animationDelay: "4s"}}>
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
                            alt="AWS"
                            className="w-5 h-5 filter drop-shadow-md"
                        />
                    </div>
                </div> */}

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 flex flex-col lg:flex-row items-center justify-between min-h-screen md:!mt-auto !mt-32 gap-8 lg:gap-12">
                    {/* Mobile: Introduction Content Second */}
                    <div className="flex-1 text-center lg:text-left mb-8 lg:mb-0 z-10 max-w-2xl lg:max-w-none order-2 lg:order-1">
                        {/* Subtitle Badge */}
                        <div className="mb-8 animate-slide-up inline-block lg:inline">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary-color)]/10 border border-[var(--primary-color)]/30 backdrop-blur-sm">
                                <div className="w-2 h-2 rounded-full bg-[var(--primary-color)] animate-pulse"></div>
                                <span className="text-xs sm:text-sm font-semibold text-[var(--primary-color)] uppercase tracking-wider">
                                    Full Stack Developer
                                </span>
                            </div>
                        </div>

                        {/* Main Heading */}
                        <div className="mb-8 animate-slide-up">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[var(--text-primary)] mb-4 leading-tight tracking-tight">
                                <span className="text-[var(--secondary-color)]">
                                    Hello,
                                </span>{" "}
                                I&apos;m
                                <br />
                                <span className="bg-gradient-to-r from-[var(--primary-color)] via-[var(--secondary-color)] to-[var(--accent-color)] bg-clip-text text-transparent font-black">
                                    Ripas Sorker Rifat
                                </span>
                            </h1>
                        </div>

                        {/* Typewriter Subtitle */}
                        <div
                            className="text-base sm:text-lg lg:text-xl font-semibold mb-8 sm:mb-10 h-10 sm:h-12 animate-slide-up text-[var(--primary-color)]"
                            style={{animationDelay: "0.2s"}}>
                            <Typewriter
                                options={{
                                    strings: [
                                        "Building scalable web applications",
                                        "Crafting exceptional user experiences",
                                        "Solving complex problems with code",
                                        "Creating innovative digital solutions",
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    delay: 75,
                                    deleteSpeed: 50,
                                }}
                            />
                        </div>

                        {/* Description */}
                        <p
                            className="text-sm sm:text-base lg:text-lg text-[var(--text-secondary)] mb-10 sm:mb-12 max-w-xl lg:max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-slide-up font-light"
                            style={{animationDelay: "0.4s"}}>
                            I specialize in building full-stack web applications
                            with modern technologies. Passionate about creating
                            elegant solutions that combine beautiful design with
                            powerful functionality.
                        </p>

                        {/* Action Buttons */}
                        <div
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up mb-10 sm:mb-12"
                            style={{animationDelay: "0.6s"}}>
                            <button
                                onClick={handleResumeDownload}
                                className="group cursor-pointer relative overflow-hidden bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] hover:from-[var(--primary-color)]/90 hover:to-[var(--secondary-color)]/90 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-[var(--primary-color)]/40 text-sm sm:text-base">
                                <div className="flex items-center justify-center space-x-2">
                                    <FaDownload className="text-base group-hover:animate-bounce" />
                                    <span>Download Resume</span>
                                </div>
                                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                            <button
                                onClick={() => router.push("/projects")}
                                className="group cursor-pointer relative overflow-hidden border-2 border-[var(--secondary-color)] text-[var(--secondary-color)] hover:bg-[var(--secondary-color)] hover:text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-xl hover:shadow-[var(--secondary-color)]/30 text-sm sm:text-base">
                                <div className="flex items-center justify-center space-x-2">
                                    <FaEye className="text-base group-hover:scale-110 transition-transform duration-300" />
                                    <span>View Projects</span>
                                </div>
                            </button>
                        </div>

                        {/* Social Links */}
                        <div
                            className="flex gap-3 justify-center lg:justify-start animate-slide-up"
                            style={{animationDelay: "0.8s"}}>
                            {getSocialLinks().map(
                                (social: any, index: number) => (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative p-2.5 rounded-lg glass border border-[var(--border-color)]/30 hover:border-[var(--primary-color)]/60 text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-[var(--primary-color)]/25 backdrop-blur-sm"
                                        style={{
                                            animationDelay: `${index * 0.1}s`,
                                        }}
                                        title={social.name}>
                                        <div className="text-lg group-hover:scale-125 transition-transform duration-300">
                                            {social.icon}
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-color)]/10 to-[var(--secondary-color)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                                    </a>
                                )
                            )}
                        </div>
                    </div>

                    {/* Skills Animation Section with Spillover Effect */}
                    <div className="flex-1 flex justify-center lg:justify-end z-10 mt-8 lg:mt-0 order-1 lg:order-2 mb-8 lg:mb-0">
                        <div className="relative w-full max-w-[330px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[560px] aspect-square">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-600/20 rounded-full blur-3xl transform scale-110 animate-pulse"></div>
                            <div
                                className="absolute inset-0 bg-gradient-to-l from-blue-500/10 to-cyan-400/10 rounded-full blur-2xl transform scale-95 animate-pulse"
                                style={{animationDelay: "1s"}}></div>

                            <Lottie
                                loop
                                animationData={coding}
                                style={{
                                    height: "85%",
                                    width: "85%",
                                    filter: "drop-shadow(0 0 20px rgba(59, 130, 246, 0.3))",
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* Skills Marquee Section */}
                {/* <div className="md:absolute md:bottom-20 lg:-bottom-2 left-0 right-0 z-10">
                    <SkillsMarquee />
                </div> */}
            </section>
        </>
    );
};

export default Banner;
