

import React from 'react';
import { Dot, Div } from './style';
import _ from 'lodash';

const CarouselDots = ({ activeDotIndex, count }) => {

  return (
    <Div>
      {_.times(count, (i) => <Dot active={activeDotIndex === i} />)}
    </Div>
  );
}

export default CarouselDots