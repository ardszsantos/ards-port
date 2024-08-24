import React from 'react';
import Slider from 'react-slick';
import ProjectBox from './ProjectBox'; // Import the ProjectBox component
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel({ projects = [] }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {projects.map((projectSet, index) => (
        <div key={index} className="project-slide">
          <div className="project-row">
            <ProjectBox content={projectSet[0]} />
            <ProjectBox content={projectSet[1]} />
          </div>
          <div className="project-row">
            <ProjectBox content={projectSet[2]} />
            <ProjectBox content={projectSet[3]} />
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default Carousel;
