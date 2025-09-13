'use client';

import React, { useState, useCallback } from 'react';
import { FaUpload, FaTimes, FaImage } from 'react-icons/fa';

interface PreviewImageUploadProps {
  value?: string | File;
  onChange: (file: File | null) => void;
  onRemove?: () => void;
  placeholder?: string;
  maxSize?: number; // in MB
  className?: string;
}

export const PreviewImageUpload: React.FC<PreviewImageUploadProps> = ({
  value,
  onChange,
  onRemove,
  placeholder = "Upload image",
  maxSize = 10,
  className = ""
}) => {
  const [dragOver, setDragOver] = useState(false);
  const [error, setError] = useState<string>("");
  const [previewUrl, setPreviewUrl] = useState<string>("");

  const handleFile = useCallback((file: File) => {
    setError("");

    // Validate file type
    if (!file.type.startsWith('image/')) {
      setError('Please select an image file');
      return;
    }

    // Validate file size
    if (file.size > maxSize * 1024 * 1024) {
      setError(`File size must be less than ${maxSize}MB`);
      return;
    }

    // Create preview URL
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    
    onChange(file);
  }, [onChange, maxSize]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFile(files[0]);
    }
  }, [handleFile]);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 0) {
      handleFile(files[0]);
    }
  }, [handleFile]);

  const handleRemove = useCallback(() => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setPreviewUrl("");
    setError("");
    onChange(null);
    if (onRemove) {
      onRemove();
    }
  }, [previewUrl, onChange, onRemove]);

  const displayUrl = previewUrl || (typeof value === 'string' ? value : '');

  return (
    <div className={className}>
      <div
        onDrop={handleDrop}
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        className={`
          relative border-2 border-dashed rounded-xl p-6 cursor-pointer transition-all duration-200
          ${dragOver 
            ? 'border-[var(--primary-color)] bg-[var(--primary-color)]/5' 
            : 'border-[var(--border-color)]/50 hover:border-[var(--border-color)]'
          }
        `}
      >
        {displayUrl ? (
          <div className="relative">
            <img
              src={displayUrl}
              alt="Preview"
              className="w-full h-48 object-cover rounded-lg"
            />
            <button
              type="button"
              onClick={handleRemove}
              className="absolute top-2 right-2 w-8 h-8 bg-red-500/20 hover:bg-red-500/30 backdrop-blur-sm rounded-full flex items-center justify-center text-red-400 hover:text-red-300 transition-all duration-200"
            >
              <FaTimes size={12} />
            </button>
            <div className="absolute bottom-2 left-2 bg-black/50 backdrop-blur-sm rounded-lg px-2 py-1">
              <span className="text-white text-xs">
                {value instanceof File ? 'Ready to upload' : 'Uploaded'}
              </span>
            </div>
          </div>
        ) : (
          <>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <div className="text-center">
              <div className="w-12 h-12 bg-[var(--primary-color)]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <FaImage className="text-[var(--primary-color)]" size={20} />
              </div>
              <p className="text-[var(--text-primary)] font-medium mb-1">{placeholder}</p>
              <p className="text-[var(--text-secondary)] text-sm">Click to browse or drag and drop</p>
              <p className="text-[var(--text-secondary)] text-xs mt-1">PNG, JPG, GIF up to {maxSize}MB</p>
            </div>
          </>
        )}
      </div>

      {error && (
        <p className="mt-2 text-sm text-red-400">{error}</p>
      )}
    </div>
  );
};

export default PreviewImageUpload;
