import styled from 'styled-components';


export const Title = styled.h1`
    font-weight: 600;
    font-size: 22px;
    line-height: 1.14;
    letter-spacing: 0.02em;
    background: var(--bgd-header);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 10px;

    @media screen and (min-width: 768px) {
        font-size: 24px;
    }

    @media screen and (min-width: 1280px) {
        font-size: 28px;    
    }
`;


export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin: -20px;
`;
