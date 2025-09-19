import React, {useRef, useState} from "react";
import {useImageUpload} from "@/hooks/useImageUpload";
import {FaCloudUploadAlt, FaTimes} from "react-icons/fa";

interface ImageUploadProps {
    value?: string;
    onChange: (url: string) => void;
    onRemove?: () => void;
    placeholder?: string;
    className?: string;
    accept?: string;
    maxSize?: number; // in MB
}

export const ImageUpload: React.FC<ImageUploadProps> = ({
    value,
    onChange,
    onRemove,
    placeholder = "Click to upload image",
    className = "",
    accept = "image/*",
    maxSize = 5, // 5MB default
}) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const {uploading, uploadImage, error} = useImageUpload();
    const [dragOver, setDragOver] = useState(false);

    const handleFileSelect = async (file: File) => {
        // Validate file size
        if (file.size > maxSize * 1024 * 1024) {
            alert(`File size must be less than ${maxSize}MB`);
            return;
        }

        // Validate file type
        if (!file.type.startsWith("image/")) {
            alert("Please select an image file");
            return;
        }

        try {
            const result = await uploadImage(file);
            onChange(result.url);
        } catch (err) {
            console.error("Upload failed:", err);
        }
    };

    const handleClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            handleFileSelect(file);
        }
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setDragOver(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        setDragOver(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setDragOver(false);

        const file = e.dataTransfer.files?.[0];
        if (file) {
            handleFileSelect(file);
        }
    };

    const handleRemove = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (onRemove) {
            onRemove();
        } else {
            onChange("");
        }
    };

    return (
        <div className={`relative ${className}`}>
            <input
                ref={fileInputRef}
                type="file"
                accept={accept}
                onChange={handleFileChange}
                className="hidden"
            />

            <div
                onClick={handleClick}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`
          relative border-2 border-dashed rounded-lg p-6 cursor-pointer transition-all duration-200
          ${
              dragOver
                  ? "border-blue-400 bg-blue-50/50"
                  : "border-gray-300 hover:border-gray-400"
          }
          ${uploading ? "pointer-events-none opacity-50" : ""}
        `}>
                {value ? (
                    <div className="relative">
                        <img
                            src={value}
                            alt="Uploaded"
                            className="w-full h-48 object-cover rounded-lg"
                        />
                        <button
                            onClick={handleRemove}
                            className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors">
                            <FaTimes size={16} />
                        </button>
                    </div>
                ) : (
                    <div className="text-center">
                        {uploading ? (
                            <div className="flex flex-col items-center">
                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mb-2"></div>
                                <p className="text-sm text-gray-600">
                                    Uploading...
                                </p>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center">
                                <div className="p-3 bg-gray-100 rounded-full mb-3">
                                    <FaCloudUploadAlt className="h-6 w-6 text-gray-600" />
                                </div>
                                <p className="text-sm font-medium text-gray-900 mb-1">
                                    {placeholder}
                                </p>
                                <p className="text-xs text-gray-500">
                                    Drag and drop or click to browse
                                </p>
                                <p className="text-xs text-gray-400 mt-1">
                                    Max size: {maxSize}MB
                                </p>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </div>
    );
};
