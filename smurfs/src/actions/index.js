import React from 'react';
import axios from 'axios';

export const ADD_SMURF_PENDING = "ADD_SMURF_PENDING";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAIL = "ADD_SMURF_FAIL";

export const addSmurf = newSmurf => {
    dispatch ({type: ADD_SMURF_PENDING })
    axios
    .get(`https://localhost:3333/smurfs`, newSmurf)
    .then(response => {
        dispatch({ type: ADD_SMURF_SUCCESS, payload: response.data})
    })
    .catch(error => {
        dispatch({ type: ADD_SMURF_FAIL, payload: error })
    })
};