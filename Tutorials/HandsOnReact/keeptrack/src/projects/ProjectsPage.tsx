import React, {Fragment, useState} from 'react';
import ProjectList from './ProjectList';
import { Project } from './Project';

function ProjectsPage() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | undefined>(undefined);

    const saveProject = (project: Project) => {
        let updatedProjects = projects.map((p: Project) => {
            return p.id === project.id ? project: p;
        });
        setProjects(updatedProjects);
    };

    return (
        <>
            <h1>Projects</h1>
            <ProjectList 
                onSave={saveProject}
                projects={projects} />
        </>
    );
} 

export default ProjectsPage;