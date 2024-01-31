import React from 'react';
import { StyledHeader, Nav, StyledLink } from './styles/Header.styled';

const Header = () => {

  return (
    <StyledHeader>
      <Nav>
      <StyledLink to="/#about" aria-label='about'>About</StyledLink>
      <StyledLink to="technologies" aria-label='technologies'>Technologies</StyledLink>
      <StyledLink to="projects" aria-label='projects'>Projects</StyledLink>
      <StyledLink to="contact"aria-label='contact'>Contact</StyledLink>
      </Nav>
    </StyledHeader>
  )
}

export default Header
