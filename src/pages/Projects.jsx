import { useState, useEffect } from 'react';
import { Section } from '../components/styles/Section.styled';
import { Container } from '../components/styles/Container.styled';
import { List } from '../components/styles/ProjectsPage.styled';

import projects from '../data/projects.json';
import Card from '../components/Card';
import Filter from '../components/Filter';



const Project = () => {
  const [searchValue, setSearchValue] = useState(null);
  const [filteredItems, setFilteredItems] = useState(null);


  useEffect(() => {
    const matchingItems = searchValue 
        ? projects.filter((project) => project.technologies.includes(searchValue))
        : projects;
    setFilteredItems(matchingItems);
    if(searchValue === 'All') {
      setFilteredItems(projects)
    }
}, [searchValue]);

 const handleChange = (e) => {
  setSearchValue(e.target.value);
};

  return (
    <Section>
      <Container>
      <h1>Projects</h1>
      <Filter onChange={handleChange} value={searchValue}/>
      <List>
        {(filteredItems ?? projects).map(({id, title, image, description, type, technologies, github, livePage}) => (
          <Card id={id} image={image} title={title} description={description} type={type} technologies={technologies} github={github} livePage={livePage}/>
        ))} 
      </List> 
    </Container>
    </Section>
  )
}

export default Project
