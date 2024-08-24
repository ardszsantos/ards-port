import React from 'react';
import '../styles/projects.css';
import Carousel from '../components/Carousel';

const projects = [
  [
    {
      title: 'Project 1',
      description: 'Description of Project 1',
      image: 'https://s1.ezgif.com/tmp/ezgif-1-bd922eca8d.gif',
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2',
      image: 'https://placehold.co/250',
    },
    {
      title: 'Project 3',
      description: 'Description of Project 3',
      image: 'https://placehold.co/250',
    },
    {
      title: 'Project 4',
      description: 'Description of Project 4',
      image: 'https://placehold.co/250',
    },
  ],
  [
    {
      title: 'Project 5',
      description: 'Description of Project 5',
      image: 'https://placehold.co/250',
    },
    {
      title: 'Project 6',
      description: 'Description of Project 6',
      image: 'https://placehold.co/250',
    },
    {
      title: 'Project 7',
      description: 'Description of Project 7',
      image: 'https://placehold.co/250',
    },
    {
      title: 'Project 8',
      description: 'Description of Project 8',
      image: 'https://placehold.co/250',
    },
  ],
  // Add more slides as needed
];

function Projects() {
  return (
    <div className='projectsWrapper'>
      <Carousel projects={projects} />
    </div>
  );
}

export default Projects;
