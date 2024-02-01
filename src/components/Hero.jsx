import React from 'react';
import { Overlay, Title, Wrapper } from './styles/Hero.styled';
import { Container } from './styles/Container.styled'


const Hero = () => {
  return (
        <section>
             <Overlay>
            <Container>
                <Wrapper>
                <Title>Olena Pedko 
                <br/> frontend developer</Title>
                <button>Contact me</button>  
                </Wrapper>
            </Container>
            </Overlay>
        </section>

   
  )
}

export default Hero;
