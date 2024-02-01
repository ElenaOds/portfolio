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

export const Wrapper = styled.div`
    padding: 60px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media screen and (min-width: 768px) {
        padding: 80px 0;
    }

    @media screen and (min-width: 1280px) {
        padding: 100px 0;
    }
`

export const Title = styled.h1`
    font-weight: 600;
    font-size: 38px;
    line-height: 1.14;
    letter-spacing: 0.02em;
    color: #fff;
    text-shadow: 0 4px 4px #000;
    text-align: center;
    opacity: 0;

    animation: animate 0.5s ease-out 2s forwards;
  
    @keyframes animate {
     100% {
        opacity: 1;
     }
}

@media screen and (min-width: 768px) {
    font-size: 50px;
}

@media screen and (min-width: 1280px) {
    font-size: 58px;
}

`;

