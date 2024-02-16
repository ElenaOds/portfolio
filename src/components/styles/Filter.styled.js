import styled from 'styled-components';
import Select from 'react-select';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    
    @media screen and (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`;

export const StyledSelect = styled(Select)`
    max-width: 300px;

    @media screen and (min-width: 768px) {
        width: 300px;
    }
`;

export const FilterTitle = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 1.14;
    letter-spacing: 0.02em;
    color: var(--text-color);
    margin-bottom: 10px;

        @media screen and (min-width: 768px) {
            font-size: 16px;
        }

        @media screen and (min-width: 1280px) {
            font-size: 18px;    
        }
`;

