import { Section } from './styles/Section.styled';
import { Container } from './styles/Container.styled';
import { SectionTitle } from './styles/SectionTitle.styled';
import { List, Title, Text } from './styles/Information.styled';

const Information = () => {
  return (
    <Section id='information'>
    <Container>
      <SectionTitle>INFORMATION</SectionTitle> 
      <List>
        <li>
            <Title>Education</Title> 
            <Text>June 2022 - May 2023</Text> 
            <Text>GoIT IT school</Text> 
            <Text>Fullstack developer</Text>
        </li>
        <li>
            <Title>Languages</Title> 
            <Text>English - advanced</Text>
            <Text>Ukrainian - native</Text>
            <Text>Russian - fluent</Text>
        </li>

        <li>
            <Title>Experience</Title> 
            <Text>September 2023 - May 2024</Text>
            <Text>Company - IT Sprout</Text>
            <Text>Position - Frontend developer (internship)</Text>
        </li>
      </List>
      
    </Container>
   </Section>
  )
}

export default Information;
