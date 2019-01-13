
import * as React from "react";
import ChartPath from '../ChartPath';

class LineChart extends React.Component {
    render() {
        let { width, height, color } = this.props
        return (
            <svg width={width} x="-10.5em" y="1.5em" height={height}>
                <ChartPath
                    {...this.props}
                    radius={130}
                    strokeColor={color}
                    color={"none"}
                    type="line"
                />
            </svg>
        )
    }
}

export default LineChart;
