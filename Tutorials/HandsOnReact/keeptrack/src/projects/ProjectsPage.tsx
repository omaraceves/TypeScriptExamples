import React, {Fragment, useState, useEffect } from 'react';
import { projectApi } from './projectApi';
import ProjectList from './ProjectList';
import { Project } from './Project';

function ProjectsPage() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | undefined>(undefined);
    const [currentPage, setCurrentPage] = useState(1); //current page is initialized at 1

    const handleMoreClick = () => {
        setCurrentPage((currentPage) => currentPage + 1);
    };

    useEffect(() => {
        async function loadProjects() {
            setLoading(true);
            try {
                const data = await projectApi.get(currentPage)
                setError('');
                setProjects(data);
                if(currentPage === 1) {
                    setProjects(data);
                } else {
                    setProjects((projects) => [...projects, ...data])
                }
            }
            catch(e) {
                if(e instanceof Error) {
                    setError(e.message);
                }
            } finally {
                setLoading(false);
            }
        }
        loadProjects();
        //useEffect will get executed when currentPage gets updated.
    }, [currentPage])

    const saveProject = (project: Project) => {
        projectApi
        .put(project)
        .then((updatedProject) => {
            //iterates over projects from State
            //for each it evaluates its id with the id of the input Project param
            //if it matches it creates a new Project taking the input Project para as input
            //if it doesn't match, then it takes the current project within the iteration
            //the result is a new array where updated projects replaced older versions
            let updatedProjects = projects.map((p: Project) => {
                return p.id === project.id ? new Project(updatedProject): p;
            });

            //sets value for States with updated projects
            setProjects(updatedProjects);
        })
        .catch((e) => {
            if (e instanceof Error) {
                setError(e.message);
            }
        });
    };

    return (
        <>
            <h1>Projects</h1>

            {error && (
                <div className="row">
                    <div className="card large error">
                        <section>
                            <p>
                                <span className="icon-alert inverse "></span>
                                {error}
                            </p>
                        </section>
                    </div>
                </div>
            )}

            <ProjectList onSave={saveProject} projects={projects} />

            {!loading && !error && (
                <div className="row">
                    <div className="col-sm-12">
                        <div className="button-group fluid">
                             <button className="button default" onClick={handleMoreClick}>
                                More...
                            </button>
                        </div>
                    </div>
                </div>
            )}
            
            { loading && (
                <div className = "center-page">
                    <span className="spinner primary"></span>
                    <p>Loading...</p>
                </div>
            )

            }
        </>
    );
} 

export default ProjectsPage;