import React from 'react';
import { Project } from './Project';

interface ProjectListProps {
    projects: Project[];
}

function ProjectList({ projects }: ProjectListProps) {
    return (
        <div className="row">
            {projects.map((x) => (
                <div key={x.id} className="cols-sm">
                     <div className="card">
                        <img src={x.imageUrl} alt={x.name} />
                        <section className="section dark">
                            <h5 className="strong">
                                <strong>{x.name}</strong>
                            </h5>
                            <p>{x.description}</p>
                            <p>Budget : {x.budget.toLocaleString()}</p>
                        </section>
                     </div>
                </div>
            ))}
        </div>
    );
}

export default ProjectList;