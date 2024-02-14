import { Section } from '../components/styles/Section.styled';
import { Container } from '../components/styles/Container.styled';
import { List, Item, Wrapper, Title, Description, Link } from '../components/styles/ProjectsPage.styled';

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
          <Title>Title: <Description>{title}</Description></Title>
          <Title>Description: <Description>{description}</Description></Title>
          <Title>Project type: <Description>{type}</Description></Title>
          <Title>Stack: <Description>{technologies.join(', ')}</Description></Title>
          {github ? <Link href={github} rel="noopener noreferrer nofollow" target='_blank' aria-label="link to Github">Link to Github</Link> : <Title>Link to Github: <Description>not available</Description></Title>}
          <Title><Link href={livePage} rel="noopener noreferrer nofollow" target='_blank' aria-label="link to Live page">Link to live page</Link></Title>
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
