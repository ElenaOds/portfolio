import { Section } from './styles/Section.styled';
import { Container } from './styles/Container.styled';
import { SectionTitle } from './styles/SectionTitle.styled';
import { List, Img } from './styles/Certificates.styled';

import img1 from '../assets/certificates/certificate.webp';
import img2 from '../assets/certificates/certificate_p2.webp';
import img3 from '../assets/certificates/certificate_p3.webp';


const Certificates = () => {

  return (
    <Section id='certificates'>
    <Container>
      <SectionTitle>CERTIFICATES</SectionTitle> 
      <List>
        <li> 
            <Img 
            src={img1} 
            alt='Fullstack developer certificate'
            />
        </li>
        <li> 
            <Img 
            src={img2} 
            alt='Sulpplement to Fullstack developer certificate'
            />
        </li>
        <li>
            <Img 
            src={img3} 
            alt='Sulpplement to Fullstack developer certificate'
            />
        </li>
      </List>
     
    </Container>
   </Section>
  )
}

export default Certificates;
