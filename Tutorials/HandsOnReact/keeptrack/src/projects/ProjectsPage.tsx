import React, {Fragment, useState} from 'react';
import { MOCK_PROJECTS } from './MockProjects';
import ProjectList from './ProjectList';
import { Project } from './Project';

function ProjectsPage() {
    const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS);
    const saveProject = (project: Project) => {
        console.log('Saving project: ', project)
    };

    return (
        <>
            <h1>Projects</h1>
            <ProjectList 
                onSave={saveProject}
                projects={MOCK_PROJECTS} />
        </>
    );
} 

export default ProjectsPage;