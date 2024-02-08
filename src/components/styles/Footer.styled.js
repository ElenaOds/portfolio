import styled from 'styled-components';
import { ReactComponent as Linkedin} from '../../assets/icons/linkedin.svg';
import { ReactComponent as Github} from '../../assets/icons/github.svg';
import { ReactComponent as Telegram} from '../../assets/icons/telegram.svg';

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

export const LinksList = styled.ul`
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
`;

export const StyledLinkedin = styled(Linkedin)`
    width: 40px;
    height: 40px;
    fill: #fff;
`;

export const StyledTeletram = styled(Telegram)`
    width: 40px;
    height: 40px;
    fill: #fff;
`;