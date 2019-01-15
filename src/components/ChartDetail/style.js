import styled from 'styled-components';

export const H2 = styled.h2`
    color: ${props => props.color};
    font-weight: bolder;
`;

H2.displayName = 'h2'

export const Div = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: space-between;
`;
Div.displayName = 'div'

export const DivMain = styled.div`
    display: flex;
    flex-direction: column;
    text-align: ${props => props.index % 2 === 0 ? 'left' : 'right'};
`;

DivMain.displayName = 'div'

export const P = styled.p`
    margin: ${props => props.index % 2 === 0 ? '20px 20px 20px 0' : '20px 0 20px 20px'};
    color: ${props => props.type === 'value' && 'lightgray'};
`;

P.displayName = 'p'
