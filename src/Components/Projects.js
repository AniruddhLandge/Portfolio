import React from 'react';
import ProjectBox from './ProjectBox';
import weather from '../images/weather.webp';
import WebsiteImage from '../images/WebsiteImage.png';
import home from '../images/home.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={WebsiteImage} projectName="Portfolio" />
        <ProjectBox projectPhoto={weather} projectName="Weather_App" />
        <ProjectBox projectPhoto={home} projectName="Coffee_Shop" />
      </div>

    </div>
  )
}

export default Projects