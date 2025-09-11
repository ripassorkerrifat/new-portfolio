/* eslint-disable react/no-unescaped-entities */

import {
    FaUser,
    FaCode,
    FaMapMarkerAlt,
    FaEnvelope,
    FaDownload,
    FaCalendarAlt,
    FaGraduationCap,
} from "react-icons/fa";

const About = () => {
    return (
        <section
            id="about"
            className="py-20 bg-gradient-to-br from-[var(--primary-bg)] via-[var(--secondary-bg)] to-[var(--accent-bg)] relative overflow-hidden">
            {/* Enhanced Background Elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 rounded-full blur-3xl animate-pulse"></div>
                <div
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-[var(--secondary-color)]/15 to-[var(--accent-color)]/15 rounded-full blur-3xl animate-pulse"
                    style={{animationDelay: "3s"}}></div>
                <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[var(--accent-color)]/10 to-[var(--primary-color)]/10 rounded-full blur-3xl animate-pulse"
                    style={{animationDelay: "4s"}}></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Enhanced Header */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold text-[var(--text-primary)] mb-6 animate-slide-up">
                        About{" "}
                        <span className="bg-gradient-to-r from-[var(--primary-color)] via-[var(--secondary-color)] to-[var(--accent-color)] bg-clip-text text-transparent animate-glow">
                            Me
                        </span>
                    </h2>
                    <p
                        className="text-[var(--text-secondary)] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed animate-slide-up"
                        style={{animationDelay: "0.2s"}}>
                        Passionate full-stack developer crafting innovative
                        digital solutions with cutting-edge technologies and
                        creative problem-solving.
                    </p>
                </div>

                {/* About Me Section */}
                <div className="grid lg:grid-cols-2 gap-16 mb-20">
                    {/* Left Column - About Me */}
                    <div className="space-y-8 h-full">
                        <div
                            className="group glass rounded-3xl p-8 border border-[var(--border-color)] hover:border-[var(--primary-color)]/60 transition-all duration-700 backdrop-blur-xl relative overflow-hidden animate-slide-up h-full flex flex-col"
                            style={{animationDelay: "0.1s"}}>
                            {/* Background Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-color)]/5 to-[var(--secondary-color)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex items-center space-x-4 mb-6">
                                    <div className="w-14 h-14 bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] rounded-2xl flex items-center justify-center shadow-lg">
                                        <FaUser className="text-xl text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-[var(--text-primary)]">
                                        About Me
                                    </h3>
                                </div>

                                <div className="space-y-4 flex-grow">
                                    <p className="text-[var(--text-secondary)] text-base leading-relaxed">
                                        Hi, I'm{" "}
                                        <span className="text-[var(--primary-color)] font-semibold">
                                            Ripas Sorker Rifat
                                        </span>
                                        , a passionate full-stack developer
                                        currently pursuing my Bachelor's degree
                                        in Computer Science & Engineering at
                                        Dhaka International University.
                                    </p>
                                    <p className="text-[var(--text-secondary)] text-base leading-relaxed">
                                        With over 2 years of professional
                                        experience, I've worked on diverse
                                        projects ranging from e-commerce
                                        platforms to educational technology
                                        solutions. I'm passionate about writing
                                        clean, maintainable code and creating
                                        intuitive user interfaces that solve
                                        real-world problems.
                                    </p>
                                    <p className="text-[var(--text-secondary)] text-base leading-relaxed">
                                        My technical expertise spans across
                                        modern web technologies including
                                        TypeScript, Python, MongoDB, PostgreSQL,
                                        and cloud platforms like AWS and Vercel.
                                        I'm always eager to learn new
                                        technologies and stay updated with the
                                        latest industry trends.
                                    </p>
                                    <p className="text-[var(--text-secondary)] text-base leading-relaxed">
                                        When I'm not coding, I enjoy exploring
                                        new technologies, contributing to
                                        open-source projects, and sharing
                                        knowledge with the developer community.
                                        I believe in continuous learning and
                                        love mentoring fellow developers.
                                    </p>
                                </div>

                                {/* Skills & Interests */}
                                <div className="mt-6">
                                    <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
                                        Core Interests
                                    </h4>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {[
                                            "Web Development",
                                            "UI/UX Design",
                                            "Open Source",
                                            "Cloud Computing",
                                            "Mobile Apps",
                                            "AI/ML",
                                        ].map((interest, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 bg-[var(--primary-color)]/10 text-[var(--primary-color)] rounded-full text-sm font-medium border border-[var(--primary-color)]/20">
                                                {interest}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Personal Info Grid */}
                                <div className="grid grid-cols-2 gap-4 mt-6">
                                    <div className="bg-[var(--card-bg)]/30 rounded-2xl p-4 border border-[var(--border-color)]/50 hover:border-[var(--primary-color)]/40 transition-all duration-300">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-8 h-8 bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] rounded-xl flex items-center justify-center">
                                                <FaMapMarkerAlt className="text-white text-sm" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-[var(--text-secondary)] font-medium">
                                                    Location
                                                </p>
                                                <p className="text-sm font-semibold text-[var(--text-primary)]">
                                                    Dhaka, Bangladesh
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-[var(--card-bg)]/30 rounded-2xl p-4 border border-[var(--border-color)]/50 hover:border-[var(--secondary-color)]/40 transition-all duration-300">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-8 h-8 bg-gradient-to-br from-[var(--secondary-color)] to-[var(--accent-color)] rounded-xl flex items-center justify-center">
                                                <FaGraduationCap className="text-white text-sm" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-[var(--text-secondary)] font-medium">
                                                    Education
                                                </p>
                                                <p className="text-sm font-semibold text-[var(--text-primary)]">
                                                    CSE Student
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-[var(--card-bg)]/30 rounded-2xl p-4 border border-[var(--border-color)]/50 hover:border-[var(--accent-color)]/40 transition-all duration-300">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-8 h-8 bg-gradient-to-br from-[var(--accent-color)] to-[var(--primary-color)] rounded-xl flex items-center justify-center">
                                                <FaCode className="text-white text-sm" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-[var(--text-secondary)] font-medium">
                                                    Specialization
                                                </p>
                                                <p className="text-sm font-semibold text-[var(--text-primary)]">
                                                    Full Stack
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-[var(--card-bg)]/30 rounded-2xl p-4 border border-[var(--border-color)]/50 hover:border-[var(--primary-color)]/40 transition-all duration-300">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-8 h-8 bg-gradient-to-br from-[var(--primary-color)] to-[var(--accent-color)] rounded-xl flex items-center justify-center">
                                                <FaCalendarAlt className="text-white text-sm" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-[var(--text-secondary)] font-medium">
                                                    Experience
                                                </p>
                                                <p className="text-sm font-semibold text-[var(--text-primary)]">
                                                    2+ Years
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-wrap gap-4 mt-8">
                                    <button className="flex items-center space-x-2 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white px-6 py-3 rounded-2xl font-semibold hover:shadow-lg hover:shadow-[var(--primary-color)]/25 transition-all duration-300 transform hover:-translate-y-1">
                                        <FaDownload className="text-sm" />
                                        <span>Download CV</span>
                                    </button>
                                    <a
                                        href="#contact"
                                        className="flex items-center space-x-2 border border-[var(--primary-color)] text-[var(--primary-color)] px-6 py-3 rounded-2xl font-semibold hover:bg-[var(--primary-color)] hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                                        <FaEnvelope className="text-sm" />
                                        <span>Get In Touch</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Experience */}
                    <div className="space-y-8 h-full">
                        <div
                            className="group glass rounded-3xl p-8 border border-[var(--border-color)] hover:border-[var(--primary-color)]/60 transition-all duration-700 backdrop-blur-xl relative overflow-hidden animate-slide-up h-full flex flex-col"
                            style={{animationDelay: "0.2s"}}>
                            {/* Background Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--secondary-color)]/5 to-[var(--accent-color)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative z-10">
                                <div className="flex items-center space-x-4 mb-6">
                                    <div className="w-14 h-14 bg-gradient-to-br from-[var(--secondary-color)] to-[var(--accent-color)] rounded-2xl flex items-center justify-center shadow-lg">
                                        <FaCode className="text-xl text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-[var(--text-primary)]">
                                        Professional Journey
                                    </h3>
                                </div>

                                <div className="space-y-6">
                                    {/* Current Job */}
                                    <div className="glass p-5 rounded-xl border border-[var(--border-color)]/50 hover:border-[var(--primary-color)]/50 transition-all duration-300">
                                        <div className="flex items-start space-x-4">
                                            <div className="w-3 h-3 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] rounded-full mt-2 flex-shrink-0"></div>
                                            <div className="flex-1">
                                                <div className="flex items-center space-x-2 mb-2">
                                                    <FaCalendarAlt className="text-[var(--primary-color)] text-sm" />
                                                    <span className="text-[var(--primary-color)] font-medium text-xs">
                                                        March 2023 - Present
                                                    </span>
                                                </div>
                                                <h4 className="text-lg font-bold text-[var(--text-primary)] mb-1">
                                                    Full Stack Developer
                                                </h4>
                                                <p className="text-[var(--secondary-color)] font-semibold mb-2 text-sm">
                                                    Codenco IT • Remote
                                                </p>
                                                <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                                                    Developing and maintaining
                                                    full-stack web applications
                                                    using modern technologies.
                                                    Working with React, Next.js,
                                                    Node.js, and various
                                                    databases to create scalable
                                                    solutions.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Freelance Projects */}
                                    <div className="glass p-5 rounded-xl border border-[var(--border-color)]/50 hover:border-[var(--primary-color)]/50 transition-all duration-300">
                                        <div className="flex items-start space-x-4">
                                            <div className="w-3 h-3 bg-gradient-to-r from-[var(--secondary-color)] to-[var(--accent-color)] rounded-full mt-2 flex-shrink-0"></div>
                                            <div className="flex-1">
                                                <div className="flex items-center space-x-2 mb-2">
                                                    <FaCalendarAlt className="text-[var(--secondary-color)] text-sm" />
                                                    <span className="text-[var(--secondary-color)] font-medium text-xs">
                                                        2022 - Present
                                                    </span>
                                                </div>
                                                <h4 className="text-lg font-bold text-[var(--text-primary)] mb-1">
                                                    Freelance Developer
                                                </h4>
                                                <p className="text-[var(--secondary-color)] font-semibold mb-2 text-sm">
                                                    Independent Projects •
                                                    Remote
                                                </p>
                                                <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                                                    Working on various freelance
                                                    projects including
                                                    e-commerce platforms,
                                                    portfolio websites, and
                                                    custom web applications for
                                                    clients worldwide.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Internship 1 */}
                                    <div className="glass p-5 rounded-xl border border-[var(--border-color)]/50 hover:border-[var(--primary-color)]/50 transition-all duration-300">
                                        <div className="flex items-start space-x-4">
                                            <div className="w-3 h-3 bg-gradient-to-r from-[var(--accent-color)] to-[var(--primary-color)] rounded-full mt-2 flex-shrink-0"></div>
                                            <div className="flex-1">
                                                <div className="flex items-center space-x-2 mb-2">
                                                    <FaCalendarAlt className="text-[var(--accent-color)] text-sm" />
                                                    <span className="text-[var(--accent-color)] font-medium text-xs">
                                                        November 2023 - February
                                                        2024
                                                    </span>
                                                </div>
                                                <h4 className="text-lg font-bold text-[var(--text-primary)] mb-1">
                                                    Junior Full Stack Developer
                                                    (Internship)
                                                </h4>
                                                <p className="text-[var(--secondary-color)] font-semibold mb-2 text-sm">
                                                    Eduphy Academy • Remote
                                                </p>
                                                <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                                                    Gained hands-on experience
                                                    in full-stack development
                                                    through practical projects.
                                                    Worked with educational
                                                    technology platforms and
                                                    learned industry best
                                                    practices.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Internship 2 */}
                                    <div className="glass p-5 rounded-xl border border-[var(--border-color)]/50 hover:border-[var(--primary-color)]/50 transition-all duration-300">
                                        <div className="flex items-start space-x-4">
                                            <div className="w-3 h-3 bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)] rounded-full mt-2 flex-shrink-0"></div>
                                            <div className="flex-1">
                                                <div className="flex items-center space-x-2 mb-2">
                                                    <FaCalendarAlt className="text-[var(--primary-color)] text-sm" />
                                                    <span className="text-[var(--primary-color)] font-medium text-xs">
                                                        April 2023 - September
                                                        2023
                                                    </span>
                                                </div>
                                                <h4 className="text-lg font-bold text-[var(--text-primary)] mb-1">
                                                    Web Developer (Internship)
                                                </h4>
                                                <p className="text-[var(--secondary-color)] font-semibold mb-2 text-sm">
                                                    The Change • Remote
                                                </p>
                                                <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                                                    Started my professional
                                                    journey as a web developer
                                                    intern. Focused on frontend
                                                    development, learning
                                                    responsive design principles
                                                    and modern web technologies.
                                                </p>
                                            </div>
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

export default About;
