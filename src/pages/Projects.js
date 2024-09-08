import React from 'react';
import '../styles/projects.css';
import ProjectCard from '../components/projectCard';




function Projects() {
  return (

    <div className='projects'>
      <div className='FourProjectsWrapper'>
        <ProjectCard imgUrl={`${process.env.PUBLIC_URL}/foodi1.png`} title={'Foodi'} subtitle={'Restaurant landing page'}/>
        <ProjectCard imgUrl={`${process.env.PUBLIC_URL}/foodi1.png`} title={'Foodi'} subtitle={'Restaurant landing page'} />
        <ProjectCard imgUrl={`${process.env.PUBLIC_URL}/foodi1.png`} title={'Foodi'} subtitle={'Restaurant landing page'} />
        <ProjectCard imgUrl={`${process.env.PUBLIC_URL}/foodi1.png`} title={'Foodi'} subtitle={'Restaurant landing page'} />
      </div>
      <div className='FourProjectsWrapper'>
        <ProjectCard imgUrl={`${process.env.PUBLIC_URL}/foodi1.png`} title={'Foodi'} subtitle={'Restaurant landing page'} />
        <ProjectCard imgUrl={`${process.env.PUBLIC_URL}/foodi1.png`} title={'Foodi'} subtitle={'Restaurant landing page'} />
        <ProjectCard imgUrl={`${process.env.PUBLIC_URL}/foodi1.png`} title={'Foodi'} subtitle={'Restaurant landing page'} />
        <ProjectCard imgUrl={`${process.env.PUBLIC_URL}/foodi1.png`} title={'Foodi'} subtitle={'Restaurant landing page'} />
      </div>
    </div>
  );
}

export default Projects;
