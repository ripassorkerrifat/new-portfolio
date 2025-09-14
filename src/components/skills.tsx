import React from "react";
import {
    FaReact,
    FaNodeJs,
    FaPython,
    FaGitAlt,
    FaDocker,
    FaAws,
    FaFigma,
    FaCode,
    FaRocket,
    FaUsers,
    FaBrain,
} from "react-icons/fa";
import {
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiJavascript,
    SiExpress,
    SiMongodb,
    SiPostgresql,
    SiRedis,
    SiVercel,
    SiPrisma,
    SiFirebase,
} from "react-icons/si";

const Skills = () => {
    const allSkills = [
        {name: "React", icon: <FaReact />, color: "from-blue-400 to-blue-600"},
        {
            name: "Next.js",
            icon: <SiNextdotjs />,
            color: "from-gray-600 to-gray-800",
        },
        {
            name: "TypeScript",
            icon: <SiTypescript />,
            color: "from-blue-500 to-blue-700",
        },
        {
            name: "JavaScript",
            icon: <SiJavascript />,
            color: "from-yellow-400 to-yellow-600",
        },
        {
            name: "Node.js",
            icon: <FaNodeJs />,
            color: "from-green-500 to-green-700",
        },
        {
            name: "Express.js",
            icon: <SiExpress />,
            color: "from-gray-500 to-gray-700",
        },
        {
            name: "MongoDB",
            icon: <SiMongodb />,
            color: "from-green-400 to-green-600",
        },
        {
            name: "PostgreSQL",
            icon: <SiPostgresql />,
            color: "from-blue-400 to-blue-600",
        },
        {
            name: "Prisma",
            icon: <SiPrisma />,
            color: "from-indigo-400 to-indigo-600",
        },
        {
            name: "Tailwind CSS",
            icon: <SiTailwindcss />,
            color: "from-cyan-400 to-cyan-600",
        },
        {
            name: "Redux",
            icon: <FaReact />,
            color: "from-purple-500 to-purple-700",
        },
        {name: "Redis", icon: <SiRedis />, color: "from-red-500 to-red-700"},
        {
            name: "Firebase",
            icon: <SiFirebase />,
            color: "from-orange-400 to-orange-600",
        },
        {
            name: "Git",
            icon: <FaGitAlt />,
            color: "from-orange-500 to-orange-700",
        },
        {
            name: "Docker",
            icon: <FaDocker />,
            color: "from-blue-500 to-blue-700",
        },
        {name: "AWS", icon: <FaAws />, color: "from-orange-400 to-orange-600"},
        {
            name: "Vercel",
            icon: <SiVercel />,
            color: "from-gray-600 to-gray-800",
        },
        {
            name: "Figma",
            icon: <FaFigma />,
            color: "from-purple-500 to-purple-700",
        },
        {
            name: "Python",
            icon: <FaPython />,
            color: "from-yellow-400 to-yellow-600",
        },
    ];

    return (
        <section
            id="skills"
            className="py-20 bg-gradient-to-br from-[var(--primary-bg)] via-[var(--secondary-bg)] to-[var(--accent-bg)] relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[var(--primary-color)]/10 to-[var(--secondary-color)]/10 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-[var(--accent-color)]/10 to-[var(--primary-color)]/10 rounded-full blur-3xl animate-float-delayed"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-[var(--secondary-color)]/5 to-[var(--accent-color)]/5 rounded-full blur-3xl animate-pulse"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center space-x-4 mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] rounded-2xl flex items-center justify-center shadow-lg animate-bounce">
                            <FaCode className="text-2xl text-white" />
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text-primary)] animate-slide-up">
                            My{" "}
                            <span className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text text-transparent animate-glow">
                                Skills
                            </span>
                        </h2>
                    </div>
                    <p
                        className="text-[var(--text-secondary)] text-base lg:text-lg max-w-3xl mx-auto animate-slide-up leading-relaxed"
                        style={{animationDelay: "0.2s"}}>
                        Technologies and tools I use to build exceptional
                        digital experiences
                    </p>
                </div>

                {/* Skills Floating Layout */}
                <div className="relative max-w-6xl mx-auto min-h-[600px]">
                    {/* Floating Skills */}
                    <div className="absolute inset-0">
                        {allSkills.map((skill, index) => {
                            // Create a more organic floating layout
                            const positions = [
                                {top: "10%", left: "15%"},
                                {top: "25%", left: "75%"},
                                {top: "5%", left: "45%"},
                                {top: "35%", left: "25%"},
                                {top: "15%", left: "85%"},
                                {top: "45%", left: "65%"},
                                {top: "55%", left: "15%"},
                                {top: "25%", left: "55%"},
                                {top: "65%", left: "80%"},
                                {top: "75%", left: "35%"},
                                {top: "85%", left: "65%"},
                                {top: "43%", left: "5%"},
                                {top: "75%", left: "75%"},
                                {top: "55%", left: "45%"},
                                {top: "85%", left: "15%"},
                                {top: "35%", left: "85%"},
                                {top: "65%", left: "25%"},
                                {top: "95%", left: "55%"},
                                {top: "5%", left: "75%"},
                            ];

                            const position =
                                positions[index % positions.length];

                            return (
                                <div
                                    key={skill.name}
                                    className="absolute group animate-slide-up"
                                    style={{
                                        top: position.top,
                                        left: position.left,
                                        transform: "translate(-50%, -50%)",
                                        animationDelay: `${index * 0.1}s`,
                                    }}>
                                    <div className="relative">
                                        {/* Floating Orb */}
                                        <div
                                            className={`lg:size-20 md:size-16 size-14 bg-gradient-to-br ${skill.color} rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-125 cursor-pointer group-hover:animate-pulse border-4 border-white/20 backdrop-blur-sm`}>
                                            <div className="text-2xl text-white group-hover:scale-110 transition-transform duration-300">
                                                {skill.icon}
                                            </div>
                                        </div>

                                        {/* Skill Name Tooltip */}
                                        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                                            <div className="bg-[var(--card-bg)] backdrop-blur-xl border border-[var(--border-color)] rounded-lg px-3 py-2 shadow-xl">
                                                <p className="text-sm font-semibold text-[var(--text-primary)] whitespace-nowrap">
                                                    {skill.name}
                                                </p>
                                            </div>
                                            {/* Arrow */}
                                            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[var(--card-bg)] border-l border-t border-[var(--border-color)] rotate-45"></div>
                                        </div>

                                        {/* Floating Animation Rings */}
                                        <div
                                            className={`absolute inset-0 rounded-full bg-gradient-to-br ${skill.color} opacity-20 animate-ping group-hover:animate-pulse`}></div>
                                        <div
                                            className={`absolute -inset-2 rounded-full bg-gradient-to-br ${skill.color} opacity-10 animate-pulse`}
                                            style={{
                                                animationDelay: "0.5s",
                                            }}></div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Connecting Lines Animation */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                        <defs>
                            <linearGradient
                                id="lineGradient"
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="100%">
                                <stop
                                    offset="0%"
                                    stopColor="var(--primary-color)"
                                    stopOpacity="0.3"
                                />
                                <stop
                                    offset="100%"
                                    stopColor="var(--secondary-color)"
                                    stopOpacity="0.1"
                                />
                            </linearGradient>
                        </defs>
                        {/* Animated connecting lines */}
                        <path
                            d="M 100 60 Q 300 100 500 80 T 900 120"
                            stroke="url(#lineGradient)"
                            strokeWidth="2"
                            fill="none"
                            className="animate-pulse"
                        />
                        <path
                            d="M 150 200 Q 400 150 650 180 T 850 160"
                            stroke="url(#lineGradient)"
                            strokeWidth="1.5"
                            fill="none"
                            className="animate-pulse"
                            style={{animationDelay: "1s"}}
                        />
                        <path
                            d="M 80 350 Q 350 300 600 340 T 920 320"
                            stroke="url(#lineGradient)"
                            strokeWidth="1"
                            fill="none"
                            className="animate-pulse"
                            style={{animationDelay: "2s"}}
                        />
                    </svg>
                </div>

                {/* Enhanced Soft Skills Section */}
                <div className="mt-20">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
                            Beyond Technical Skills
                        </h3>
                        <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
                            The soft skills that make the difference in
                            delivering exceptional results
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="group glass rounded-3xl p-8 border border-[var(--border-color)] hover:border-[var(--primary-color)]/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[var(--primary-color)]/20 backdrop-blur-xl relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-color)]/5 to-[var(--secondary-color)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <FaBrain className="text-2xl text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4 group-hover:text-[var(--primary-color)] transition-colors duration-300">
                                    Problem Solving
                                </h3>
                                <p className="text-[var(--text-secondary)] leading-relaxed">
                                    Strong analytical mindset with ability to
                                    break down complex challenges into elegant,
                                    scalable solutions through systematic
                                    thinking.
                                </p>
                            </div>
                        </div>

                        <div className="group glass rounded-3xl p-8 border border-[var(--border-color)] hover:border-[var(--secondary-color)]/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[var(--secondary-color)]/20 backdrop-blur-xl relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--secondary-color)]/5 to-[var(--accent-color)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <FaRocket className="text-2xl text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4 group-hover:text-[var(--secondary-color)] transition-colors duration-300">
                                    Performance Optimization
                                </h3>
                                <p className="text-[var(--text-secondary)] leading-relaxed">
                                    Expert in optimizing applications for
                                    lightning-fast performance, scalability, and
                                    exceptional user experiences across all
                                    devices.
                                </p>
                            </div>
                        </div>

                        <div className="group glass rounded-3xl p-8 border border-[var(--border-color)] hover:border-[var(--accent-color)]/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[var(--accent-color)]/20 backdrop-blur-xl relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-color)]/5 to-[var(--primary-color)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <FaUsers className="text-2xl text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4 group-hover:text-[var(--accent-color)] transition-colors duration-300">
                                    Team Leadership
                                </h3>
                                <p className="text-[var(--text-secondary)] leading-relaxed">
                                    Excellent communication and leadership
                                    skills with proven experience in agile
                                    development, mentoring, and cross-functional
                                    collaboration.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
