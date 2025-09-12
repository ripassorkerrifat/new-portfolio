"use client";

const SkillsMarquee = () => {
    const skills = [
        // Programming Languages
        {
            name: "C",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
        },
        {
            name: "C++",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
        },
        {
            name: "Python",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
        },
        {
            name: "JavaScript",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        },
        {
            name: "TypeScript",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        },
        // Web Technologies
        {
            name: "HTML",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
        },
        {
            name: "CSS",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
        },
        {
            name: "Tailwind CSS",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        },
        // Frontend Frameworks
        {
            name: "React",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        },
        {
            name: "Next.js",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
        },
        {
            name: "Redux",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
        },
        // Backend Technologies
        {
            name: "Node.js",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
        },
        {
            name: "Express.js",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
        },
        // Databases
        {
            name: "MongoDB",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
        },
        {
            name: "PostgreSQL",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
        },
        {
            name: "Prisma",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
        },
        // Cloud & Services
        {
            name: "Firebase",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
        },
        {
            name: "AWS",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
        },
        // DevOps & Tools
        {
            name: "Git",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
        },
        {
            name: "Docker",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
        },
        {
            name: "Linux",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
        },
    ];

    return (
        <div className="w-full py-6 overflow-hidden group">
            <div className="flex animate-marquee group-hover:pause-animation whitespace-nowrap">
                {/* First set of skills */}
                {skills.map((skill, index) => (
                    <div
                        key={`first-${index}`}
                        className="inline-flex items-center md:mx-4 mx-2 md:px-6 px-4 py-3 glass rounded-full border border-[var(--border-color)]/30 hover:border-[var(--secondary-color)]/50 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-[var(--glow-secondary)]/20 backdrop-blur-md bg-gradient-to-r from-[var(--primary-bg)]/80 to-[var(--secondary-bg)]/80">
                        <img
                            src={skill.logo}
                            alt={skill.name}
                            className="md:size-7 size-6 mr-4 filter drop-shadow-lg"
                        />
                        <span className="pr-6 font-bold text-[var(--text-primary)] tracking-wide">
                            {skill.name}
                        </span>
                    </div>
                ))}

                {/* Duplicate set for seamless loop */}
                {skills.map((skill, index) => (
                    <div
                        key={`second-${index}`}
                        className="inline-flex items-center md:mx-4 mx-2 md:px-6 px-4 py-3 glass rounded-full border border-[var(--border-color)]/30 hover:border-[var(--secondary-color)]/50 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-[var(--glow-secondary)]/20 backdrop-blur-md bg-gradient-to-r from-[var(--primary-bg)]/80 to-[var(--secondary-bg)]/80">
                        <img
                            src={skill.logo}
                            alt={skill.name}
                            className="md:size-7 size-6 mr-4 filter drop-shadow-lg"
                        />
                        <span className="pr-6 font-bold text-[var(--text-primary)] tracking-wide">
                            {skill.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillsMarquee;
