

import React from 'react';
import CarouselDots from '../index';
import { shallow } from 'enzyme'

describe('CAROUSELDOTS COMPONENT', () => {

    let props, wrapper;

    beforeEach(() => {
        props = {
            activeDotIndex: 0,
            count: 3
        }
        wrapper = shallow(
            <CarouselDots {...props} />
        );
    });

    test('renders element correctly', () => {
        expect(wrapper.find('Dot').length).toBe(3)

    });


    test('renders element correctly', () => {
        expect(wrapper.find('div').length).toBe(1)

    });
    
    // test('snapchat correctly', () => {
    //     expect(wrapper).toMatchSnapshot();
    // });

})
