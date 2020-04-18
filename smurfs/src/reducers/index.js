import { 
    START_FETCH, 
    SUCCESSFUL_FETCH, 
    FAILED_FETCH,
    ADD_SMURF,
    SMURF_ADDED,
    SMURF_FAILED
} from "../actions";

const initialState = {
    Smurfs: [],
    isFetching: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case START_FETCH:
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case SUCCESSFUL_FETCH:
            return {
                ...state,
                isFetching: false,
                error: '',
                Smurfs: action.payload
            };
        case FAILED_FETCH:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
            case ADD_SMURF:
                return {
                    ...state,
                    isFetching: true,
                    error: ''
                };
            case SMURF_ADDED:
                    return {
                        ...state,
                        isFetching: false,
                        Smurfs: action.payload
                    };
            case SMURF_FAILED:
                return {
                    ...state,
                    isFetching: false,
                    error: action.payload
                }    
                    
        default:
            return state
    }
}
export default reducer;