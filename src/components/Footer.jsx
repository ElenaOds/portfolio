
import { StyledFooter, List, StyledGithub, StyledLinkedin, StyledTeletram, StyledTelephone, StyledEmail, StyledLink, StyledTextLink, Text } from './styles/Footer.styled';


const Footer = () => {

  const date = new Date().getFullYear();

  return (
    <StyledFooter id='contact'>
    <List>
      <li><a href="https://github.com/ElenaOds" aria-label="link to Github" rel="noopener noreferrer nofollow" target='_blank'><StyledGithub/></a></li>
      <li><a href="https://www.linkedin.com/in/elena-pedko/" aria-label="link to LinkedIn" rel="noopener noreferrer nofollow" target='_blank'><StyledLinkedin/></a></li>
      <li><a href="https://t.me/OlenaOds" aria-label="link to Telegram" rel="noopener noreferrer nofollow" target='_blank'><StyledTeletram/></a></li>
      <li><a href="tel:+380973680788" aria-label="link to Telephone"><StyledTelephone/></a></li>
      <li><a href="mailto:elpg.ods@gmail.com" aria-label="link to Email"><StyledEmail/></a></li>
    </List>

    <List>
      <li><StyledTextLink to="/about/#skills" aria-label="skills">Skills</StyledTextLink></li>
      <li><StyledTextLink to="projects" aria-label='projects'>Projects</StyledTextLink></li>
      <li><StyledTextLink to="/about/#information" aria-label="projects">Information</StyledTextLink></li>
      <li><StyledTextLink to="/about/#certificates" aria-label="certificates">Certificates</StyledTextLink></li>
    </List>
    <Text>© {date}. All rights are reserved. Developed by <StyledLink href="https://github.com/ElenaOds" aria-label="link to Github" rel="noopener noreferrer nofollow" target='_blank'>Olena Pedko</StyledLink></Text>
    </StyledFooter>
  )
}

export default Footer;
