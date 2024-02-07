import styled from 'styled-components';

export const Container = styled.div`
    min-width: 270px;
    width: 100%;
    padding: 0 20px;
    margin-right: auto;
    margin-left: auto;
 
    @media screen and (min-width: 768px) {
        padding: 0 30px;
    }

    @media screen and (min-width: 1280px) {
        // width: 1280px;
        padding: 0 40px;
    }
`