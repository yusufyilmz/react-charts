

import React from 'react';
import CarouselButton from '../index';
import { shallow } from 'enzyme'

describe('CAROUSELBUTTON COMPONENT', () => {

    let props, wrapper;

    beforeEach(() => {
        props = {
            type: 'left',
            onClick: jest.fn()
        }
        wrapper = shallow(
            <CarouselButton {...props} />
        );
    });

    test('renders element correctly', () => {
        expect(wrapper.find('div').length).toBe(1)

    });

    test('renders classname correctly', () => {
        expect(wrapper.find('i').hasClass(`fa fa-angle-double-${props.type}`)).toBeTruthy()
    });

    test('renders onclick correctly', () => {
        wrapper.find('div').simulate('click');
        expect(props.onClick.mock.calls.length).toEqual(1);
    });

    // test('snapchat correctly', () => {
    //     expect(wrapper).toMatchSnapshot();
    // });

})
