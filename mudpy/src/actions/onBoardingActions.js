import axios from "axios";
// import beURL from '../../utils/beURL'
// import axiosWithAuth from "../utils/axiosWithAuth";
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const VERIFY_START = 'VERIFY_START';
export const VERIFY_SUCCESS = 'VERIFY_SUCCESS';
export const VERIFY_FAILURE = 'VERIFY_FAILURE';


// const baseURL = `${beURL}auth/`



export const loginAction = (user) => dispatch => {
    dispatch({ type: LOGIN_START })
    axios
        .post('https://lambda-mud-test.herokuapp.com/api/login/', user)
        .then(res => {
            localStorage.setItem("token", res.data.key)
            // localStorage.setItem('user_id', res.data.format.id)
            dispatch({ type: LOGIN_SUCCESS, payload: res.data })
            console.log("LOGIN RES", res)
        })
        .catch(err => {
            dispatch({type: LOGIN_FAILURE, payload: err })
        })
}

export const registerAction = (user) => dispatch => {
    dispatch({ type: REGISTER_START });
    axios
        .post('https://lambda-mud-test.herokuapp.com/api/registration/', user)
        .then(res => {
            dispatch({ type: REGISTER_SUCCESS, payload: res.data });
            // localStorage.setItem("token", res.data.token)
            console.log("REGISTER RES",res)
        })
        .catch(err => {
            dispatch({ type: REGISTER_FAILURE, payload: err })
        });
};

