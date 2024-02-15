import React from 'react';
import { StyledHeader, Nav, StyledLink, List } from './styles/Header.styled';

const Header = () => {

  return (
    <StyledHeader>
      <Nav>
        <List>
          <li><StyledLink to="about" 
          aria-label='about'
          onClick={(e) => e.target.blur()}>About</StyledLink></li>
          <li><StyledLink to="projects" 
          aria-label='projects'
          onClick={(e) => e.target.blur()}>Projects</StyledLink></li>
        </List>
      </Nav>
    </StyledHeader>
  )
}

export default Header
