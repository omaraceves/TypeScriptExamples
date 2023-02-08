import React from 'react';
import { Project } from './Project';
import ProjectCard from './ProjectCard';
import ProjectForm from './ProjectForm';

interface ProjectListProps {
    projects: Project[];
}

function ProjectList({ projects }: ProjectListProps) {
    const handleEdit = (project: Project) => {
        console.log(project);
    }
    return (
        <div className="row">
            {projects.map((x) => (
                <div key={x.id} className="cols-sm">
                     <ProjectCard project={x}
                                  onEdit={handleEdit}></ProjectCard>
                     <ProjectForm />
                </div>
            ))}
        </div>
    );
}

export default ProjectList;