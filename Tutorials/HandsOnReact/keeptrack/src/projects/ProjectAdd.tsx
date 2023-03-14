import React from 'react';
import { Project } from './Project';
import ProjectForm from './ProjectForm';

interface ProjectAddProps {
}
export default function ProjectAdd() {
  return (
    <div className="row">
        <ProjectForm onCancel={() => {}} onSave={() => {}} onDelete={() => {}} project={new Project()}/>
    </div>
);
}