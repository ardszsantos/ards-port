import React from 'react';
import Gallery from './Galerry';

function ProjectBox({ content }) {
  return (
    <div className="project-box">
      {/* Add the HTML structure you need for each project box */}

        <Gallery className="projectBoxImage" images={content.images} alt={content.title} />
        <div className="projectBoxText">
          <h3>{content.title}</h3>
          <p>{content.description}</p>
          <div className="projectLinks">
            <p><a href={content.url} target='_blank'>Github</a></p>
            <p><a href={content.demo} target='_blank'>Demo</a></p>
          </div>
          {/* You can add more structured HTML here */}
        </div>
    </div>
  );
}

export default ProjectBox;
