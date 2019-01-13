
import * as actionTypes from '../constants/actionTypes';

const initialState = {
    items: [],
    error: false,
    message: ''
}

export default function (state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_DATA_SUCCESS:
            return {
                ...state,
                items: action.payload,
                error: false,
            }
        case actionTypes.FETCH_DATA_ERROR:
            return {
                ...state,
                error: true,
                message: action.payload
            }
        default:
            return state;
    }

}