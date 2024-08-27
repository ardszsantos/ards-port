import React from 'react';
import '../styles/projects.css';
import Carousel from '../components/Carousel';

const projects = [
  [
    {
      title: 'Loja Digital',
      description: 'Ecommerce fullstack com React JS & Tailwind CSS.',
      url: 'https://github.com/ardszsantos/ecommerce-store',
      demo: 'https://fredbola.com.br/',
      images: [
        'ecommerce1.png',
        'ecommerce3.png',
        'ecommerce2.png',
      ],
    },
    {
      title: '2048.py',
      description: 'Jogo 2048 com pygame',
      url: 'https://github.com/ardszsantos/2048-game',
      demo: 'https://github.com/ardszsantos/2048-game',
      images: [
        '2048-1.png',
        '2048-2.png',
      ],
    },
    {
      title: 'Landing Page',
      description: 'Site estático, Restaurante Nova Italia',
      url: 'https://github.com/ardszsantos/exercicio-landing',
      demo: 'https://exercicio-landing-566126g6m-fredaobobs-projects.vercel.app/',
      images: [
        'nvitalia1.png',
        'nvitalia2.png',
        'nvitalia3.png',
      ],
    },
    {
      title: 'Django CRM',
      description: 'CRM com Django',
      url: 'https://github.com/ardszsantos/django-crm/tree/main',
      demo: 'https://github.com/ardszsantos/django-crm/tree/main',
            images: [
        'djangocrm1.png',
        'djangocrm2.png',
        'djangocrm3.png',
      ],
    },
  ],
  [
    {
      title: 'Project 5',
      description: 'Description of Project 5',
            images: [
        'ecommerce3.png',
        'ecommerce2.png',
        'ecommerce1.png',
      ],
    },
    {
      title: 'Project 6',
      description: 'Description of Project 6',
            images: [
        'ecommerce3.png',
        'ecommerce2.png',
        'ecommerce1.png',
      ],
    },
    {
      title: 'Project 7',
      description: 'Description of Project 7',
            images: [
        'ecommerce3.png',
        'ecommerce2.png',
        'ecommerce1.png',
      ],
    },
    {
      title: 'Project 8',
      description: 'Description of Project 8',
            images: [
        'ecommerce3.png',
        'ecommerce2.png',
        'ecommerce1.png',
      ],
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
