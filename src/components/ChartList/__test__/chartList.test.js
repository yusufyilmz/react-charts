

import React from 'react';
import ChartList from '../index';
import { mount } from 'enzyme'
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import Carousel from '../../Carousel';
import Chart from '../../Chart';
import data from '../../../data';
import ReduxThunkMiddleware from 'redux-thunk';
import ReduxPromiseMiddleware from 'redux-promise';

let middlewares = [ReduxThunkMiddleware, ReduxPromiseMiddleware]

describe('CHARTLIST COMPONENT', () => {

    const mockStore = configureMockStore(middlewares);
    const store = mockStore({
        data: {
            items: data
        }
    });

    let wrapper;

    beforeEach(() => {
        wrapper = mount(
            <Provider store={store}>
                <ChartList />
            </Provider>
        );
    });

    test('renders element correctly', () => {
        expect(wrapper.find(Carousel).length).toBe(1)
    })

    test('renders element correctly', () => {
        expect(wrapper.find(Chart).length).toBe(3)
    })

    test('snapchat correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

})
