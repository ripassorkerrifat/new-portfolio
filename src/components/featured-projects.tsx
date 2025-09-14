'use client';

import { Project } from '../types/project';
import ProjectCard from './project-card';

interface FeaturedProjectsProps {
  projects: Project[];
  onMoreInfo: (project: Project) => void;
  onGalleryOpen: (gallery: string[]) => void;
}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  projects,
  onMoreInfo,
  onGalleryOpen
}) => {
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="mb-12 sm:mb-16 lg:mb-20">
      <h3 className="text-lg sm:text-2xl lg:text-3xl font-bold text-[var(--text-primary)] mb-6 sm:mb-8 lg:mb-12 text-center">
        Featured <span className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text text-transparent">Projects</span>
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {featuredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onMoreInfo={onMoreInfo}
            onGalleryOpen={onGalleryOpen}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;
