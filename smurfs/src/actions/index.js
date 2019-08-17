import axios from 'axios';

// WORK FROM BEFORE THE TL HOURS

// export const ADD_SMURF_PENDING = "ADD_SMURF_PENDING";
// export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
// export const ADD_SMURF_FAIL = "ADD_SMURF_FAIL";

// export const addSmurf = newSmurf => {
//     dispatch ({type: ADD_SMURF_PENDING })
//     axios
//     .get(`http://localhost:3333/smurfs`, newSmurf)
//     .then(response => {
//         dispatch({ type: ADD_SMURF_SUCCESS, payload: response.data})
//     })
//     .catch(error => {
//         dispatch({ type: ADD_SMURF_FAIL, payload: error })
//     })
// };

export const GET_SMURFS = 'GET_SMURFS';
export const ERROR = 'ERROR';
export const ADD_SMURF = 'ADD_SMURF';

export const getSmurfs = () => dispatch => {
    axios
    .get('https://localhost:3333/smurfs')
    .then(response => {
        console.log(response.data)
        dispatch({ type: GET_SMURFS, payload: response.data })
    })
   .catch(error => {
       dispatch({ type: ERROR, payload: error.errorMessage })
   })
}

export const addSmurf = newSmurf => dispatch => {
    axios
    .post('http://localhost:3333/smurfs', newSmurf)
    .then(response =>  {
        console.log(response.data)
        dispatch({type: ADD_SMURF, payload: response.data })
    })
    .catch(error => {
     dispatch({ type: ERROR, payload: error.errorMessage })
 })
}