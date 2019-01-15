import dataReducer from '../../reducers/data-reducer';
import * as actionTypes from '../../constants/actionTypes';


let initialState;

beforeEach(() => {
    initialState = {
        items: [],
        error: false,
        message: ''
    }
});

describe('INITIAL_STATE', () => {
    test('is correct', () => {
        const action = { type: 'dummy_action' };
        expect(dataReducer(undefined, action)).toEqual(initialState);
    });
});


describe('FETCH_DATA_SUCCESS', () => {
    test('returns correct state', () => {
        var payload = [{ id: 1, name: test }]
        const action = { type: actionTypes.FETCH_DATA_SUCCESS, payload };
        expect(dataReducer(undefined, action)).toEqual({ ...initialState, items: payload });

    });
});

describe('FETCH_DATA_ERROR', () => {
    test('returns correct state', () => {
        var payload = "test error"
        const action = { type: actionTypes.FETCH_DATA_ERROR, payload };
        expect(dataReducer(undefined, action)).toEqual({ ...initialState, error: true, message: payload });

    });
});

describe('RESET_RESULT', () => {
    test('returns correct state', () => {
        const action = { type: actionTypes.RESET_RESULT };
        expect(dataReducer(undefined, action)).toEqual({ ...initialState });

    });
});

