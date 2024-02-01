import React from 'react';
import { StyledHeader, Nav, StyledLink, List } from './styles/Header.styled';

const Header = () => {

  return (
    <StyledHeader>
      <Nav>
        <List>
          <li><StyledLink to="about" aria-label='about'>About</StyledLink></li>
          <li><StyledLink to="projects" aria-label='projects'>Projects</StyledLink></li>
        </List>
      </Nav>
    </StyledHeader>
  )
}

export default Header
