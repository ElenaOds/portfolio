import styled from 'styled-components';

import img_mob1 from '../../assets/hero-mobile@1x.jpg';
import img_mob2 from '../../assets/hero-mobile@1x.jpg';
import img_tab1 from '../../assets/hero-tablet@1x.jpg';
import img_tab2 from '../../assets/hero-tablet@2x.jpg';
import img_desk1 from '../../assets/hero-desktop@1x.jpg';
import img_desk2 from '../../assets/hero-desktop@2x.jpg';


export const Overlay = styled.div`
    background-image: url(${img_mob1});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
 
    @media (min-device-pixel-ratio: 2),
    (min-resolution: 2dppx),
    (min-resolution: 2dpi) {
        background-image: url(${img_mob2});
    }

    @media screen and (min-width: 768px) {
        background-image: url(${img_tab1});
       
        @media (min-device-pixel-ratio: 2),
        (min-resolution: 2dppx),
        (min-resolution: 2dpi) {
            background-image: url(${img_tab2});
        }
    }

    @media screen and (min-width: 1280px) {
        background-image: url(${img_desk1}));
        height: 70vh;

            @media (min-device-pixel-ratio: 2),
            (min-resolution: 2dppx),
            (min-resolution: 2dpi) {
            background-image: url(${img_desk2});
        }
    }
`;

export const HeroSection = styled.section`
    padding: 0 0 20px 0;
`;

export const Wrapper = styled.div`
    padding: 40px 0;

    @media screen and (min-width: 768px) {
        padding: 60px 0;
    }

    @media screen and (min-width: 1280px) {
        padding: 80px 0;
    }
`

const text = `
    font-weight: 600;
    font-size: 36px;
    line-height: 1.14;
    letter-spacing: 0.02em;
    background: -webkit-linear-gradient(-45deg, #9925ea, #338aff, #9925ea);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media screen and (min-width: 768px) {
        font-size: 50px;
    }

    @media screen and (min-width: 1280px) {
        font-size: 72px;
    }
`;

export const Title = styled.h1`
    ${text}
    transform: translateY(0);
    animation: move-down 1000ms ease-in;
   
    @keyframes move-down {
        from {
          transform: translateY(-100px);
          opacity: 0;

        }
        to {
          transform: translateY(0);
          opacity: 1;
        }
      }  
`;

export const Subtitle = styled.h2`
      ${text}
        transform: translateY(0);
        animation: move-up 1000ms ease-in;
        margin-bottom: 30px;

        @media screen and (min-width: 768px) {
            margin-bottom: 40px;
        }
    
        @media screen and (min-width: 1280px) {
            margin-bottom: 60px;
        }

        @keyframes move-up {
            from {
              transform: translateY(100px);
              opacity: 0;
    
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
`;

export const LinksWrapper = styled.div`
    display: flex;
    gap: 20px;
`