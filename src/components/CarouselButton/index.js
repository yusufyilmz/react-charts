

import React from 'react';
import {Div, Icon} from './style';


const CarouselButton = ({ type, onClick }) => {

    const getIconClassName = () => {
        return `fa fa-angle-double-${type}`
    }

    return (
        <Div type={type} onClick={onClick}>
             <Icon className={getIconClassName()}></Icon>
        </Div>
    )
}

export default CarouselButton
