import React from 'react';
import { Project } from './Project';
import ProjectForm from './ProjectForm';
import { projectApi } from './projectApi';

interface ProjectAddProps {
}
export default function ProjectAdd() {

  const saveProject = (project: Project) => {
    projectApi
    .add(project)
    .catch((e) => {
        if (e instanceof Error) {
            console.log(e.message);
        }
    });
};

  return (
    <div className="row">
        <ProjectForm onCancel={() => {}} onSave={saveProject} onDelete={() => {}} project={new Project()}/>
    </div>
);
}