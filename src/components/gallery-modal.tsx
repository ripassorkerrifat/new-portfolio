'use client';

interface GalleryModalProps {
  images: string[];
  isOpen: boolean;
  onClose: () => void;
}

const GalleryModal: React.FC<GalleryModalProps> = ({
  images,
  isOpen,
  onClose
}) => {
  if (!isOpen || images.length === 0) return null;

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="glass rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-[var(--border-color)]/50 backdrop-blur-xl bg-gradient-to-br from-[var(--primary-bg)]/95 to-[var(--secondary-bg)]/95" onClick={(e) => e.stopPropagation()}>
        {/* Gallery Header */}
        <div className="relative p-6 border-b border-[var(--border-color)]/30">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 glass rounded-full flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--primary-color)]/20 transition-all duration-300"
          >
            ✕
          </button>
          <h2 className="text-2xl font-bold text-[var(--text-primary)] text-center">🖼️ Project Gallery</h2>
        </div>

        {/* Gallery Grid */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {images.map((image, index) => (
              <div key={index} className="group relative rounded-2xl overflow-hidden border border-[var(--border-color)]/30 hover:border-[var(--secondary-color)]/60 transition-all duration-300 hover:scale-[1.02]">
                <img 
                  src={image} 
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Image {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;
