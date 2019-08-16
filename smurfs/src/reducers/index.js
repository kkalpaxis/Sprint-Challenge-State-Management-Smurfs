import { ADD_SMURF_PENDING, ADD_SMURF_SUCCESS, ADD_SMURF_FAIL } from "../actions/index";

const initialState = {

}

export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_SMURF_PENDING:
        default:
            return state
    }
    
};

export default rootReducer