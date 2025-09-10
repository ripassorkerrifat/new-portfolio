import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

export default function Input({className = "", ...props}: InputProps) {
    return (
        <input
            className={`px-4 py-2 rounded-md border border-gray-300 bg-white/80 text-black focus:outline-none focus:ring-2 focus:ring-[var(--button-color)] transition-all duration-200 ${className}`}
            {...props}
        />
    );
}
