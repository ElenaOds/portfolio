import { StyledFooter, List, StyledGithub, StyledLinkedin, StyledTeletram, StyledTelephone, StyledEmail, StyledLink, StyledTextLink, Text } from './styles/Footer.styled';
import scrollToTop from '../helpers/ScrollToTop';

const Footer = () => {

  const date = new Date().getFullYear();

  const handleClick = (e) => {
    e.target.blur();
    scrollToTop();
  }

  return (
    <StyledFooter id='contact'>
    <List>
      <li>
        <a href="https://github.com/ElenaOds" 
        aria-label="link to Github" 
        rel="noopener noreferrer nofollow" 
        target='_blank'
        onClick={(e) => e.target.blur()}>
        <StyledGithub/>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/elena-pedko/" 
        aria-label="link to LinkedIn" 
        rel="noopener noreferrer nofollow" 
        target='_blank'
        onClick={(e) => e.target.blur()}>
          <StyledLinkedin/>
          </a>
      </li>
      <li>
        <a href="https://t.me/OlenaOds" 
        aria-label="link to Telegram" 
        rel="noopener noreferrer nofollow" 
        target='_blank'
        onClick={(e) => e.target.blur()}>
          <StyledTeletram/>
          </a>
        </li>
      <li>
        <a href="tel:+380973680788" 
        aria-label="link to Telephone"
        onClick={(e) => e.target.blur()}>
        <StyledTelephone/>
        </a>
      </li>
      <li>
        <a href="mailto:elpg.ods@gmail.com" 
        aria-label="link to Email"
        onClick={(e) => e.target.blur()}>
        <StyledEmail/>
        </a>
      </li>
    </List>

    <List>
      <li>
        <StyledTextLink to="/about/#skills" 
        aria-label="skills"
        onClick={(e) => e.target.blur()}>
        Skills
        </StyledTextLink>
      </li>
      <li>
        <StyledTextLink to="projects" 
        aria-label='projects'
        onClick={handleClick}>
        Projects
        </StyledTextLink>
      </li>
      <li>
        <StyledTextLink to="/about/#information"
         aria-label="projects"
         onClick={(e) => e.target.blur()}>
        Information
        </StyledTextLink>
      </li>
      <li>
        <StyledTextLink to="/about/#certificates" 
        aria-label="certificates"
        onClick={(e) => e.target.blur()}>
        Certificates
        </StyledTextLink>
      </li>
    </List>
    <Text>© {date}. All rights are reserved. Developed by <StyledLink href="https://github.com/ElenaOds" aria-label="link to Github" rel="noopener noreferrer nofollow" target='_blank' onClick={(e) => e.target.blur()}>Olena Pedko</StyledLink></Text>
    </StyledFooter>
  )
}

export default Footer;
