import styled from 'styled-components';

const text = `
    font-weight: 400;
    font-size: 14px;
    line-height: 1.14;
    letter-spacing: 0.02em;
    color: var(--text-color);
    margin-bottom: 10px;

    @media screen and (min-width: 1280px) {
        font-size: 16px;    
    }
`;

export const List = styled.ul`
     display: grid;
     gap: 20px;
     grid-template-columns: repeat(auto-fit, 200px);

      @media screen and (min-width: 1280px) {
        grid-template-columns: repeat(auto-fit, 320px);
    }
`;

export const Title = styled.h3`
    ${text}
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 16px;
    @media screen and (min-width: 768px) {
        font-size: 22px;
    }

    @media screen and (min-width: 1280px) {
        font-size: 28px;    
    }
`;

export const Text = styled.p`
    ${text}
`;

