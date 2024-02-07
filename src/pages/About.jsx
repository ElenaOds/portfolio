import React from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import ProjectSection from '../components/ProjectSection';
import Information from '../components/Information';
import Certificates from '../components/Certificates';


const About = () => {
  return (
    <>
      <Hero />
      <Skills />
      <ProjectSection/>
      <Information/>
      <Certificates />
    </>
  )
}

export default About;
