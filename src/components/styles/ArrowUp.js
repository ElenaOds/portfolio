import styled from 'styled-components';
import { ReactComponent as Arrow} from '../../assets/icons/arrow.svg';

export const Wrapper = styled.div`
    position: relative;
`

export const StyledArrow = styled(Arrow)`
    width: 40px;
    height: 40px;
    cursor: pointer;
    position: fixed;
    bottom: 40px;
    right: 25px;
    z-index: 20;
    background: var(--bgd-header);
    border: 1px solid transparent;
    border-radius: 50%;
    fill: var(--text-header);

    &:hover,
    &:focus {
        background: var(--text-header);
        fill: #9925ea;
    }

    @media screen and (min-width: 768px) {
        width: 60px;
        height: 60px;
    }
`;