"use client";

import React, {useState, useCallback} from "react";
import {FaPlus, FaTimes} from "react-icons/fa";

interface MultiImageUploadProps {
    value: (string | File)[];
    onChange: (files: (string | File)[]) => void;
    maxFiles?: number;
    maxSize?: number; // in MB
    className?: string;
}

export const MultiImageUpload: React.FC<MultiImageUploadProps> = ({
    value = [],
    onChange,
    maxFiles = 999,
    maxSize = 10,
    className = "",
}) => {
    const [dragOver, setDragOver] = useState(false);
    const [error, setError] = useState<string>("");

    const handleFiles = useCallback(
        (files: FileList) => {
            setError("");
            const newFiles: (string | File)[] = [];

            Array.from(files).forEach((file) => {
                // Validate file type
                if (!file.type.startsWith("image/")) {
                    setError("Please select only image files");
                    return;
                }

                // Validate file size
                if (file.size > maxSize * 1024 * 1024) {
                    setError(`File size must be less than ${maxSize}MB`);
                    return;
                }

                newFiles.push(file);
            });

            if (newFiles.length > 0) {
                const updatedFiles = [...value, ...newFiles].slice(0, maxFiles);
                onChange(updatedFiles);
            }
        },
        [value, onChange, maxFiles, maxSize]
    );

    const handleDrop = useCallback(
        (e: React.DragEvent) => {
            e.preventDefault();
            setDragOver(false);
            handleFiles(e.dataTransfer.files);
        },
        [handleFiles]
    );

    const handleFileSelect = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            if (e.target.files) {
                handleFiles(e.target.files);
            }
        },
        [handleFiles]
    );

    const removeFile = useCallback(
        (index: number) => {
            const file = value[index];
            if (file instanceof File) {
                // Revoke object URL if it was created
                const url = URL.createObjectURL(file);
                URL.revokeObjectURL(url);
            }
            const updatedFiles = value.filter((_, i) => i !== index);
            onChange(updatedFiles);
        },
        [value, onChange]
    );

    const getPreviewUrl = (file: string | File): string => {
        if (typeof file === "string") {
            return file;
        }
        return URL.createObjectURL(file);
    };

    return (
        <div className={className}>
            {/* Upload Area */}
            {value.length < maxFiles && (
                <div
                    onDrop={handleDrop}
                    onDragOver={(e) => {
                        e.preventDefault();
                        setDragOver(true);
                    }}
                    onDragLeave={() => setDragOver(false)}
                    className={`
            relative border-2 border-dashed rounded-xl p-6 cursor-pointer transition-all duration-200 mb-4
            ${
                dragOver
                    ? "border-[var(--primary-color)] bg-[var(--primary-color)]/5"
                    : "border-[var(--border-color)]/50 hover:border-[var(--border-color)]"
            }
          `}>
                    <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleFileSelect}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="text-center">
                        <div className="w-12 h-12 bg-[var(--primary-color)]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                            <FaPlus
                                className="text-[var(--primary-color)]"
                                size={20}
                            />
                        </div>
                        <p className="text-[var(--text-primary)] font-medium mb-1">
                            Add Gallery Images
                        </p>
                        <p className="text-[var(--text-secondary)] text-sm">
                            Click to browse or drag and drop multiple images
                        </p>
                        <p className="text-[var(--text-secondary)] text-xs mt-1">
                            PNG, JPG, GIF up to {maxSize}MB each •{" "}
                            {value.length} {value.length === 1 ? 'image' : 'images'}
                        </p>
                    </div>
                </div>
            )}

            {/* Gallery Preview */}
            {value.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {value.map((file, index) => (
                        <div key={index} className="relative group">
                            <img
                                src={getPreviewUrl(file)}
                                alt={`Gallery ${index + 1}`}
                                className="w-full h-32 object-cover rounded-lg border border-[var(--border-color)]/30"
                            />
                            <button
                                type="button"
                                onClick={() => removeFile(index)}
                                className="absolute top-1 right-1 w-6 h-6 bg-red-500/20 hover:bg-red-500/30 backdrop-blur-sm rounded-full flex items-center justify-center text-red-400 hover:text-red-300 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <FaTimes size={10} />
                            </button>
                            <div className="absolute bottom-1 left-1 bg-black/50 backdrop-blur-sm rounded px-2 py-1">
                                <span className="text-white text-xs">
                                    {file instanceof File
                                        ? "Ready"
                                        : "Uploaded"}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
        </div>
    );
};

export default MultiImageUpload;
