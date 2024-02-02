import styled from 'styled-components';
import { ReactComponent as Html} from '../../assets/icons/html.svg';
import { ReactComponent as Css} from '../../assets/icons/css.svg';
import { ReactComponent as Js} from '../../assets/icons/js.svg';
import { ReactComponent as Ts} from '../../assets/icons/ts.svg';
import { ReactComponent as React} from '../../assets/icons/react.svg';
import { ReactComponent as Redux} from '../../assets/icons/redux.svg';
import { ReactComponent as Scss} from '../../assets/icons/scss.svg';
import { ReactComponent as Emotion} from '../../assets/icons/emotion.svg';
import { ReactComponent as Styled} from '../../assets/icons/styled-components.svg';
import { ReactComponent as Bootstrap} from '../../assets/icons/bootstrap.svg';


export const List = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;

    @media screen and (min-width: 768px) {
        gap: 30px;
    }

    @media screen and (min-width: 1280px) {
       
        justify-content: space-between;
        flex-wrap: nowrap;
    }
`;

export const Text = styled.p`
    font-weight: 400;
    font-size: 12px;
    line-height: 1.14;
    letter-spacing: 0.02em;
    color: var(--textColor);
    margin-bottom: 5px;
    text-align: center;
    width: 100%;
    background-color: 	rgb(211, 211, 211, 0.3);
    border-radius: 8px;
    padding: 5px;
    transform: translateY(0);
    opacity: 0;
    

    @media screen and (min-width: 768px) {
        font-size: 14px;
        margin-bottom: 8px;
    }

    @media screen and (min-width: 1280px) {
        font-size: 16px;
        margin-bottom: 10px;
    }
`

export const ListItem = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: calc((100% - 120px) / 6);
    cursor: pointer;

    @media screen and (min-width: 768px) {
        width: calc((100% - 150px) / 6);
    }

    @media screen and (min-width: 1280px) {
        width: 100%  
    }

    &:hover ${Text},
    &:focus ${Text},{
        opacity: 1;
        animation: move-up 500ms ease-in;
        @keyframes move-up {
            from {
              transform: translateY(20px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
    }

`



export const HtmlIcon = styled(Html)`
    width: 50px;
    height: 50px;

    @media screen and (min-width: 768px) {
        width: 70px;
        height: 70px;
    }

    @media screen and (min-width: 1280px) {
        width: 100px;
        height: 100px;
    }
`;

export const CssIcon = styled(Css)`
    width: 50px;
    height: 50px;

    @media screen and (min-width: 768px) {
        width: 70px;
        height: 70px;
    }

    @media screen and (min-width: 1280px) {
        width: 100px;
        height: 100px;
    }
`;

export const JsIcon = styled(Js)`
    width: 50px;
    height: 50px;

    @media screen and (min-width: 768px) {
        width: 70px;
        height: 70px;
    }

    @media screen and (min-width: 1280px) {
        width: 100px;
        height: 100px;
    }
`;

export const TsIcon = styled(Ts)`
    width: 50px;
    height: 50px;

    @media screen and (min-width: 768px) {
        width: 70px;
        height: 70px;
    }

    @media screen and (min-width: 1280px) {
        width: 100px;
        height: 100px;
    }
`;

export const ReactIcon = styled(React)`
    width: 50px;
    height: 50px;

    @media screen and (min-width: 768px) {
        width: 70px;
        height: 70px;
    }

    @media screen and (min-width: 1280px) {
        width: 100px;
        height: 100px;
    }
`;

export const ReduxIcon = styled(Redux)`
    width: 50px;
    height: 50px;

    @media screen and (min-width: 768px) {
        width: 70px;
        height: 70px;
    }

    @media screen and (min-width: 1280px) {
        width: 100px;
        height: 100px;
    }
`;

export const ScssIcon = styled(Scss)`
    width: 50px;
    height: 50px;

    @media screen and (min-width: 768px) {
        width: 70px;
        height: 70px;
    }

    @media screen and (min-width: 1280px) {
        width: 100px;
        height: 100px;
    }
`;

export const EmotionIcon = styled(Emotion)`
    width: 50px;
    height: 50px;

    @media screen and (min-width: 768px) {
        width: 70px;
        height: 70px;
    }

    @media screen and (min-width: 1280px) {
        width: 100px;
        height: 100px;
    }
`;

export const StyledIcon = styled(Styled)`
    width: 50px;
    height: 50px;

    @media screen and (min-width: 768px) {
        width: 70px;
        height: 70px;
    }

    @media screen and (min-width: 1280px) {
        width: 100px;
        height: 100px;
    }
`;

export const BootstrapIcon = styled(Bootstrap)`
    width: 50px;
    height: 50px;

    @media screen and (min-width: 768px) {
        width: 70px;
        height: 70px;
    }

    @media screen and (min-width: 1280px) {
        width: 100px;
        height: 100px;
    }
`;