import React from 'react';
import '../App.css';

const projects = [
  { id: 1, title: 'Project One', description: 'Description for project one' },
  { id: 2, title: 'Project Two', description: 'Description for project two' },
  { id: 3, title: 'Project Three', description: 'Description for project three' },
  { id: 4, title: 'Project Four', description: 'Description for project four' },
];

const ProjectPage = () => {
  return (
    <div className="main">
      <h1>Projects</h1>
      <div className="grid">
        {projects.map((project) => (
          <div key={project.id} className="card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
