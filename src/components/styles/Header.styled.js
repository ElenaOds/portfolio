import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
    width: 100%;
    background: var(--bgd-header);
    padding: 10px 20px;

    @media screen and (min-width: 768px) {
        padding: 20px 30px;
    }

    @media screen and (min-width: 1200px) {
        padding: 20px 40px;
    }
    
`;

export const Nav = styled.nav`
    display: flex;
    justify-content: end;
    
`;

export const List = styled.ul`
    display: flex;
    gap: 20px;

    @media screen and (min-width: 768px) {
        gap: 30px;
    }
`

export const StyledLink = styled(NavLink)`
    position: relative;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.14;
    letter-spacing: 0.02em;
    text-decoration: none;
    cursor: pointer;
    color: var(--text-header);

    &.active {
        color: var(--hover-color);
    }
    &:hover,
    &:focus {
        outline: none;
    }

    &:hover::after,
    &:focus::after {
        position: absolute;
        display: block;
        content: '';
        bottom: -2;
        left: 0;
        width: 100%;
        height: 2px;
        border-radius: 2px;
        background-color: currentColor;
    }

    @media screen and (min-width: 768px) {
        font-size: 18px;
    }

    @media screen and (min-width: 1280px) {
        font-size: 20px;
    }
`



