

import React from 'react';
import LineChart from '../index';
import { shallow } from 'enzyme'
import data from '../../../data';

describe('LINECHART COMPONENT', () => {

    let props, wrapper;

    beforeEach(() => {
        props = {
            data: data[0].datas, 
            width: 400,
            height: 200,
            margin: 1,
            color: 'black'
        }

        wrapper = shallow(
            <LineChart {...props} />
        );
    });

    test('renders element correctly', () => {
        expect(wrapper.find('svg').length).toBe(1)
    });

    test('renders props correctly', () => {
        expect(wrapper.find('svg').props()['width']).toBe(props.width)
    });

    test('renders props correctly', () => {
        expect(wrapper.find('svg').props()['height']).toBe(props.height)
    });

    test('snapchat correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

})
