"use client";

import React, {forwardRef} from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {FaCalendarAlt} from "react-icons/fa";

interface DatePickerProps {
    selected?: Date | null;
    onChange: (date: Date | null) => void;
    placeholder?: string;
    minDate?: Date;
    maxDate?: Date;
    disabled?: boolean;
    className?: string;
    error?: string;
    label?: string;
    required?: boolean;
}

interface CustomInputProps {
    value?: string;
    onClick?: () => void;
    placeholder?: string;
    className?: string;
    disabled?: boolean;
}

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
    ({value, onClick, placeholder, className, disabled}, ref) => (
        <div className="relative">
            <input
                ref={ref}
                value={value}
                onClick={onClick}
                placeholder={placeholder}
                readOnly
                disabled={disabled}
                className={`w-full px-4 py-3 bg-[var(--primary-bg)]/50 border border-[var(--border-color)]/30 rounded-xl text-[var(--text-primary)] placeholder-[var(--text-secondary)]/50 focus:outline-none focus:border-[var(--primary-color)]/50 transition-colors duration-300 ${
                    disabled ? "opacity-50 cursor-not-allowed" : ""
                } ${className || ""}`}
            />
            <FaCalendarAlt
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[var(--text-secondary)] pointer-events-none"
                size={16}
            />
        </div>
    )
);

CustomInput.displayName = "CustomInput";

const DatePicker: React.FC<DatePickerProps> = ({
    selected,
    onChange,
    placeholder = "Select date",
    minDate,
    maxDate,
    disabled = false,

    error,
    label,
    required = false,
}) => {
    return (
        <div className="space-y-2">
            {label && (
                <label className="block text-sm font-medium text-[var(--text-primary)]">
                    {label}{" "}
                    {required && <span className="text-red-400">*</span>}
                </label>
            )}

            <ReactDatePicker
                selected={selected}
                onChange={onChange}
                customInput={<CustomInput />}
                dateFormat="MMM dd, yyyy"
                placeholderText={placeholder}
                minDate={minDate}
                maxDate={maxDate}
                disabled={disabled}
                showPopperArrow={false}
                popperClassName="date-picker-popper"
                calendarClassName="date-picker-calendar"
                dayClassName={(date) =>
                    date.getDay() === 0 || date.getDay() === 6
                        ? "date-picker-weekend"
                        : "date-picker-weekday"
                }
                todayButton="Today"
                showYearDropdown
                showMonthDropdown
                dropdownMode="select"
                yearDropdownItemNumber={15}
                scrollableYearDropdown
            />

            {error && <p className="text-red-400 text-sm">{error}</p>}
        </div>
    );
};

export default DatePicker;
