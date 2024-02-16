import { useState } from 'react';
import { Section } from '../components/styles/Section.styled';
import { Container } from '../components/styles/Container.styled';
import { List, Title } from '../components/styles/ProjectsPage.styled';

import Projects from '../data/projects.json';
import Card from '../components/Card';
import Filter from '../components/Filter';


const Project = () => {
  const [item, setItem ] = useState(Projects);

 const filteredItems = (options) => {
  const newItems = Projects.filter((val) => val.technologies.includes(options.value))
  setItem(newItems);

  if(options.value === 'All') {
    setItem(Projects);
  }
 }


  return (
    <Section>
      <Container>
      <Title>Projects</Title>
      <Filter onChange={filteredItems}/>

      <List> 
      {item.map(({id, title, image, description, type, technologies, github, livePage}) => (
          <Card id={id} image={image} title={title} description={description} type={type} technologies={technologies} github={github} livePage={livePage}/>
        ))}  
      </List> 
     
    </Container>
    </Section>
  )
}

export default Project
