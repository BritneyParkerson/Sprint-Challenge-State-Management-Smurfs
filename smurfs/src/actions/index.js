import axios from 'axios';
export const START_FETCH = 'START_FETCH';
export const SUCCESSFUL_FETCH = 'SUCCESSFUL_FETCH';
export const FAILED_FETCH = 'FAILED_FETCH';

export const ADD_SMURF = "ADD_SMURF";
export const SMURF_ADDED = "SMURF_ADDED";
export const SMURF_FAILED = "SMURF_FAILED";

export const fetchSmurfs = () =>  (dispatch) => {
    dispatch({type: START_FETCH});
    axios.get('http://localhost:3333/smurfs')
    .then(res => dispatch({
        type: SUCCESSFUL_FETCH, payload:res.data
    }))
    .catch((err) => dispatch ({
        type: FAILED_FETCH, 
        payload: err.response
    }))
} 

export const addSmurf = (smurf) => (dispatch) => {
    dispatch({ type: ADD_SMURF })
    axios
    .post('http://localhost:3333/smurfs', smurf)
    .then((res) => {
        dispatch({
            type: SMURF_ADDED, 
            payload: res.data
        });
    })
    .catch((error) => {
        dispatch({
            type: SMURF_FAILED, 
            payload: error.response})
    })
}

