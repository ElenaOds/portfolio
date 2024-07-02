import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';

export const Button = styled(HashLink)`
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
    background: var(--bgd-header);
    background-size: 400%;
    background-position: 90% 0;
    transition: background 0.8s;
    border: none;
    outline: none;
    border-radius: 24px;
    cursor: pointer;
    text-decoration: none;

    &:hover,
    &:focus {
        background-position: 185% 50%;   
    }

    @media screen and (min-width: 768px) {
        padding: 8px;
        width: 110px;
        height: 36px;
    }

    @media screen and (min-width: 1280px) {
        padding: 14px;
        width: 180px;
        height: 48px;
        font-size: 18px;
    }
`;