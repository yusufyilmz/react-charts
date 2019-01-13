import styled from 'styled-components';

export const SliderDiv = styled.div`
    position: relative;
    width: 100%;
    @media screen and (min-width: 1100px) {
        width: 90%;
    };
    margin: 0 auto;
    height: 100%;
    overflow: hidden;
    white-space: nowrap;
`;

SliderDiv.displayName = 'SliderDiv'

export const SliderWrapperDiv = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    transform: ${props =>  `translateX(${props.translateValue}px)`};
    transition: transform ease-out 0.45s;
    display: flex   
`;

SliderWrapperDiv.displayName = 'SliderWrapperDiv'


export const SlideDiv = styled.div`
    display: inline-block;
    height: 100%;
    width: 100%;
`;
SlideDiv.displayName = 'SlideDiv'
