import styled from 'styled-components';


const text = `
    font-weight: 600;
    font-size: 14px;
    line-height: 1.14;
    letter-spacing: 0.02em;
    color: var(--text-color);
    margin-bottom: 10px;

    @media screen and (min-width: 768px) {
        font-size: 16px;
    }

    @media screen and (min-width: 1280px) {
        font-size: 18px;    
    }
`;

export const Wrapper = styled.div`
    margin-bottom: 30px;
`

export const FilterTitle = styled.p`
    ${text}
`