import styled from 'styled-components';
import { NavHashLink } from 'react-router-hash-link';

export const StyledHeader = styled.header`
    background-color: var(--bgd-header);
    padding: 20px 40px;
`;

export const Nav = styled.nav`
    display: flex;
    justify-content: end;
    gap: 30px;
`;

export const StyledLink = styled(NavHashLink)`
    position: relative;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.14;
    letter-spacing: 0.02em;
    text-decoration: none;
    cursor: pointer;
    color: var(--text-header);

    &.active {
        color: #4ce44c;
    }

    &:hover::after {
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
`

