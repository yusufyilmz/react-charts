

import React from 'react';
import {App} from '../index';
import ChartList from '../../ChartList';
import { shallow, mount } from 'enzyme'
import data from '../../../data';

import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import ReduxThunkMiddleware from 'redux-thunk';
import ReduxPromiseMiddleware from 'redux-promise';

let middlewares = [ReduxThunkMiddleware, ReduxPromiseMiddleware]

describe('APP COMPONENT', () => {

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
                <App />
            </Provider>
        );
    });


    test('renders element correctly', () => {
        expect(wrapper.find('Container').length).toBe(1)
    });

    test('renders element correctly', () => {
        expect(wrapper.find(ChartList).length).toBe(1)
    });

    // test('snapchat correctly', () => {
    //     expect(wrapper).toMatchSnapshot();
    // });

})
