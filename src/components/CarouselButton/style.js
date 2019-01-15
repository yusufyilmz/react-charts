import styled from 'styled-components';


export const Icon = styled.i`
    color: black;
    font-size: xx-large;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    transition: transform ease-in .1s;
    top: 60%;
    z-index: 999;
    left: ${props => props.type === 'left' && '25px'};
    right: ${props => props.type === 'right' && '25px'};
    position: fixed;
    cursor: none;
    &:hover {
        transition: transform ease-in .1s;
        transform: scale(1.5)
    }
`;

Icon.displayName = 'i'


export const Div = styled.div`
    left: ${props => props.type === 'left' && '0px'};
    right: ${props => props.type === 'right' && '0px'};
    position: absolute;
    top: 0px;
    bottom: 0px;
    box-shadow: none;
    outline: 0 !important;
    cursor: none;
    &:hover {
        ${Icon} {
            transition: transform ease-in .1s;
            transform: scale(1.5)
        }
    }
    `;

Div.displayName = 'div'
