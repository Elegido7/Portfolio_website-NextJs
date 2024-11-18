import React from 'react';
import '../App.css';

const projects = [
  {
    id: 1,
    title: 'Restaurant_Bootstrap',
    description: 'A project that showcases a restaurant website built with Bootstrap.',
    link: 'https://github.com/Elegido7/Restaurant_Bootstrap_Project.git',
    image: '../Restaurant.png',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'The project is based on travel agency called Dream Travel.',
    link: 'https://github.com/Elegido7/Travel_Agency_website.git',
    image: '../Dream Travel.png',
  },
  {
    id: 3,
    title: 'Weather App Project',
    description:
      'A weather app that displays the current weather in a city. It utilizes the OpenWeather API.',
    link: 'https://github.com/Elegido7/Weather_app_Project.git',
    image: '../Weather.png',
  },
  {
    id: 4,
    title: 'Shopping Cart Project',
    description:
      'The project is a shopping cart that allows users to add, like, delete and remove items.',
    link: 'https://github.com/Elegido7/OOJ_Cart_Project-.git',
    image: '../Shopping Cart.png',
  },
];

const ProjectPage = () => {
  return (
    <div className="projectMain">
      <h1>View our Projects</h1>
      <div className="projectGrid">
        {projects.map((project) => (
          <div key={project.id} className="card">
            <img src={project.image} alt={project.title} id="Image" />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Click to view the Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
