'use client';

import React from 'react';
import { FaBars, FaTimes, FaBell, FaUser, FaSearch } from 'react-icons/fa';
import Image from 'next/image';

interface DashboardHeaderProps {
    onMenuClick: () => void;
    sidebarOpen: boolean;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ onMenuClick, sidebarOpen }) => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--card-bg)]/95 backdrop-blur-xl border-b border-[var(--border-color)]/50 shadow-lg">
            <div className="flex items-center justify-between px-4 sm:px-6 h-16">
                {/* Left Section */}
                <div className="flex items-center space-x-4">
                    {/* Mobile Menu Button */}
                    <button
                        onClick={onMenuClick}
                        className="lg:hidden w-10 h-10 bg-[var(--card-bg)]/50 backdrop-blur-sm rounded-xl flex items-center justify-center text-[var(--text-primary)] hover:bg-[var(--primary-color)]/20 transition-all duration-300"
                    >
                        {sidebarOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
                    </button>

                    {/* Logo & Title */}
                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">RS</span>
                        </div>
                        <div className="hidden sm:block">
                            <h1 className="text-lg font-bold text-[var(--text-primary)]">
                                Dashboard
                            </h1>
                        </div>
                    </div>
                </div>

                {/* Center Section - Search */}
                <div className="hidden md:flex flex-1 max-w-md mx-8">
                    <div className="relative w-full">
                        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--text-secondary)] text-sm" />
                        <input
                            type="text"
                            placeholder="Search projects, tasks..."
                            className="w-full pl-10 pr-4 py-2 bg-[var(--primary-bg)]/50 border border-[var(--border-color)]/30 rounded-xl text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]/30 focus:border-[var(--primary-color)] transition-all duration-300"
                        />
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex items-center space-x-3">
                    {/* Notifications */}
                    <button className="relative w-10 h-10 bg-[var(--card-bg)]/50 backdrop-blur-sm rounded-xl flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--primary-color)] hover:bg-[var(--primary-color)]/20 transition-all duration-300">
                        <FaBell size={16} />
                        <span className="absolute -top-1 -right-1 w-3 h-3 bg-[var(--secondary-color)] rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">3</span>
                        </span>
                    </button>

                    {/* Profile */}
                    <div className="flex items-center space-x-3">
                        <div className="hidden sm:block text-right">
                            <p className="text-sm font-semibold text-[var(--text-primary)]">Ripas Sorker</p>
                            <p className="text-xs text-[var(--text-secondary)]">Developer</p>
                        </div>
                        <button className="w-10 h-10 rounded-xl overflow-hidden border-2 border-[var(--border-color)]/30 hover:border-[var(--primary-color)]/60 transition-all duration-300">
                            <Image
                                src="https://scontent.fspd3-1.fna.fbcdn.net/v/t39.30808-1/539413084_1422805289466310_3951675277851392110_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=109&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeGdGbI2KR8SER_SBAbJwo8JhwfUH9jS4ayHB9Qf2NLhrDE4fHphdsMPmjswEMRRCws2zxlP3sZYzQ3oVHZ2u1qY&_nc_ohc=QM1f8eMkXX8Q7kNvwGriCuR&_nc_oc=AdkUGmBxiSqa02hYedUEcplx6qX5s32lZpjszYXysSfuz84q6MXJuGM-qsIeURTrpr4&_nc_zt=24&_nc_ht=scontent.fspd3-1.fna&_nc_gid=kcBLOHBNUFfZC9jQ5TgAaw&oh=00_AfZwYIdl8elePo-LudUEEMRjnvBMpF6-xIMWAM0fvU7H6g&oe=68C5BD84"
                                alt="Profile"
                                width={40}
                                height={40}
                                className="w-full h-full object-cover"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default DashboardHeader;
