"use client";

import {useState} from "react";
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
    FaLightbulb,
    FaDatabase,
    FaServer,
    FaPalette,
    FaTools,
} from "react-icons/fa";
import {
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiJavascript,
    SiHtml5,
    SiExpress,
    SiMongodb,
    SiPostgresql,
    SiRedis,
    SiVercel,
} from "react-icons/si";
import {VscCode} from "react-icons/vsc";

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState("frontend");

    const skillCategories = {
        frontend: {
            title: "Frontend Development",
            icon: <FaPalette />,
            color: "from-blue-400 to-cyan-600",
            bgColor: "from-blue-400/10 to-cyan-600/10",
            skills: [
                {
                    name: "React.js",
                    icon: <FaReact />,
                    color: "text-blue-400",
                    description: "Modern UI Library",
                },
                {
                    name: "Next.js",
                    icon: <SiNextdotjs />,
                    color: "text-gray-300",
                    description: "Full-Stack Framework",
                },
                {
                    name: "TypeScript",
                    icon: <SiTypescript />,
                    color: "text-blue-600",
                    description: "Type-Safe JavaScript",
                },
                {
                    name: "Tailwind CSS",
                    icon: <SiTailwindcss />,
                    color: "text-cyan-400",
                    description: "Utility-First CSS",
                },
                {
                    name: "JavaScript",
                    icon: <SiJavascript />,
                    color: "text-yellow-400",
                    description: "Core Language",
                },
                {
                    name: "HTML5/CSS3",
                    icon: <SiHtml5 />,
                    color: "text-orange-500",
                    description: "Web Fundamentals",
                },
            ],
        },
        backend: {
            title: "Backend Development",
            icon: <FaServer />,
            color: "from-green-400 to-emerald-600",
            bgColor: "from-green-400/10 to-emerald-600/10",
            skills: [
                {
                    name: "Node.js",
                    icon: <FaNodeJs />,
                    color: "text-green-500",
                    description: "Server Runtime",
                },
                {
                    name: "Express.js",
                    icon: <SiExpress />,
                    color: "text-gray-300",
                    description: "Web Framework",
                },
                {
                    name: "Python",
                    icon: <FaPython />,
                    color: "text-yellow-400",
                    description: "Versatile Language",
                },
                {
                    name: "MongoDB",
                    icon: <SiMongodb />,
                    color: "text-green-400",
                    description: "NoSQL Database",
                },
                {
                    name: "PostgreSQL",
                    icon: <SiPostgresql />,
                    color: "text-blue-400",
                    description: "SQL Database",
                },
                {
                    name: "Redis",
                    icon: <SiRedis />,
                    color: "text-red-500",
                    description: "In-Memory Store",
                },
            ],
        },
        tools: {
            title: "Tools & Technologies",
            icon: <FaTools />,
            color: "from-purple-400 to-pink-600",
            bgColor: "from-purple-400/10 to-pink-600/10",
            skills: [
                {
                    name: "Git/GitHub",
                    icon: <FaGitAlt />,
                    color: "text-orange-500",
                    description: "Version Control",
                },
                {
                    name: "Docker",
                    icon: <FaDocker />,
                    color: "text-blue-500",
                    description: "Containerization",
                },
                {
                    name: "AWS",
                    icon: <FaAws />,
                    color: "text-orange-400",
                    description: "Cloud Platform",
                },
                {
                    name: "Vercel",
                    icon: <SiVercel />,
                    color: "text-gray-300",
                    description: "Deployment",
                },
                {
                    name: "Figma",
                    icon: <FaFigma />,
                    color: "text-purple-500",
                    description: "UI/UX Design",
                },
                {
                    name: "VS Code",
                    icon: <VscCode />,
                    color: "text-blue-400",
                    description: "Code Editor",
                },
            ],
        },
    };

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
                        <h2 className="text-4xl lg:text-6xl font-bold text-[var(--text-primary)] animate-slide-up">
                            My{" "}
                            <span className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text text-transparent animate-glow">
                                Skills
                            </span>
                        </h2>
                    </div>
                    <p
                        className="text-[var(--text-secondary)] text-xl max-w-3xl mx-auto animate-slide-up leading-relaxed"
                        style={{animationDelay: "0.2s"}}>
                        Cutting-edge technologies and tools I master to
                        transform innovative ideas into exceptional digital
                        experiences
                    </p>
                </div>

                {/* Enhanced Category Tabs */}
                <div className="flex flex-wrap justify-center gap-6 mb-16">
                    {Object.entries(skillCategories).map(([key, category]) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(key)}
                            className={`group relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-105 ${
                                activeCategory === key
                                    ? `bg-gradient-to-r ${category.color} text-white shadow-2xl shadow-[var(--primary-color)]/30 glass border border-white/20`
                                    : "glass border border-[var(--border-color)] text-[var(--text-secondary)] hover:border-[var(--primary-color)]/50 hover:shadow-xl hover:shadow-[var(--primary-color)]/20"
                            }}`}>
                            <div className="flex items-center space-x-3">
                                <div
                                    className={`text-xl transition-transform duration-300 group-hover:scale-110 ${
                                        activeCategory === key
                                            ? "text-white"
                                            : "text-[var(--primary-color)]"
                                    }`}>
                                    {category.icon}
                                </div>
                                <span>{category.title}</span>
                            </div>
                            {activeCategory === key && (
                                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-2xl animate-pulse"></div>
                            )}
                        </button>
                    ))}
                </div>

                {/* Enhanced Skills Grid */}
                <div className="max-w-6xl mx-auto">
                    <div
                        className={`glass rounded-3xl p-8 border border-[var(--border-color)] bg-gradient-to-br ${
                            skillCategories[
                                activeCategory as keyof typeof skillCategories
                            ].bgColor
                        } backdrop-blur-xl mb-12`}>
                        <div className="flex items-center justify-center space-x-4 mb-8">
                            <div
                                className={`w-16 h-16 bg-gradient-to-br ${
                                    skillCategories[
                                        activeCategory as keyof typeof skillCategories
                                    ].color
                                } rounded-2xl flex items-center justify-center shadow-lg`}>
                                <div className="text-2xl text-white">
                                    {
                                        skillCategories[
                                            activeCategory as keyof typeof skillCategories
                                        ].icon
                                    }
                                </div>
                            </div>
                            <h3 className="text-4xl font-bold text-[var(--text-primary)]">
                                {
                                    skillCategories[
                                        activeCategory as keyof typeof skillCategories
                                    ].title
                                }
                            </h3>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {skillCategories[
                                activeCategory as keyof typeof skillCategories
                            ].skills.map((skill, index) => (
                                <div
                                    key={skill.name}
                                    className="group glass rounded-3xl p-8 border border-[var(--border-color)]/50 hover:border-[var(--primary-color)]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[var(--primary-color)]/20 backdrop-blur-xl relative overflow-hidden animate-slide-up"
                                    style={{animationDelay: `${index * 0.1}s`}}>
                                    {/* Hover Background Effect */}
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${
                                            skillCategories[
                                                activeCategory as keyof typeof skillCategories
                                            ].bgColor
                                        } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                                    {/* Floating Glow Effect */}
                                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    <div className="relative z-10 text-center">
                                        {/* Icon Container */}
                                        <div className="flex justify-center mb-6">
                                            <div
                                                className={`w-20 h-20 bg-gradient-to-br ${
                                                    skillCategories[
                                                        activeCategory as keyof typeof skillCategories
                                                    ].color
                                                } rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                                                <div className="text-3xl text-white group-hover:animate-pulse">
                                                    {skill.icon}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Skill Name */}
                                        <h4 className="text-2xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-[var(--primary-color)] transition-colors duration-300">
                                            {skill.name}
                                        </h4>

                                        {/* Description */}
                                        <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-6 group-hover:text-[var(--text-primary)] transition-colors duration-300">
                                            {skill.description}
                                        </p>

                                        {/* Decorative Elements */}
                                        <div className="flex justify-center space-x-2">
                                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${
                                                skillCategories[
                                                    activeCategory as keyof typeof skillCategories
                                                ].color
                                            } animate-pulse`}></div>
                                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${
                                                skillCategories[
                                                    activeCategory as keyof typeof skillCategories
                                                ].color
                                            } animate-pulse`} style={{animationDelay: '0.2s'}}></div>
                                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${
                                                skillCategories[
                                                    activeCategory as keyof typeof skillCategories
                                                ].color
                                            } animate-pulse`} style={{animationDelay: '0.4s'}}></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
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
