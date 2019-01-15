

import React from 'react';
import DonutChart from '../index';
import { shallow } from 'enzyme'
import data from '../../../data';

describe('DONUTCHART COMPONENT', () => {

    let props, wrapper;

    beforeEach(() => {
        let item = data[0]
        props = {
            height: 400,
            width: 300,
            title: item.title,
            colors: item.values.sort().map(data => data.color),
            value: '',
            values: item.values.sort().map(data => data.percentage),
            datas: item.datas
        }

        wrapper = shallow(
            <DonutChart {...props} />
        );
    });

    test('renders element correctly', () => {
        expect(wrapper.find('text').length).toBe(2)

    });

    test('renders element correctly', () => {
        expect(wrapper.find('svg').length).toBe(1)
    });

    test('renders text correctly', () => {
        expect(wrapper.find('text').at(0).text()).toBe(props.title)
    });

    test('renders text correctly', () => {
        expect(wrapper.find('text').at(1).text()).toBe(props.value)
    });

    test('renders prop correctly', () => {
        expect(wrapper.find('svg').props()['width']).toBe(props.width)
    });
    
    test('renders prop correctly', () => {
        var sty = `translate(${props.width / 2},${props.height / 2})`
        expect(wrapper.find('g').props()['transform']).toBe(sty)
    });

    // test('snapchat correctly', () => {
    //     expect(wrapper).toMatchSnapshot();
    // });

})
