import React from 'react';
import { Section } from './styles/Section.styled';
import { Container } from './styles/Container.styled';
import { SectionTitle } from './styles/SectionTitle.styled';
import { List, ListItem, Text, HtmlIcon, CssIcon, JsIcon, TsIcon, ReactIcon, ReduxIcon, ScssIcon, EmotionIcon, StyledIcon, BootstrapIcon } from './styles/Skills.styled';


const Skills = () => {
  return (
    <Section>
        <Container>
             <SectionTitle>SKILLS</SectionTitle>

             <List>
                <ListItem>
                    <Text>HTML</Text>
                    <HtmlIcon/>
                </ListItem>
                <ListItem>
                <Text>CSS</Text>
                <CssIcon/>
                </ListItem>
                <ListItem>
                <Text>JavaScript</Text>
                <JsIcon/>
                </ListItem>
                <ListItem>
                <Text>TypeScript</Text>
                <TsIcon/>
                </ListItem>
                <ListItem>
                <Text>React</Text>
                <ReactIcon/>
                </ListItem>
                <ListItem>
                <Text>Redux</Text>
                <ReduxIcon/>
                </ListItem>
                <ListItem>
                <Text>SCSS</Text>
                <ScssIcon/>
                </ListItem>
                <ListItem>
                <Text>Emotion</Text>
                <EmotionIcon/>
                </ListItem>
                <ListItem>
                <Text>Styled components</Text>
                <StyledIcon/>
                </ListItem>
                <ListItem>
                <Text>Bootstrap</Text>
                <BootstrapIcon/>
                </ListItem>
             </List>
        </Container>
     
    </Section>
  )
}

export default Skills;
