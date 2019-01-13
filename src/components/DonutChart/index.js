import * as React from "react";
import * as d3 from "d3";
import LineChart from '../LineChart';
import { Text, ValueText } from './style';
import uniqueId from 'lodash.uniqueid';
import ChartPath from '../ChartPath';

const Slice = props => {
    let { pie, colors } = props;

    let interpolateInner = d3.interpolateRgb(colors[0], colors[1]);
    return pie.map((slice, index) => {
        let sliceColor = interpolateInner(index / (pie.length - 1));
        return (
            <ChartPath
                key={uniqueId()}
                {...props}
                radius={130}
                data={slice}
                color={sliceColor} />
        );
    });
};

const DonutChart = ({ values, datas, title, value, colors, width, height }) => {


    let pie = d3.pie()(values);

    return (
        <div>
            <svg height={height} width={width}>
                <g transform={`translate(${width / 2},${height / 2})`}>
                    <Slice
                        key={uniqueId()}
                        pie={pie}
                        colors={colors} />
                    <Text
                        key={uniqueId()}
                        y="-1em">
                        {title}
                    </Text>
                    <ValueText
                        key={uniqueId()}
                        y="0.6em">
                        {value}
                    </ValueText>
                    <LineChart
                        data={datas}
                        width={400}
                        height={200}
                        margin={1}
                        color={colors[0]}
                    />
                </g>
            </svg>
        </div>
    );
};

export default DonutChart;

