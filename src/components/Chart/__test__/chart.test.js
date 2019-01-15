

import React from 'react';
import Chart from '../index';
import DonutChart from '../../DonutChart';
import ChartDetail from '../../ChartDetail';
import data from '../../../data';
import { mount } from 'enzyme'

describe('CHART COMPONENT', () => {

    let props, wrapper;

    beforeEach(() => {
        props = {
            item: data[0],
        }
        wrapper = mount(
            <Chart {...props} />
        );
    });

    test('renders element correctly', () => {
        expect(wrapper.find(DonutChart).length).toBe(1)

    });

    test('renders element correctly', () => {
        expect(wrapper.find(ChartDetail).length).toBe(2)

    });

    test('renders element correctly', () => {
        expect(wrapper.find('ChartDiv').length).toBe(1)
    });

    test('renders props correctly', () => {
        expect(wrapper.find(DonutChart).props()['height']).toBe(400);
        expect(wrapper.find(DonutChart).props()['width']).toBe(300);
        expect(wrapper.find(DonutChart).props()['title']).toBe(props.item.title);
    });

    // test('snapchat correctly', () => {
    //     expect(wrapper).toMatchSnapshot();
    // });

})
