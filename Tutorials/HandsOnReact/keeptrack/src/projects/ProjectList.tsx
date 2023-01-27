import React from 'react';
import { Project } from './Project';
import ProjectCard from './ProjectCard';

interface ProjectListProps {
    projects: Project[];
}

function ProjectList({ projects }: ProjectListProps) {
    return (
        <div className="row">
            {projects.map((x) => (
                <div key={x.id} className="cols-sm">
                     <ProjectCard project={x}></ProjectCard>
                </div>
            ))}
        </div>
    );
}

export default ProjectList;