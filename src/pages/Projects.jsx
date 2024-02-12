import { Section } from '../components/styles/Section.styled';
import { Container } from '../components/styles/Container.styled';

import Projects from '../data/projects.json';

const Project = () => {
  return (
    <Section>
      <Container>
      <h1>Projects</h1>
      <div>

      {
       Projects.map(({id, title, image, description, type, technologies, github, livePage}) => {
        return (
          <div key={id}>
              <p>{title}</p>
              <p>{description}</p>
              <img src={`assets/projects/${image}`} alt={title} />
              <p>{type}</p>
              <p>{technologies}</p>
              <a href={github}>link to Github</a>
              <a href={livePage}>live page</a>
            
            </div>
          
          
        )
       })
      }
       
      </div>
      </Container>
    </Section>
  )
}

export default Project
