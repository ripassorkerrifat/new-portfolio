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
        {name: "About", href: "#about"},
        {name: "Contact", href: "#contact"},
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
                    : "bg-transparent"
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
                            <h1 className="text-lg sm:text-xl font-bold text-[var(--text-primary)]">
                                Ripas{" "}
                                <span className="text-[var(--primary-color)]">
                                    Sorker
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

                {/* Mobile Navigation */}
                <div
                    className={`lg:hidden transition-all duration-300 overflow-hidden ${
                        isMenuOpen
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0"
                    }`}>
                    <div className="bg-[var(--card-bg)]/95 backdrop-blur-md rounded-2xl mt-4 p-4 sm:p-6 border border-[var(--border-color)]/50">
                        <ul className="space-y-4">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        onClick={() =>
                                            scrollToSection(link.href)
                                        }
                                        className="w-full text-[var(--text-secondary)] hover:text-[var(--primary-color)] font-medium transition-all duration-300 p-3 rounded-lg hover:bg-[var(--card-bg)]/50 block">
                                        <span>{link.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-6 pt-4 border-t border-[var(--border-color)]/50">
                            <Link
                                href="#contact"
                                onClick={() => scrollToSection("#contact")}
                                className="w-full bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] hover:from-[var(--primary-color)]/80 hover:to-[var(--secondary-color)]/80 text-white font-semibold py-3 rounded-full transition-all duration-300 text-center block">
                                Hire Me
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
