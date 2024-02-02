import styled from 'styled-components';


export const SectionTitle = styled.h2`
    font-weight: 600;
    font-size: 24px;
    line-height: 1.14;
    letter-spacing: 0.02em;
    color: var(--textColor);
    position: relative;
    margin-bottom: 32px;
    overflow: hidden;
    
    @media screen and (min-width: 768px) {
        font-size: 36px;
        margin-bottom: 40px;
    }

    @media screen and (min-width: 1280px) {
        font-size: 48px;
        margin-bottom: 60px;
    }

    &::after {
        content: "";
        position: absolute;
        top: 50%;
        margin-left: 14px;
        width: 100%;
        height: 3px;
        background-color: #173D33;
    }
`;

