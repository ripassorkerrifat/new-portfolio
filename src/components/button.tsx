import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
}

export default function Button({
    children,
    className = "",
    ...props
}: ButtonProps) {
    return (
        <button
            className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[var(--button-color)] bg-[var(--button-color)] text-white shadow-md ${className}`}
            {...props}>
            {children}
        </button>
    );
}
