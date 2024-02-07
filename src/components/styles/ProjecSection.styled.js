import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
font-weight: 400;
font-size: 12px;
line-height: 1.14;
letter-spacing: 0.02em;
background: var(--bgd-header);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
position: relative;


@media screen and (min-width: 768px) {
    font-size: 14px;
}

@media screen and (min-width: 1280px) {
    font-size: 16px;
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
        background: var(--bgd-header);
    }


`