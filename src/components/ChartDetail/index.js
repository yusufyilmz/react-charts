import React from 'react';
import { Div, H2, P} from './style'

const ChartDetail = ({ item, value, color, index }) => {

    return (
        <div>
            <H2 color={color} index={index} >{item.name}</H2>
            <Div index={index}>
                <P color={color} index={index}>{item.percentage}%</P>
                <P color={color} index={index} type="value">{value}</P>
            </Div>
        </div>
    )
}

export default ChartDetail;