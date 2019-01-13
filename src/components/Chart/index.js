import React from 'react';
import DonutChart from '../DonutChart';
import ChartDetail from '../ChartDetail';
import { ChartDiv, ChartDetailDiv } from './style'
import uniqueId from 'lodash.uniqueid';


const calculateChartValue = (totalValue, percentage, type) => {
    let value = (totalValue * percentage / 100).toLocaleString().replace(/,/g, '.');
    return `${value} ${type === 'euro' ? '\u20AC' : ''}`
}

const calculateDetailValue = (totalValue, type) => {
    let value = totalValue.toLocaleString().replace(/,/g, '.');
    return `${value} ${type === 'euro' ? '\u20AC' : ''}`
}


const Chart = ({ item }) => {
    return (
        <ChartDiv>
            <DonutChart
                height={400}
                width={300}
                title={item.title}
                colors={item.values.sort().map(data => data.color)}
                value={calculateDetailValue(item.totalValue, item.valueType)}
                values={item.values.sort().map(data => data.percentage)}
                datas={item.datas} />
            <ChartDetailDiv>
                {item.values.map((value, i) =>
                    <ChartDetail
                        key={uniqueId()}
                        index={i}
                        item={value}
                        value={calculateChartValue(item.totalValue, value.percentage, item.valueType)}
                        color={value.color} />
                )}
            </ChartDetailDiv>
            <hr />
        </ChartDiv>
    )
}

export default Chart;