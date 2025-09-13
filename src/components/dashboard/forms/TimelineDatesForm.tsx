'use client';

import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { ProjectFormData } from '@/lib/validations/project';
import { FaCalendarAlt, FaClock, FaCode } from 'react-icons/fa';

interface TimelineDatesFormProps {
    form: UseFormReturn<ProjectFormData>;
}

const TimelineDatesForm: React.FC<TimelineDatesFormProps> = ({ form }) => {
    const { register, formState: { errors }, watch } = form;

    // Get today's date for minimum date validation
    const today = new Date().toISOString().split('T')[0];

    return (
        <div className="bg-[var(--card-bg)]/50 backdrop-blur-xl rounded-2xl p-6 border border-[var(--border-color)]/30">
            <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                    <FaCalendarAlt className="text-white" size={16} />
                </div>
                <div>
                    <h2 className="text-xl font-bold text-[var(--text-primary)]">Timeline</h2>
                    <p className="text-sm text-[var(--text-secondary)]">Project start and end dates</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Start Date */}
                <div>
                    <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                        Start Date *
                    </label>
                    <input
                        {...register('startDate')}
                        type="date"
                        className="w-full px-4 py-3 bg-[var(--primary-bg)]/50 border border-[var(--border-color)]/30 rounded-xl text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary-color)]/50 transition-colors duration-300"
                    />
                    {errors.startDate && (
                        <p className="text-red-400 text-sm mt-1">{errors.startDate.message}</p>
                    )}
                </div>

                {/* End Date */}
                <div>
                    <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                        End Date
                        <span className="text-[var(--text-secondary)] text-xs ml-2">(Optional - leave empty if under development)</span>
                    </label>
                    <input
                        {...register('endDate')}
                        type="date"
                        min={watch('startDate') || today}
                        className="w-full px-4 py-3 bg-[var(--primary-bg)]/50 border border-[var(--border-color)]/30 rounded-xl text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary-color)]/50 transition-colors duration-300"
                    />
                    {errors.endDate && (
                        <p className="text-red-400 text-sm mt-1">{errors.endDate.message}</p>
                    )}
                </div>

                {/* Project Status Display */}
                <div className="lg:col-span-2">
                    <div className="bg-[var(--primary-bg)]/30 rounded-xl p-4 border border-[var(--border-color)]/20">
                        <div className="flex items-center space-x-3">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                                watch('endDate') 
                                    ? 'bg-gradient-to-br from-green-500 to-emerald-500'
                                    : 'bg-gradient-to-br from-orange-500 to-red-500'
                            }`}>
                                {watch('endDate') ? (
                                    <FaClock className="text-white" size={12} />
                                ) : (
                                    <FaCode className="text-white" size={12} />
                                )}
                            </div>
                            <div>
                                <p className="text-sm font-medium text-[var(--text-primary)]">
                                    Project Status
                                </p>
                                <p className="text-xs text-[var(--text-secondary)]">
                                    {watch('endDate') ? 'Completed Project' : 'Under Development'}
                                </p>
                            </div>
                        </div>
                        
                        {/* Duration Calculation */}
                        {watch('startDate') && watch('endDate') && (
                            <div className="mt-3 pt-3 border-t border-[var(--border-color)]/20">
                                <p className="text-xs text-[var(--text-secondary)]">
                                    Duration: {(() => {
                                        const start = new Date(watch('startDate'));
                                        const endDate = watch('endDate');
                                        const end = endDate ? new Date(endDate) : new Date();
                                        const diffTime = Math.abs(end.getTime() - start.getTime());
                                        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                                        const months = Math.floor(diffDays / 30);
                                        const days = diffDays % 30;
                                        
                                        if (months > 0) {
                                            return `${months} month${months > 1 ? 's' : ''} ${days > 0 ? `and ${days} day${days > 1 ? 's' : ''}` : ''}`;
                                        }
                                        return `${diffDays} day${diffDays > 1 ? 's' : ''}`;
                                    })()}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimelineDatesForm;
