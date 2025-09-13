'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
    FaTachometerAlt, 
    FaProjectDiagram, 
    FaPlus, 
    FaFileAlt, 
    FaTimes,
    FaChevronRight
} from 'react-icons/fa';

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
    const pathname = usePathname();

    const menuItems = [
        {
            name: 'Dashboard',
            href: '/dashboard',
            icon: FaTachometerAlt,
            color: 'from-blue-500 to-cyan-500'
        },
        {
            name: 'Projects',
            href: '/dashboard/projects',
            icon: FaProjectDiagram,
            color: 'from-green-500 to-emerald-500'
        },
        {
            name: 'Add Project',
            href: '/dashboard/projects/add',
            icon: FaPlus,
            color: 'from-purple-500 to-pink-500'
        },
        {
            name: 'Pages',
            href: '/dashboard/pages',
            icon: FaFileAlt,
            color: 'from-orange-500 to-red-500'
        }
    ];

    const isActive = (href: string) => {
        if (!pathname) return false;
        if (href === '/dashboard') {
            return pathname === '/dashboard';
        }
        return pathname.startsWith(href);
    };

    return (
        <>
            {/* Sidebar */}
            <aside className={`fixed left-0 top-16 h-[calc(100vh-4rem)] w-72 bg-gradient-to-b from-[var(--card-bg)]/98 via-[var(--card-bg)]/95 to-[var(--primary-bg)]/98 backdrop-blur-2xl border-r border-[var(--border-color)]/30 shadow-2xl transform transition-all duration-500 ease-out z-50 ${
                isOpen ? 'translate-x-0' : '-translate-x-full'
            } lg:translate-x-0`}>
                
                {/* Brand Section */}
                <div className="px-6 py-6 border-b border-[var(--border-color)]/20">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] rounded-2xl flex items-center justify-center shadow-lg">
                            <span className="text-white font-bold text-lg">🚀</span>
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-[var(--text-primary)]">Dashboard</h2>
                            <p className="text-xs text-[var(--text-secondary)]">Project Manager</p>
                        </div>
                        {/* Mobile Close Button */}
                        <button
                            onClick={onClose}
                            className="lg:hidden ml-auto w-8 h-8 bg-[var(--primary-bg)]/50 rounded-xl flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--primary-color)] hover:bg-[var(--primary-color)]/10 transition-all duration-300"
                        >
                            <FaTimes size={14} />
                        </button>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="px-4 py-6 flex-1 overflow-y-auto">
                    <div className="space-y-3">
                        {menuItems.map((item, index) => {
                            const IconComponent = item.icon;
                            const active = isActive(item.href);
                            
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => onClose()}
                                    className={`group relative flex items-center space-x-4 px-5 py-4 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] ${
                                        active
                                            ? 'bg-gradient-to-r from-[var(--primary-color)]/15 via-[var(--primary-color)]/10 to-[var(--secondary-color)]/15 text-[var(--primary-color)] border border-[var(--primary-color)]/20 shadow-lg shadow-[var(--primary-color)]/10'
                                            : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-gradient-to-r hover:from-[var(--primary-bg)]/60 hover:to-[var(--card-bg)]/60 hover:border hover:border-[var(--border-color)]/30'
                                    }`}
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    {/* Active indicator */}
                                    {active && (
                                        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1.5 h-10 bg-gradient-to-b from-[var(--primary-color)] via-[var(--secondary-color)] to-[var(--primary-color)] rounded-r-full shadow-lg" />
                                    )}
                                    
                                    {/* Icon Container */}
                                    <div className={`relative w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                                        active 
                                            ? `bg-gradient-to-br ${item.color} text-white shadow-xl shadow-${item.color.split('-')[1]}-500/30 transform scale-110`
                                            : 'bg-[var(--primary-bg)]/40 group-hover:bg-gradient-to-br group-hover:from-[var(--primary-color)]/20 group-hover:to-[var(--secondary-color)]/20 group-hover:shadow-lg'
                                    }`}>
                                        <IconComponent size={18} className={`transition-transform duration-300 ${active ? 'scale-110' : 'group-hover:scale-110'}`} />
                                        
                                        {/* Glow effect for active state */}
                                        {active && (
                                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color} opacity-20 blur-xl`} />
                                        )}
                                    </div>
                                    
                                    {/* Label */}
                                    <div className="flex-1">
                                        <span className={`font-semibold text-sm transition-all duration-300 ${
                                            active ? 'text-[var(--primary-color)]' : 'group-hover:text-[var(--text-primary)]'
                                        }`}>
                                            {item.name}
                                        </span>
                                        {active && (
                                            <div className="text-xs text-[var(--primary-color)]/70 mt-0.5">Active</div>
                                        )}
                                    </div>
                                    
                                    {/* Arrow for active state */}
                                    <div className={`transition-all duration-300 ${
                                        active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 group-hover:opacity-60 group-hover:translate-x-0'
                                    }`}>
                                        <FaChevronRight className="text-sm" />
                                    </div>
                                    
                                    {/* Animated background */}
                                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-5 transition-all duration-500`} />
                                </Link>
                            );
                        })}
                    </div>
                </nav>

                {/* Bottom Section */}
                <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-[var(--border-color)]/20">
                    <div className="bg-gradient-to-br from-[var(--primary-color)]/15 via-[var(--secondary-color)]/10 to-[var(--primary-color)]/15 rounded-2xl p-5 border border-[var(--border-color)]/20 shadow-lg backdrop-blur-sm">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] rounded-2xl flex items-center justify-center shadow-xl">
                                <span className="text-white font-bold text-lg">💡</span>
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-bold text-[var(--text-primary)] mb-1">Need Help?</p>
                                <p className="text-xs text-[var(--text-secondary)]/80 leading-relaxed">Documentation & Support</p>
                            </div>
                            <FaChevronRight className="text-[var(--text-secondary)] text-xs opacity-60" />
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
