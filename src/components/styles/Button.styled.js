import styled from 'styled-components';

export const Button = styled.a`
    display: inline-block;
    text-align: center;
    padding: 6px;
    width: 100px;
    height: 30px;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.14;
    letter-spacing: 0.02em;
    color: var(--text-header);
    background-color: var(--bgd-header);
    border: none;
    outline: none;
    border-radius: 8px;
    cursor: pointer;

    &:hover,
    &:focus {
        background-color: rgba(107, 99, 255, 0.7);
    }

    @media screen and (min-width: 768px) {
        padding: 8px;
        width: 110px;
        height: 36px;
        font-size: 16px;
    }

    @media screen and (min-width: 1280px) {
        padding: 8px;
        width: 120px;
        height: 40px;
        font-size: 18px;
    }
`;