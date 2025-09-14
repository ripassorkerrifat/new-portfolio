'use client';

import { Project } from '../types/project';

interface ProjectCardProps {
  project: Project;
  index: number;
  onMoreInfo: (project: Project) => void;
  onGalleryOpen: (gallery: string[]) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  project, 
  index, 
  onMoreInfo, 
  onGalleryOpen 
}) => {
  return (
    <div
      className="group relative glass rounded-3xl overflow-hidden border border-[var(--border-color)]/40 hover:border-[var(--secondary-color)]/80 transition-all duration-700 hover:scale-[1.03] hover:shadow-2xl hover:shadow-[var(--glow-secondary)]/30 backdrop-blur-xl bg-gradient-to-br from-[var(--primary-bg)]/90 to-[var(--secondary-bg)]/90"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-color)]/5 via-transparent to-[var(--secondary-color)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Project Thumbnail */}
      <div className="relative h-40 sm:h-48 overflow-hidden">
        <img 
          src={project.thumbnail} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        
        {/* Gallery Icon */}
        <button
          onClick={() => onGalleryOpen(project.gallery)}
          className="absolute top-3 left-3 w-8 h-8 sm:w-10 sm:h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300 transform hover:scale-110 text-xs sm:text-base"
          title="View Gallery"
        >
          🖼️
        </button>
        
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-3 right-3">
            <span className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white px-2 sm:px-3 py-1 rounded-full text-xs font-bold shadow-lg">
              ⭐ Featured
            </span>
          </div>
        )}
      </div>
      
      <div className="relative p-4 sm:p-6">
        {/* Project title */}
        <h4 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] mb-2 sm:mb-3 group-hover:text-[var(--primary-color)] transition-colors duration-300">
          {project.title}
        </h4>
        
        {/* Project description */}
        <p className="text-[var(--text-secondary)] text-xs sm:text-sm mb-4 sm:mb-5 leading-relaxed line-clamp-2 min-h-[2.5rem]">
          {project.description}
        </p>
        
        {/* Technologies as tags */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="bg-gradient-to-r from-[var(--primary-color)]/10 to-[var(--secondary-color)]/10 text-[var(--text-primary)] px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-medium border border-[var(--border-color)]/30 hover:border-[var(--primary-color)]/50 transition-all duration-300 hover:scale-105"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-[var(--text-secondary)] text-xs px-2 sm:px-3 py-1 sm:py-1.5 bg-[var(--secondary-bg)]/30 rounded-full border border-[var(--border-color)]/30">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
        
        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
          <button
            onClick={() => onMoreInfo(project)}
            className="flex-1 bg-gradient-to-r from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 hover:from-[var(--primary-color)]/30 hover:to-[var(--secondary-color)]/30 text-[var(--text-primary)] text-center py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 border border-[var(--border-color)]/30 hover:border-[var(--primary-color)]/50 transform hover:scale-105"
          >
            ℹ️ More Info
          </button>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] hover:from-[var(--primary-color)]/80 hover:to-[var(--secondary-color)]/80 text-white text-center py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[var(--glow-primary)]/50"
          >
            🚀 Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
