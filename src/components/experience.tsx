/* eslint-disable react/no-unescaped-entities */
import {
    FaCode,
    FaCalendarAlt,
    FaBriefcase,
    FaGraduationCap,
    FaLaptopCode,
    FaUsers,
} from "react-icons/fa";

const Experience = () => {
    const experiences = [
        {
            id: 1,
            title: "Full Stack Developer",
            company: "Codenco IT",
            location: "Remote",
            period: "March 2023 - Present",
            type: "Full Time",
            description:
                "Developing and maintaining full-stack web applications including OTA platforms, HRMS systems, and e-commerce solutions. Leading frontend development with React/Next.js and building robust backend APIs with Node.js and modern databases.",
            technologies: [
                "React",
                "Next.js",
                "Node.js",
                "Express.js",
                "MongoDB",
                "PostgreSQL",
                "TypeScript",
                "JavaScript",
                "Prisma",
                "Tailwind CSS",
                "Redux",
                "Redis",
            ],
            icon: FaLaptopCode,
            color: "from-blue-500 to-cyan-500",
            current: true,
        },
        {
            id: 2,
            title: "Freelance Developer",
            company: "Independent Projects",
            location: "Remote",
            period: "2022 - Present",
            type: "Freelance",
            description:
                "Working on various freelance projects including jewelry e-commerce platforms, portfolio websites, HRMS solutions, and custom web applications for clients worldwide. Specializing in modern React/Next.js frontends with full-stack capabilities.",
            technologies: [
                "React",
                "Next.js",
                "Node.js",
                "Express.js",
                "MongoDB",
                "PostgreSQL",
                "TypeScript",
                "JavaScript",
                "Prisma",
                "Tailwind CSS",
                "Firebase",
                "Redux",
                "Redis",
            ],
            icon: FaUsers,
            color: "from-green-500 to-emerald-500",
            current: true,
        },
        {
            id: 3,
            title: "Junior Full Stack Developer (Internship)",
            company: "Eduphy Academy",
            location: "Remote",
            period: "November 2023 - February 2024",
            type: "Internship",
            description:
                "Gained hands-on experience in full-stack development through practical projects. Worked with educational technology platforms and learned industry best practices.",
            technologies: [
                "React",
                "Node.js",
                "Express",
                "MongoDB",
                "JavaScript",
                "Prisma",
                "Tailwind CSS",
                "Redux",
            ],
            icon: FaGraduationCap,
            color: "from-purple-500 to-pink-500",
            current: false,
        },
        {
            id: 4,
            title: "Web Developer (Internship)",
            company: "The Change",
            location: "Remote",
            period: "April 2023 - September 2023",
            type: "Internship",
            description:
                "Started my professional journey as a web developer intern. Focused on frontend development, learning responsive design principles and modern web technologies.",
            technologies: [
                "HTML",
                "CSS",
                "JavaScript",
                "Bootstrap",
                "jQuery",
                "Git",
            ],
            icon: FaCode,
            color: "from-orange-500 to-red-500",
            current: false,
        },
    ];

    return (
        <section
            id="experience"
            className="py-20 bg-gradient-to-br from-[var(--secondary-bg)] via-[var(--primary-bg)] to-[var(--secondary-bg)] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--secondary-color)]/5 via-transparent to-[var(--accent-color)]/5"></div>
            <div className="absolute top-20 right-10 w-80 h-80 bg-[var(--secondary-color)]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-[var(--accent-color)]/10 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6 animate-slide-up">
                        Professional{" "}
                        <span className="text-[var(--secondary-color)]">
                            Journey
                        </span>
                    </h2>
                    <p
                        className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed animate-slide-up"
                        style={{animationDelay: "0.2s"}}>
                        My career path showcases a progression from curious
                        beginner to experienced full-stack developer, with each
                        role contributing to my growth and expertise.
                    </p>
                </div>

                {/* Experience Timeline */}
                <div className="container mx-auto px-4">
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--primary-color)] via-[var(--secondary-color)] to-[var(--accent-color)] rounded-full"></div>

                        {/* Experience Items */}
                        <div className="space-y-8">
                            {experiences.map((exp, index) => {
                                const IconComponent = exp.icon;
                                const isEven = index % 2 === 0;

                                return (
                                    <div
                                        key={exp.id}
                                        className={`relative flex items-center ${
                                            isEven
                                                ? "md:flex-row"
                                                : "md:flex-row-reverse"
                                        } animate-slide-up`}
                                        style={{
                                            animationDelay: `${
                                                0.3 + index * 0.2
                                            }s`,
                                        }}>
                                        {/* Timeline Node */}
                                        <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-1/2 z-10">
                                            <div
                                                className={`w-16 h-16 bg-gradient-to-br ${exp.color} rounded-full flex items-center justify-center shadow-lg border-4 border-[var(--primary-bg)]`}>
                                                <IconComponent className="text-white text-xl" />
                                            </div>
                                        </div>

                                        {/* Content Card */}
                                        <div
                                            className={`w-full md:w-[48%] ml-20 md:ml-0 ${
                                                isEven
                                                    ? "md:mr-auto md:pr-8"
                                                    : "md:ml-auto md:pl-8"
                                            }`}>
                                            <div className="group glass rounded-3xl p-6 border border-[var(--border-color)] hover:border-[var(--primary-color)]/60 transition-all duration-700 backdrop-blur-xl relative overflow-hidden">
                                                {/* Background Gradient */}
                                                <div
                                                    className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                                                {/* Current Badge */}
                                                {exp.current && (
                                                    <div className="absolute top-4 right-4">
                                                        <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full border border-green-500/30">
                                                            Current
                                                        </span>
                                                    </div>
                                                )}

                                                <div className="relative z-10">
                                                    {/* Period */}
                                                    <div className="flex items-center space-x-2 mb-4">
                                                        <FaCalendarAlt
                                                            className={`text-sm bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}
                                                        />
                                                        <span
                                                            className={`font-medium text-sm bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                                                            {exp.period}
                                                        </span>
                                                        <span className="px-2 py-1 bg-[var(--card-bg)]/50 text-[var(--text-secondary)] text-xs rounded-full border border-[var(--border-color)]">
                                                            {exp.type}
                                                        </span>
                                                    </div>

                                                    {/* Title & Company */}
                                                    <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                                                        {exp.title}
                                                    </h3>
                                                    <div className="flex items-center space-x-2 mb-4">
                                                        <FaBriefcase className="text-[var(--secondary-color)] text-sm" />
                                                        <p className="text-[var(--secondary-color)] font-semibold">
                                                            {exp.company} •{" "}
                                                            {exp.location}
                                                        </p>
                                                    </div>

                                                    {/* Description */}
                                                    <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                                                        {exp.description}
                                                    </p>

                                                    {/* Technologies */}
                                                    <div>
                                                        <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-3">
                                                            Technologies Used:
                                                        </h4>
                                                        <div className="flex flex-wrap gap-2">
                                                            {exp.technologies.map(
                                                                (
                                                                    tech,
                                                                    techIndex
                                                                ) => (
                                                                    <span
                                                                        key={
                                                                            techIndex
                                                                        }
                                                                        className={`px-3 py-1 bg-gradient-to-r ${exp.color} bg-opacity-10 text-sm font-medium rounded-full border border-current border-opacity-20`}
                                                                        style={{
                                                                            background: `linear-gradient(135deg, var(--primary-color)/10, var(--secondary-color)/10)`,
                                                                            color: "var(--primary-color)",
                                                                        }}>
                                                                        {tech}
                                                                    </span>
                                                                )
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
