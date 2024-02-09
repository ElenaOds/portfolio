import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { ReactComponent as Linkedin} from '../../assets/icons/linkedin.svg';
import { ReactComponent as Github} from '../../assets/icons/github.svg';
import { ReactComponent as Telegram} from '../../assets/icons/telegram.svg';
import { ReactComponent as Telephone} from '../../assets/icons/telephone.svg';
import { ReactComponent as Email} from '../../assets/icons/mail.svg';

export const StyledFooter = styled.footer`
    width: 100%;
    background: var(--bgd-header);
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 768px) {
        padding: 30px;
    }

    @media screen and (min-width: 1200px) {
        padding: 40px;
    }
`;

export const List = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;

    margin-bottom: 30px;

`

export const StyledGithub = styled(Github)`
    width: 40px;
    height: 40px;
    fill: #fff;
    cursor: pointer;
`;

export const StyledLinkedin = styled(Linkedin)`
    width: 40px;
    height: 40px;
    fill: #fff;
    cursor: pointer;
`;

export const StyledTeletram = styled(Telegram)`
    width: 40px;
    height: 40px;
    fill: #fff;
    cursor: pointer;
`;

export const StyledTelephone = styled(Telephone)`
    width: 40px;
    height: 40px;
   
    cursor: pointer;
`;

export const StyledEmail = styled(Email)`
    width: 40px;
    height: 40px;
    fill: #fff;
    cursor: pointer;
`;

const text = `
    font-weight: 400;
    font-size: 14px;
    line-height: 1.14;
    letter-spacing: 0.02em;
    color: var(--text-header);
    text-decoration: none;

    @media screen and (min-width: 768px) {
        font-size: 16px;
    }

    @media screen and (min-width: 1280px) {
        font-size: 18px;    
    }
`;

export const StyledLink = styled(Link)`
    ${text}

    &:hover {
        text-decoration: underline;
    }
`;

export const StyledTextLink = styled(HashLink)`
    ${text}
    
    &:hover {
        text-decoration: underline;
    }
`

export const Text = styled.p`
    ${text}
`