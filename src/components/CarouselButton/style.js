import styled from 'styled-components';


export const Div = styled.div`
    height: 50px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
    transition: transform ease-in .1s;
    top: 70%;
    z-index: 999;
    color: #fff;
    position: absolute;
    left: ${props =>  props.type === 'left' && '5px'};
    right: ${props =>  props.type === 'right' && '5px'};
    &hover {
        transition: transform ease-in .1s;
        transform: scale(1.1)
    }
`;

Div.displayName = 'div'

export const Icon = styled.i`
    color: black;
    font-size: xx-large;
`;

Icon.displayName = 'i'
