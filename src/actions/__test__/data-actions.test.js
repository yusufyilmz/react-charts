import * as actionTypes from '../../constants/actionTypes';
import * as actions from '..';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import moxios from 'moxios';

const middlewares = [thunk, promise];
const mockStore = configureMockStore(middlewares);


describe('ACTIONS', () => {

    let store;


    beforeEach(function () {
        store = mockStore({ })
        moxios.install();
    });

    afterEach(function () {
        moxios.uninstall();
    });


    test('fetchData', () => {

        var response = {
            status: 'OK',
            items: [
                {id: 0, name: 'test'}
            ]
        }

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response
            });
        });

        const expectedActions = [
            {
                type: actionTypes.FETCH_DATA_SUCCESS, payload: response.items
            },
        ];

        return store.dispatch(actions.fetchData()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });

    })

})