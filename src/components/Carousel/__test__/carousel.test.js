

import React from 'react';
import Carousel from '../index';
import CarouselButton from '../../CarouselButton';
import Chart from '../../Chart';
import { mount } from 'enzyme'
import data from '../../../data';
import { pageMove}  from '../../../constants/chartConstants';

describe('CAROUSEL COMPONENT', () => {

    let props, wrapper;

    beforeEach(() => {
        props = {
            item: data[0]
        }

        wrapper = mount(
            <Carousel>
                <Chart {...props} />
            </Carousel>
        );
    });

    test('renders element correctly', () => {
        expect(wrapper.find('SliderDiv').length).toBe(1)
    });

    test('renders element correctly', () => {
        expect(wrapper.find(CarouselButton).length).toBe(0)
    });

    test('renders element correctly', () => {
        wrapper.setState({ buttonVisiblity: true });
        expect(wrapper.find(CarouselButton).length).toBe(2)
    });

    test('renders element correctly', () => {
        expect(wrapper.find('SlideDiv').length).toBe(1)
    });

    test('renders element correctly', () => {
        wrapper.setState({ buttonVisiblity: true });
        expect(wrapper.find(CarouselButton).length).toBe(2)
    });

    test('renders props correctly', () => {
        wrapper.setState({ translateValue: 100 });
        expect(wrapper.find('SliderWrapperDiv').props()['translateValue']).toBe(pageMove)
    });

    test('renders props correctly', () => {
        wrapper.setState({ buttonVisiblity: true });
        expect(wrapper.find(CarouselButton).at(0).props()['type']).toBe('left')
    });

    // test('snapchat correctly', () => {
    //     expect(wrapper).toMatchSnapshot();
    // });

})
