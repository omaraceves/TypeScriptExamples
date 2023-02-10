import React, { useState } from 'react';
import { Project } from './Project';
import ProjectCard from './ProjectCard';
import ProjectForm from './ProjectForm';

interface ProjectListProps {
    projects: Project[];
    onSave: (project: Project) => void;
}

function ProjectList({ projects, onSave }: ProjectListProps) {
    const [projectBeingEdited, setProjectBeingEdited] = useState({});

    const handleEdit = (project: Project) => {
        setProjectBeingEdited(project);
        console.log(project); //prints the project on screen.
    }
    
    const handleCancel = () => {
        setProjectBeingEdited({});
    }

    return (
        <div className="row">
            {projects.map((x) => (
                <div key={x.id} className="cols-sm">
                     {
                        x===projectBeingEdited ? (
                            <ProjectForm onCancel={handleCancel} onSave={onSave}/>
                        ) : (
                            <ProjectCard project={x} onEdit={handleEdit} />
                        )}
                </div>
            ))}
        </div>
    );
}

export default ProjectList;