import React from 'react';

function ProjectBox({ content }) {
  return (
    <div className="project-box">
      {/* Add the HTML structure you need for each project box */}

        <img className="projectBoxImage" src={content.image} alt={content.title} />
        <div className="projectBoxText">
          <h3>{content.title}</h3>
          <p>{content.description}</p>
          {/* You can add more structured HTML here */}
        </div>
    </div>
  );
}

export default ProjectBox;
