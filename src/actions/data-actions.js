import * as actionTypes from '../constants/actionTypes';
import '../api/marfeelAPI';
import axios from 'axios';


const fetchDataSuccess = (data) => {
    return {
        type: actionTypes.FETCH_DATA_SUCCESS,
        payload: data
    }
}


const fetchDataError = (error) => {
    return {
        type: actionTypes.FETCH_DATA_ERROR,
        payload: error
    }
}


export const fetchData = () => async (dispatch, getState) => {

    try {

        const response = await axios.get('/api/v1/data')

        if(response.status=== 200 && response.data.status === 'OK'){
            return dispatch(fetchDataSuccess(response.data.items))
        }

        dispatch(fetchDataError(response.data.message))
    }
    catch (e) {
        dispatch(fetchDataError("An error occured"))
    }
}
