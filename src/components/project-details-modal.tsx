'use client';

import { Project } from '../types/project';

interface ProjectDetailsModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onGalleryOpen: (gallery: string[]) => void;
}

const ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({
  project,
  isOpen,
  onClose,
  onGalleryOpen
}) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="glass rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-[var(--border-color)]/50 backdrop-blur-xl bg-gradient-to-br from-[var(--primary-bg)]/95 to-[var(--secondary-bg)]/95" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="relative p-8 border-b border-[var(--border-color)]/30">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 glass rounded-full flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--primary-color)]/20 transition-all duration-300"
          >
            ✕
          </button>
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-gradient-to-br from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 rounded-2xl flex items-center justify-center text-3xl border border-[var(--border-color)]/30">
              {project.image}
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-2">{project.title}</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="bg-gradient-to-r from-[var(--primary-color)]/10 to-[var(--secondary-color)]/10 text-[var(--text-primary)] px-3 py-1 rounded-full text-sm font-medium border border-[var(--border-color)]/30">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-8 space-y-8">
          {/* Project Image */}
          <div className="relative h-64 rounded-2xl overflow-hidden">
            <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>

          {/* Detailed Description */}
          <div>
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">📋 Project Overview</h3>
            <p className="text-[var(--text-secondary)] leading-relaxed text-lg">{project.detailedDescription}</p>
          </div>

          {/* Challenges */}
          <div>
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">🎯 Challenges & Solutions</h3>
            <p className="text-[var(--text-secondary)] leading-relaxed">{project.challenges}</p>
          </div>

          {/* Results */}
          <div>
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">🏆 Results & Impact</h3>
            <p className="text-[var(--text-secondary)] leading-relaxed">{project.results}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white text-center py-4 px-6 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[var(--glow-primary)]/50"
            >
              🚀 View Live Demo
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 glass border border-[var(--border-color)]/50 hover:border-[var(--secondary-color)]/80 text-[var(--text-primary)] text-center py-4 px-6 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[var(--glow-secondary)]/30"
            >
              💻 View Source Code
            </a>
            <button
              onClick={() => onGalleryOpen(project.gallery)}
              className="flex-1 bg-gradient-to-r from-[var(--secondary-color)]/20 to-[var(--primary-color)]/20 text-[var(--text-primary)] text-center py-4 px-6 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 border border-[var(--border-color)]/30 hover:border-[var(--secondary-color)]/50"
            >
              🖼️ View Gallery
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsModal;
