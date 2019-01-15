

import React from 'react';
import ChartDetail from '../index';
import { shallow } from 'enzyme'
import data from '../../../data';

describe('CHARTDETAIL COMPONENT', () => {

    let props, wrapper;

    beforeEach(() => {
        props = {
            item: data[0].values[0],
        }
        wrapper = shallow(
            <ChartDetail {...props} />
        );
    });

    test('renders element correctly', () => {
        expect(wrapper.find('div').length).toBe(2)
    });

    test('renders element correctly', () => {
        expect(wrapper.find('p').length).toBe(2)
    });

    test('renders element correctly', () => {
        expect(wrapper.find('h2').length).toBe(1)
    });

    test('renders text correctly', () => {
        expect(wrapper.find('h2').text()).toBe(props.item.name);
    });


    test('renders text correctly', () => {
        expect(wrapper.find('p').at(0).text()).toBe(props.item.percentage + '%');
    });

    test('snapchat correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

})
