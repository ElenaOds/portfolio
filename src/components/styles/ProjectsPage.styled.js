import styled from 'styled-components';

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin: -30px;
  
`;

export const Item = styled.li`
    width: 100%;
    margin: 30px;

    @media screen and (min-width: 768px) {
        width: calc((100% - 4 * 30px) / 2); 
    }

    @media screen and (min-width: 1280px) {
        width: calc((100% - 6 * 30px) / 3);    
    }
`;

export const Wrapper = styled.div`
    padding: 20px;
    background-color: #fff;
`