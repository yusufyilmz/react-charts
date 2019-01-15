import styled from 'styled-components';

export const ChartDetailDiv = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    width: 100%;
`;

ChartDetailDiv.displayName = 'ChartDetailDiv'

export const ChartDiv = styled.div`
    margin: 0 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 600px) {
        margin: 0px
    }
`;

ChartDiv.displayName = 'ChartDiv'
