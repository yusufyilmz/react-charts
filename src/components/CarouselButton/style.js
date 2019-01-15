import styled from 'styled-components';

export const Div = styled.div`
    left: ${props => props.type === 'left' && '0px'};
    right: ${props => props.type === 'right' && '0px'};
    position: absolute;
    top: 0px;
    bottom: 0px;
    height: 100%;
    width: 50%;
    box-shadow: none;
    outline: 0;
`;

Div.displayName = 'div'

export const Icon = styled.i`
    color: black;
    font-size: xx-large;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    transition: transform ease-in .1s;
    top: 65%;
    z-index: 999;
    left: ${props => props.type === 'left' && '25px'};
    right: ${props => props.type === 'right' && '25px'};
    position: fixed;
    &hover {
        transition: transform ease-in .1s;
        transform: scale(1.1)
    }
`;

Icon.displayName = 'i'
