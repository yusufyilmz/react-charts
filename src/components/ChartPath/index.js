
import * as React from "react";
import * as d3 from "d3";

class ChartPath extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHovered: false
        };
    }

    onMouseOver = () => {
        this.setState({
            isHovered: true
        });
    };

    onMouseOut = () => {
        this.setState({
            isHovered: false
        });
    };
    calculateLineD = () => {
        let { data, width, height, margin  } = this.props;
        const h = height - 2 * margin, w = width - 2 * margin
        const x = d3.scaleLinear()
            .range([75, w - 140])
            .domain(d3.extent(data, d => d.id))
        const y = d3.scaleLinear()
            .range([h - 150, 10])
            .domain([0, d3.max(this.props.data, d => d.value)])
        return d3.line()
            .x(d => x(d.id))
            .y(d => y(d.value))
            .curve(d3.curveCatmullRom.alpha(0.0001))
    }

    calculatePieD  = () => {
        let { radius} = this.props;
        const outerRadius = this.state.isHovered ? this.props.radius * 1.1 : radius;
        const innerRadius = radius * 0.9;
        return d3
            .arc()
            .innerRadius(innerRadius)
            .outerRadius(outerRadius)
            .padAngle(0.01)
            .cornerRadius(2);
    }
    render() {
        let {  color, data, type, strokeColor  } = this.props;

        return (
            <g>
                <path
                    stroke={strokeColor}
                    strokeWidth={2}
                    d={type === 'line' ? this.calculateLineD()(data) : this.calculatePieD()(data) }
                    fill={color}
                    onMouseOver={this.onMouseOver}
                    onMouseOut={this.onMouseOut}
                >
                </path>
            </g>
        );
    }
}


export default ChartPath;