
import CV from '../components/CV';
import { Overlay, HeroSection, Title, Wrapper, Subtitle, LinksWrapper } from './styles/Hero.styled';
import { Container } from './styles/Container.styled';
import { Button } from './styles/Button.styled';



const Hero = () => {
  return (
        <HeroSection>
            <Overlay>
            <Container>
                <Wrapper>
                <Title>Olena Pedko</Title>
                 <Subtitle>Frontend developer</Subtitle>
                 <LinksWrapper>
                <Button to="/about/#contact" 
                aria-label="contact details"
                onClick={(e) => e.target.blur()}>Get in touch</Button>  
                <CV/>
                </LinksWrapper>
                </Wrapper>
            </Container>
            </Overlay>
        </HeroSection>

   
  )
}

export default Hero;
