import React from 'react';
import ChartContainer from '../../containers/chartContainer';
import Chart from '../Chart';
import Carousel from '../Carousel/index';
import  uniqueId from 'lodash.uniqueid';

const ChartList = () => {
    return (
        <ChartContainer>
            {({ items }) => (
                <Carousel >
                    {items.map(item => <Chart key={uniqueId()} item={item} />)}
                </Carousel>
            )}
        </ChartContainer>
    )
}

export default ChartList;
