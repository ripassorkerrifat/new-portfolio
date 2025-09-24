/* eslint-disable @next/next/no-img-element */
"use client";

import React, {useState, useEffect, useCallback} from "react";
import {
    FaChevronLeft,
    FaChevronRight,
    FaTimes,
    FaExpand,
    FaCompress,
} from "react-icons/fa";
import {useSwipeGesture} from "@/hooks/useSwipeGesture";

interface GalleryModalProps {
    images: string[];
    isOpen: boolean;
    onClose: () => void;
}

const GalleryModal: React.FC<GalleryModalProps> = ({
    images,
    isOpen,
    onClose,
}) => {
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
        null
    );
    const [isFullscreen, setIsFullscreen] = useState(false);

    // Handle keyboard navigation
    const handleKeyPress = useCallback(
        (event: KeyboardEvent) => {
            if (!isOpen) return;

            switch (event.key) {
                case "Escape":
                    if (isFullscreen) {
                        setIsFullscreen(false);
                    } else if (selectedImageIndex !== null) {
                        setSelectedImageIndex(null);
                    } else {
                        onClose();
                    }
                    break;
                case "ArrowLeft":
                    if (selectedImageIndex !== null && selectedImageIndex > 0) {
                        setSelectedImageIndex(selectedImageIndex - 1);
                    }
                    break;
                case "ArrowRight":
                    if (
                        selectedImageIndex !== null &&
                        selectedImageIndex < images.length - 1
                    ) {
                        setSelectedImageIndex(selectedImageIndex + 1);
                    }
                    break;
            }
        },
        [isOpen, selectedImageIndex, images.length, onClose, isFullscreen]
    );

    useEffect(() => {
        document.addEventListener("keydown", handleKeyPress);
        return () => document.removeEventListener("keydown", handleKeyPress);
    }, [handleKeyPress]);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const openImageViewer = (index: number) => {
        setSelectedImageIndex(index);
    };

    const closeImageViewer = () => {
        setSelectedImageIndex(null);
        setIsFullscreen(false);
    };

    const goToPrevious = () => {
        if (selectedImageIndex !== null && selectedImageIndex > 0) {
            setSelectedImageIndex(selectedImageIndex - 1);
        }
    };

    const goToNext = () => {
        if (
            selectedImageIndex !== null &&
            selectedImageIndex < images.length - 1
        ) {
            setSelectedImageIndex(selectedImageIndex + 1);
        }
    };

    const toggleFullscreen = () => {
        setIsFullscreen(!isFullscreen);
    };

    // Swipe gesture support for mobile
    const swipeRef = useSwipeGesture({
        onSwipeLeft: goToNext,
        onSwipeRight: goToPrevious,
        onSwipeUp: () => setIsFullscreen(true),
        onSwipeDown: closeImageViewer,
        threshold: 50,
    });

    if (!isOpen || images.length === 0) return null;

    return (
        <div ref={swipeRef}>
            {/* Gallery Grid Modal */}
            {selectedImageIndex === null && (
                <div
                    className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    onClick={onClose}>
                    <div
                        className="glass rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-[var(--border-color)]/50 backdrop-blur-xl bg-gradient-to-br from-[var(--primary-bg)]/95 to-[var(--secondary-bg)]/95"
                        onClick={(e) => e.stopPropagation()}>
                        {/* Gallery Header */}
                        <div className="relative p-6 border-b border-[var(--border-color)]/30">
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 w-10 h-10 glass rounded-full flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--primary-color)]/20 transition-all duration-300">
                                <FaTimes />
                            </button>
                            <h2 className="text-2xl font-bold text-[var(--text-primary)] text-center">
                                🖼️ Project Gallery
                            </h2>
                            <p className="text-center text-[var(--text-secondary)] mt-2">
                                Click on any image to view in full screen
                            </p>
                        </div>

                        {/* Gallery Grid */}
                        <div className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {images.map((image, index) => (
                                    <div
                                        key={index}
                                        className="group relative  rounded-2xl overflow-hidden border border-[var(--border-color)]/30 hover:border-[var(--secondary-color)]/60 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                                        onClick={() => openImageViewer(index)}>
                                        <img
                                            src={image}
                                            alt={`Gallery image ${index + 1}`}
                                            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <div className="absolute bottom-4 left-4 text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            Image {index + 1}
                                        </div>
                                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                                <FaExpand className="text-white text-xs" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Full Screen Image Viewer */}
            {selectedImageIndex !== null && (
                <div
                    className={`fixed inset-0 bg-black z-[60] flex items-center justify-center ${
                        isFullscreen ? "p-0" : "p-4"
                    }`}>
                    {/* Navigation Controls */}
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={closeImageViewer}
                                className="w-12 h-12 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300">
                                <FaTimes />
                            </button>
                            <div className="bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 text-white font-medium">
                                {selectedImageIndex + 1} / {images.length}
                            </div>
                        </div>
                        <button
                            onClick={toggleFullscreen}
                            className="w-12 h-12 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300">
                            {isFullscreen ? <FaCompress /> : <FaExpand />}
                        </button>
                    </div>

                    {/* Previous Button */}
                    {selectedImageIndex > 0 && (
                        <button
                            onClick={goToPrevious}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 z-10">
                            <FaChevronLeft />
                        </button>
                    )}

                    {/* Next Button */}
                    {selectedImageIndex < images.length - 1 && (
                        <button
                            onClick={goToNext}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 z-10">
                            <FaChevronRight />
                        </button>
                    )}

                    {/* Main Image */}
                    <div
                        className={`relative ${
                            isFullscreen
                                ? "w-full h-full"
                                : "max-w-[90vw] max-h-[90vh]"
                        } flex items-center justify-center`}>
                        <img
                            src={images[selectedImageIndex]}
                            alt={`Gallery image ${selectedImageIndex + 1}`}
                            className={`${
                                isFullscreen
                                    ? "w-full h-full object-contain"
                                    : "max-w-full max-h-full object-contain"
                            } transition-all duration-300`}
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>

                    {/* Image Info */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm rounded-full px-6 py-3 text-white text-center">
                        <p className="font-medium">
                            Gallery Image {selectedImageIndex + 1}
                        </p>
                        <p className="text-sm opacity-75">
                            Use arrow keys to navigate • ESC to close • Swipe on
                            mobile
                        </p>
                    </div>

                    {/* Thumbnail Strip */}
                    {!isFullscreen && images.length > 1 && (
                        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-black/50 backdrop-blur-sm rounded-full p-2 max-w-[90vw] overflow-x-auto scrollbar-hide">
                            {images.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImageIndex(index)}
                                    className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 flex-shrink-0 ${
                                        index === selectedImageIndex
                                            ? "border-white scale-110"
                                            : "border-transparent hover:border-white/50"
                                    }`}>
                                    <img
                                        src={image}
                                        alt={`Thumbnail ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default GalleryModal;
