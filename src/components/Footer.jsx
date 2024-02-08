import { StyledFooter, LinksList, StyledGithub, StyledLinkedin, StyledTeletram } from './styles/Footer.styled';


const Footer = () => {
  return (
    <StyledFooter id='contact'>
    <LinksList>
      <li><StyledGithub/></li>
      <li><StyledLinkedin/></li>
      <li><StyledTeletram/></li>
    </LinksList>
    </StyledFooter>
  )
}

export default Footer;
