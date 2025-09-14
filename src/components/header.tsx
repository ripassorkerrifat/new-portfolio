"use client";

import React, {useState, useEffect} from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import {useRouter} from "next/navigation";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const navLinks = [
        {name: "Home", href: "#home"},
        {name: "Projects", href: "#projects"},
        {name: "Experience", href: "#experience"},
        {name: "Skills", href: "#skills"},
        {name: "Contact", href: "#contact"},
        {name: "About", href: "#about"},
    ];
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({behavior: "smooth"});
        }
        setIsMenuOpen(false);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                isScrolled
                    ? "bg-[var(--card-bg)]/95 backdrop-blur-xl border-b border-[var(--border-color)]/50 shadow-2xl shadow-[var(--primary-color)]/10"
                    : "lg:bg-transparent bg-[var(--card-bg)]/95 lg:backdrop-blur-none backdrop-blur-xl lg:border-none border-b border-[var(--border-color)]/50 lg:shadow-none shadow-lg shadow-[var(--primary-color)]/5"
            }`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="flex items-center justify-between py-3 sm:py-4">
                    {/* Logo */}
                    <div
                        className="flex items-center space-x-3 cursor-pointer"
                        onClick={() => router.push("/")}>
                        <Image
                            src="https://scontent.fspd3-1.fna.fbcdn.net/v/t39.30808-1/539413084_1422805289466310_3951675277851392110_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=109&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeGdGbI2KR8SER_SBAbJwo8JhwfUH9jS4ayHB9Qf2NLhrDE4fHphdsMPmjswEMRRCws2zxlP3sZYzQ3oVHZ2u1qY&_nc_ohc=QM1f8eMkXX8Q7kNvwGriCuR&_nc_oc=AdkUGmBxiSqa02hYedUEcplx6qX5s32lZpjszYXysSfuz84q6MXJuGM-qsIeURTrpr4&_nc_zt=24&_nc_ht=scontent.fspd3-1.fna&_nc_gid=kcBLOHBNUFfZC9jQ5TgAaw&oh=00_AfZwYIdl8elePo-LudUEEMRjnvBMpF6-xIMWAM0fvU7H6g&oe=68C5BD84"
                            alt="Logo"
                            width={40}
                            height={40}
                            className="rounded-full"
                        />
                        <div className="hidden sm:block">
                            <h1 className="text-lg sm:text-xl font-bold">
                                <span className="bg-gradient-to-r from-[var(--primary-color)] via-[var(--secondary-color)] to-[var(--accent-color)] bg-clip-text text-transparent">
                                    Ripas Sorker Rifat
                                </span>
                            </h1>
                            <p className="text-xs text-[var(--text-secondary)]">
                                Full Stack Developer
                            </p>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <ul className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    onClick={() => scrollToSection(link.href)}
                                    className="group text-[var(--text-secondary)] hover:text-[var(--primary-color)] font-medium transition-all duration-300 relative">
                                    <span>{link.name}</span>
                                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] group-hover:w-full transition-all duration-300"></div>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* CTA Button */}
                    <div className="hidden lg:block">
                        <Link
                            href="#contact"
                            onClick={() => scrollToSection("#contact")}
                            className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] hover:from-[var(--primary-color)]/80 hover:to-[var(--secondary-color)]/80 text-white font-semibold px-4 lg:px-6 py-2 text-sm lg:text-base rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[var(--primary-color)]/25">
                            Hire Me
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden w-10 h-10 bg-[var(--card-bg)]/50 backdrop-blur-sm rounded-full flex items-center justify-center text-[var(--text-primary)] hover:bg-[var(--primary-color)]/20 transition-all duration-300">
                        {isMenuOpen ? (
                            <FaTimes size={18} />
                        ) : (
                            <FaBars size={18} />
                        )}
                    </button>
                </nav>

                {/* Mobile Menu Overlay */}
                <div
                    className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ${
                        isMenuOpen ? "visible" : "invisible"
                    }`}>
                    {/* Backdrop */}
                    <div
                        className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
                            isMenuOpen ? "opacity-100" : "opacity-0"
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                    />

                    {/* Slide Menu */}
                    <div
                        className={`z-50  absolute left-0 top-0 h-screen w-80 max-w-[85vw] transform transition-transform duration-300 ${
                            isMenuOpen ? "translate-x-0" : "-translate-x-full"
                        }`}>
                        {/* Menu Background - Blurry */}
                        <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-xl border-r border-slate-700/50 shadow-2xl"></div>

                        {/* Menu Content */}
                        <div className="relative z-[50] h-full flex flex-col bg-slate-900/10 backdrop-blur-2xl">
                            {/* Menu Header with Logo */}
                            <div className="p-6 border-b border-slate-700/50">
                                <div className="flex items-center space-x-3">
                                    <Image
                                        src="https://scontent.fspd3-1.fna.fbcdn.net/v/t39.30808-1/539413084_1422805289466310_3951675277851392110_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=109&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeGdGbI2KR8SER_SBAbJwo8JhwfUH9jS4ayHB9Qf2NLhrDE4fHphdsMPmjswEMRRCws2zxlP3sZYzQ3oVHZ2u1qY&_nc_ohc=QM1f8eMkXX8Q7kNvwGriCuR&_nc_oc=AdkUGmBxiSqa02hYedUEcplx6qX5s32lZpjszYXysSfuz84q6MXJuGM-qsIeURTrpr4&_nc_zt=24&_nc_ht=scontent.fspd3-1.fna&_nc_gid=kcBLOHBNUFfZC9jQ5TgAaw&oh=00_AfZwYIdl8elePo-LudUEEMRjnvBMpF6-xIMWAM0fvU7H6g&oe=68C5BD84"
                                        alt="Logo"
                                        width={48}
                                        height={48}
                                        className="rounded-full border-2 border-cyan-400/30"
                                    />
                                    <div>
                                        <h1 className="text-lg font-bold">
                                            <span className="bg-gradient-to-r from-[var(--primary-color)] via-[var(--secondary-color)] to-[var(--accent-color)] bg-clip-text text-transparent">
                                                Ripas Sorker Rifat
                                            </span>
                                        </h1>
                                        <p className="text-xs text-slate-300">
                                            Full Stack Developer
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Navigation Links */}
                            <div className="flex-1 p-4">
                                <nav>
                                    <ul className="space-y-2">
                                        {navLinks.map((link) => (
                                            <li key={link.name}>
                                                <Link
                                                    href={link.href}
                                                    onClick={() => {
                                                        scrollToSection(
                                                            link.href
                                                        );
                                                        setIsMenuOpen(false);
                                                    }}
                                                    className="flex items-center w-full text-slate-300 hover:text-cyan-400 font-medium transition-all duration-300 p-4 rounded-xl hover:bg-cyan-400/10 group">
                                                    <span className="text-lg">
                                                        {link.name}
                                                    </span>
                                                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                        <svg
                                                            className="w-4 h-4"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24">
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M9 5l7 7-7 7"
                                                            />
                                                        </svg>
                                                    </div>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>

                            {/* Hire Me Button - Fixed at Bottom */}
                            <div className="p-6 border-t border-slate-700/50">
                                <Link
                                    href="#contact"
                                    onClick={() => {
                                        scrollToSection("#contact");
                                        setIsMenuOpen(false);
                                    }}
                                    className="w-full bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] hover:from-[var(--primary-color)]/80 hover:to-[var(--secondary-color)]/80 text-white font-semibold py-4 rounded-xl transition-all duration-300 text-center block shadow-lg hover:shadow-[var(--primary-color)]/25">
                                    Hire Me
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
