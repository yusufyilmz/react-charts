

import React from 'react';
import ChartPath from '../index';
import { shallow } from 'enzyme'
import data from '../../../data';

describe('CHARTPATH COMPONENT', () => {

    let props, wrapper;

    beforeEach(() => {
        props = {
            height: 400,
            width: 300,
            radius :130,
            color: 'black',
            data: data[0].datas
        }

        wrapper = shallow(
            <ChartPath {...props} />
        );
    });

    test('renders element correctly', () => {
        expect(wrapper.find('g').length).toBe(1)
    });

    test('renders element correctly', () => {
        expect(wrapper.find('path').length).toBe(1)
    });

    test('renders props correctly', () => {
        expect(wrapper.find('path').props()['fill']).toBe(props.color)
    });

    test('renders props correctly', () => {
        expect(wrapper.find('path').props()['d']).toBeTruthy()
    });

    test('renders state correctly', () => {
        wrapper.find('path').simulate('mouseover');
        expect(wrapper.state().isHovered).toEqual(true)
    });

    test('snapchat correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

})
