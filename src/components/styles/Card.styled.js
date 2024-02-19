import styled from 'styled-components';


export const Item = styled.li`
    background-color: #fff;
    margin: 20px;

    @media screen and (min-width: 768px) {
        width: calc((100% - 4 * 20px) / 2); 
    }

    @media screen and (min-width: 1280px) {
        width: calc((100% - 6 * 20px) / 3);    
    }
`;

export const Wrapper = styled.div`
    padding: 20px;
    display: grid;
    gap: 10px;
   
    @media screen and (min-width: 768px) {
        grid-auto-rows: 20px 70px 20px 50px 20px 20px 20px;
    }

    @media screen and (min-width: 1280px) {
        grid-auto-rows: 20px 80px 20px 40px 20px 20px 20px;   
    }
`;

const text = `
    font-weight: 400;
    font-size: 14px;
    line-height: 1.2;
    letter-spacing: 0.02em;
    color: var(--text-color);
    text-align: justify;

    @media screen and (min-width: 768px) {
        font-size: 14px;
    }

    @media screen and (min-width: 1280px) {
        font-size: 16px;    
    }
`;

export const Title = styled.p`
    ${text}
    font-weight: 600;
`;

export const Description = styled.span`
    ${text}
`;

export const Link = styled.a`
    display: inline-block;
    ${text}
    font-weight: 600;
    margin-bottom: 10px;
    background: var(--bgd-header);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
    margin-bottom: 0;

    &::after {
        position: absolute;
        display: block;
        content: '';
        bottom: -2;
        left: 50%;
        width: 0;
        height: 2px;
        background: var(--bgd-header);   
        transition: width 0.3s ease 0s, left 0.3s ease 0s; 
    }

        &:hover:after,
        &:focus:after {
            width: 100%; 
            left: 0; 
        }
`;

