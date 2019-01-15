import React from 'react';
import { Div, H2, P, DivMain } from './style'

const ChartDetail = ({ item, value, color, index }) => {

    return (
        <DivMain index={index}>
            <H2 color={color} index={index} >{item.name}</H2>
            <Div >
                <P color={color} index={index}>{item.percentage}%</P>
                <P color={color} index={index} type="value">{value}</P>
            </Div>
        </DivMain>
    )
}

export default ChartDetail;