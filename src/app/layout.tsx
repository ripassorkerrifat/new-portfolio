import type {Metadata} from "next";
import {Cascadia_Code} from "next/font/google";
import "./globals.css";
import HeaderWrapper from "../components/HeaderWrapper";
import StructuredData from "../components/StructuredData";
import WhatsAppFloat from "../components/WhatsAppFloat";
import {SettingsProvider} from "../contexts/SettingsContext";

const geistSans = Cascadia_Code({
    variable: "--font-cascedia-code",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default:
            "Ripas Sorker Rifat - Full Stack Developer & Software Engineer",
        template: "%s | Ripas Sorker Rifat",
    },
    description:
        "Ripas Sorker Rifat is a passionate Full Stack Developer and Software Engineer specializing in React, Node.js, Next.js, and modern web technologies. Explore my portfolio of 30+ projects and professional achievements.",
    keywords: [
        "Ripas Sorker Rifat",
        "Full Stack Developer",
        "Software Engineer",
        "React Developer",
        "Node.js Developer",
        "Next.js",
        "JavaScript",
        "TypeScript",
        "Web Development",
        "Frontend Developer",
        "Backend Developer",
        "Portfolio",
        "Bangladesh Developer",
        "MERN Stack",
        "AWS",
        "Cloud Development",
    ],
    authors: [{name: "Ripas Sorker Rifat"}],
    creator: "Ripas Sorker Rifat",
    publisher: "Ripas Sorker Rifat",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://ripassorkerrifat.me",
        siteName: "Ripas Sorker Rifat Portfolio",
        title: "Ripas Sorker Rifat - Full Stack Developer & Software Engineer",
        description:
            "Passionate Full Stack Developer specializing in React, Node.js, and modern web technologies. Explore my portfolio of 30+ projects and professional achievements.",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Ripas Sorker Rifat - Full Stack Developer",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Ripas Sorker Rifat - Full Stack Developer & Software Engineer",
        description:
            "Passionate Full Stack Developer specializing in React, Node.js, and modern web technologies. Explore my portfolio of 30+ projects.",
        images: ["/profile.webp"],
        creator: "@ripassorkerrifat",
    },
    alternates: {
        canonical: "https://ripassorkerrifat.me",
    },
    verification: {
        google: "bNmtcgPYQ9AcZZ1klonDhTNZZE7GPGpkpQhFSW4mS_8",
        yandex: "your-yandex-verification-code",
    },
    category: "technology",
    viewport: {
        width: "device-width",
        initialScale: 1,
        maximumScale: 1,
    },
    manifest: "/manifest.json",
    icons: {
        icon: "/favicon.ico",
        shortcut: "/profile.webp",
        apple: "/profile.webp",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable}  antialiased bg-[var(--primary-bg)]`}>
                <SettingsProvider>
                    <StructuredData />
                    <HeaderWrapper />
                    <main className="min-h-[80vh]">{children}</main>
                    <WhatsAppFloat />
                </SettingsProvider>
            </body>
        </html>
    );
}
