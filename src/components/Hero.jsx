import React from 'react';
import { Overlay, Title, Wrapper, Subtitle } from './styles/Hero.styled';
import { Container } from './styles/Container.styled';
import { Button } from './styles/Button.styled';



const Hero = () => {
  return (
        <section>
            <Overlay>
            <Container>
                <Wrapper>
                <Title>Olena Pedko</Title>
                 <Subtitle>Frontend developer</Subtitle>
                <Button to="/about/#contact" 
                aria-label="contact details"
                onClick={(e) => e.target.blur()}>Get in touch</Button>  
                </Wrapper>
            </Container>
            </Overlay>
        </section>

   
  )
}

export default Hero;
