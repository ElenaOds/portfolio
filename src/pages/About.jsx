import React from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import ProjectSection from '../components/ProjectSection';
import Information from '../components/Information';
import Certificates from '../components/Certificates';
import ButtonUp from '../components/ArrowUp';

const About = () => {
  return (
    <>
      <ButtonUp/>
      <Hero />
      <Skills />
      <ProjectSection/>
      <Information/>
      <Certificates />
    </>
  )
}

export default About;
