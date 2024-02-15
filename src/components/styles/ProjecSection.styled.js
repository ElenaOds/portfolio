import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
display: inline-block;
font-weight: 400;
font-size: 12px;
line-height: 1.2;
letter-spacing: 0.02em;
background: var(--bgd-header);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
position: relative;
margin-top: 20px;


@media screen and (min-width: 768px) {
    font-size: 14px;
    margin-top: 20px;
}

@media screen and (min-width: 1280px) {
    font-size: 16px;
    margin-top: 30px;
}


&::after {
    position: absolute;
    display: block;
    content: '';
    bottom: -2;
    left: 50%;
    width: 0;
    height: 2px;
    background: var(--bgd-header);   
    transition: width 0.3s ease 0s, left 0.3s ease 0s; 
}

&:hover:after,
&:focus:after {
    width: 100%; 
    left: 0; 
} &::after {
    position: absolute;
    display: block;
    content: '';
    bottom: -2;
    left: 50%;
    width: 0;
    height: 2px;
    background: var(--bgd-header);   
    transition: width 0.3s ease 0s, left 0.3s ease 0s; 
}

&:hover:after,
&:focus:after {
    width: 100%; 
    left: 0; 
}


`