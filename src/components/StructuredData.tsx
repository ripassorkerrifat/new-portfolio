import Script from "next/script";

const StructuredData = () => {
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Ripas Sorker Rifat",
        jobTitle: "Full Stack Developer",
        description:
            "Passionate Full Stack Developer and Software Engineer specializing in React, Node.js, Next.js, and modern web technologies.",
        url: "https://ripassorkerrifat.me",
        sameAs: [
            "https://github.com/ripassorkerrifat",
            "https://linkedin.com/in/ripassorkerrifat",
            "https://twitter.com/ripassorkerrifat",
        ],
        knowsAbout: [
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Node.js",
            "MongoDB",
            "AWS",
            "Full Stack Development",
            "Web Development",
            "Software Engineering",
        ],
        hasOccupation: {
            "@type": "Occupation",
            name: "Full Stack Developer",
            occupationLocation: {
                "@type": "Country",
                name: "Bangladesh",
            },
        },
    };

    const portfolioSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Ripas Sorker Rifat Portfolio",
        url: "https://ripassorkerrifat.me",
        description:
            "Portfolio website showcasing full stack development projects and professional achievements",
        author: {
            "@type": "Person",
            name: "Ripas Sorker Rifat",
        },
        potentialAction: {
            "@type": "SearchAction",
            target: "https://ripassorkerrifat.me/projects?search={search_term_string}",
            "query-input": "required name=search_term_string",
        },
    };

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Ripas Sorker Rifat - Web Development Services",
        description:
            "Professional full stack web development services specializing in React, Node.js, and modern web technologies",
        founder: {
            "@type": "Person",
            name: "Ripas Sorker Rifat",
        },
        areaServed: "Worldwide",
        serviceType: [
            "Full Stack Development",
            "Frontend Development",
            "Backend Development",
            "Web Application Development",
            "API Development",
            "Database Design",
        ],
    };

    return (
        <>
            <Script
                id="person-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(personSchema),
                }}
            />
            <Script
                id="portfolio-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(portfolioSchema),
                }}
            />
            <Script
                id="organization-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organizationSchema),
                }}
            />
        </>
    );
};

export default StructuredData;
