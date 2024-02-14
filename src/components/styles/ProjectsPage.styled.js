import styled from 'styled-components';

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin: -20px;
  
`;

export const Item = styled.li`
    width: 100%;
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
    background-color: #fff;
`;

const text = `
    font-weight: 400;
    font-size: 14px;
    line-height: 1.14;
    letter-spacing: 0.02em;
    color: var(--text-color);
    text-align: justify;
    margin-bottom: 10px;

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
`