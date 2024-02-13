import { Section } from '../components/styles/Section.styled';
import { Container } from '../components/styles/Container.styled';
import { List, Item, Wrapper } from '../components/styles/ProjectsPage.styled';

import Projects from '../data/projects.json';


const Project = () => {
  return (
    <Section>
      <Container>
      <h1>Projects</h1>
      <List>
      {Projects.map(({id, title, image, description, type, technologies, github, livePage}) => {
        return (
        
        <Item key={id}>
          <img src={image} alt={title} />
          <Wrapper>
          <p>Title: <span>{title}</span></p>
          <p>Description: <span>{description}</span></p>
          <p>Project type: <span>{type}</span></p>
          <p>Stack: <span>{technologies}</span></p>
          {github ? <a href={github}>link to Github</a> : <p>Link to Github: not available</p>}
          <p><a href={livePage}>Link to live page</a></p>
          </Wrapper>
          </Item>
          
        )
       })}
       
      </List>
      </Container>
    </Section>
  )
}

export default Project
