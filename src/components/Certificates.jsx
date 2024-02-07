import React, { useRef } from "react";
import { Section } from './styles/Section.styled';
import { Container } from './styles/Container.styled';
import { SectionTitle } from './styles/SectionTitle.styled';
import { List, Img } from './styles/Certificates.styled';

import img1 from '../assets/certificates/certificate.jpg';
import img2 from '../assets/certificates/certificate_p2.jpg';
import img3 from '../assets/certificates/certificate_p3.jpg';


const Certificates = () => {
    const imageRef = useRef(null);

    const handleImageClick = () => {
        imageRef.current.requestFullscreen();
      };

  return (
    <Section>
    <Container>
      <SectionTitle>CERTIFICATES</SectionTitle> 
      <List>
        <li>
            <Img 
            ref={imageRef}
            src={img1} 
            alt='Fullstack developer certificate'
            onClick={handleImageClick}
            />
        </li>
        <li>
            <Img 
            ref={imageRef}
            src={img2} 
            alt='Sulpplement to Fullstack developer certificate'
            onClick={handleImageClick}
            />
        </li>
        <li>
            <Img 
            ref={imageRef}
            src={img3} 
            alt='Sulpplement to Fullstack developer certificate'
            onClick={handleImageClick}
            />
        </li>
      </List>
     
    </Container>
   </Section>
  )
}

export default Certificates;
