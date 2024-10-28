import React from 'react';

interface Project {
    title: string;
    image: string;
    deployedUrl: string;
    githubUrl: string;
}

const projects: Project[] = [
    {
        title: 'Project 1',
        image: 'project 1 image',
        deployedUrl: '',
        githubUrl: '',
    },
];

const Portfolio: React.FC = () => {
    return (
        <section id="Portfolio">
            <h2>My Work Samples</h2>
            <div className="Portfolio gallery">
                {projects.map((project, index) => (
                    <div key={index}>
                        <h3>{project.title}</h3>
                        <img src={project.image} alt={project.title}/>
                        <a href={project.deployedUrl} target="_blank" rel="norefferer">View App</a>
                        <a href={project.githubUrl} target="_blank" rel="norefferer">GitHub</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;