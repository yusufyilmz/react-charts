import styled from 'styled-components';


export const Dot = styled.span`
    height: 25px;
    width: 25px;
    background-color:${props => props.active === true ?  'black' : '#bbb'} ;
    border-radius: 50%;
    display: inline-block;
    margin: 10px;

`;

Dot.displayName = 'Dot'

export const Div = styled.div`
    text-align:center
`;

Div.displayName = 'div'

