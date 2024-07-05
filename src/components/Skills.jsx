import React from 'react';
import { Section } from './styles/Section.styled';
import { Container } from './styles/Container.styled';
import { SectionTitle } from './styles/SectionTitle.styled';
import { List, HtmlIcon, CssIcon, JsIcon, TsIcon, ReactIcon, ReduxIcon, ScssIcon, EmotionIcon, StyledIcon, BootstrapIcon, TailwindIcon, NextIcon } from './styles/Skills.styled';


const Skills = () => {

  return (
    <Section id='skills'>
      <Container>
        <SectionTitle>TECHNICAL SKILLS</SectionTitle>
        <List>
          <li><HtmlIcon/></li>
          <li><CssIcon/></li>
          <li><JsIcon/></li>
          <li><TsIcon/></li>
          <li><ReactIcon/></li>
          <li><ReduxIcon/></li>
          <li><NextIcon/></li>
          <li><ScssIcon/></li>
          <li><EmotionIcon/></li>
          <li><StyledIcon/></li>
          <li><BootstrapIcon/></li>
          <li><TailwindIcon/></li>
        </List>
      </Container>
    </Section>
  )
}

export default Skills;
