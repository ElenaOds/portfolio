import ProjectsSwiper from './Swiper';
import scrollToTop from '../helpers/ScrollToTop';

import { Section } from './styles/Section.styled';
import { Container } from './styles/Container.styled';
import { SectionTitle } from './styles/SectionTitle.styled';
import { StyledLink } from './styles/ProjecSection.styled';

const ProjectSection = () => {

  const handleClick = (e) => {
    e.target.blur();
    scrollToTop();
  }
 
return (
  <Section>
    <Container>
      <SectionTitle>PROJECTS</SectionTitle> 
      <ProjectsSwiper/>
      <StyledLink to='/projects'  onClick={handleClick}>Click for details</StyledLink>
    </Container>
   </Section>
  )
}

export default ProjectSection;
