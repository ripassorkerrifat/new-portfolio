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
    <div className="mb-20">
      <h3 className="text-3xl font-bold text-[var(--text-primary)] mb-12 text-center">
        Featured <span className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text text-transparent">Projects</span>
      </h3>
      <div className="grid lg:grid-cols-3 gap-10">
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
