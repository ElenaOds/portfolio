import ProjectsSwiper from './Swiper';

import { Section } from './styles/Section.styled';
import { Container } from './styles/Container.styled';
import { SectionTitle } from './styles/SectionTitle.styled';
import { StyledLink } from './styles/ProjecSection.styled';

const ProjectSection = () => {
 
return (
  <Section>
    <Container>
      <SectionTitle>PROJECTS</SectionTitle> 
      <ProjectsSwiper/>
      <StyledLink to='/projects'>Click for details</StyledLink>
    </Container>
   </Section>
  )
}

export default ProjectSection;
