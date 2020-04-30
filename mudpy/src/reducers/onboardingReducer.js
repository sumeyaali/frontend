import { 
    LOGIN_START, 
    LOGIN_SUCCESS, 
    LOGIN_FAILURE, 
    REGISTER_START, 
    REGISTER_SUCCESS, 
    REGISTER_FAILURE,
} from '../actions/onboardingActions'

const initialState = {
    isLoading: false,
    error: '',
    user: {},
    isRegistering: ''
}

export const onboardingReducer = (state = initialState, action) => {
    switch(action.payload) {

        case LOGIN_START:
            return {
                ...state,
                isLoading: true,
                };
        case LOGIN_SUCCESS: 
            return {
                ...state,
                user: action.payload,
                isLoading: false,
                };
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
                };
      
    //  Register Reducers
        case REGISTER_START:
            return {
                ...state,
                isRegistering: true,
                };
        case REGISTER_SUCCESS: 
            return {
                ...state,
                isRegistering: false,
                user: action.payload
                };
        case REGISTER_FAILURE:
            return {
                ...state,
                isRegistering: false,
                error: action.payload, 
                };
        default:
            return state;
}
}
export default onboardingReducer;