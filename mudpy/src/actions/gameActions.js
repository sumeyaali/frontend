import axiosWithAuth from'../utils/axiosWithAuth'
// import axios from "axios"

export const INIT_PLAYER_START = 'INIT_PLAYER_START'
export const INIT_PLAYER_SUCCESS = 'INIT_PLAYER_SUCCESS'
export const INIT_PLAYER_FAILURE = 'INIT_PLAYER_FAILURE'
 
export const PLAYER_MOVE_START = 'PLAYER_MOVE_START'
export const PLAYER_MOVE_SUCCESS = 'PLAYER_MOVE_SUCCESS'
export const PLAYER_MOVE_FAILURE ='PLAYER_MOVE_FAILURE'

export const initWorld = () => {
    return dispatch => {
      dispatch({ type: INIT_PLAYER_START });
      axiosWithAuth()
        .get("https://lambda-mud-test.herokuapp.com/api/adv/init/")
        .then(res => {
          dispatch({ type: INIT_PLAYER_SUCCESS, payload: res.data });
        })
        .catch(err => {
          dispatch({ type: INIT_PLAYER_FAILURE, payload: err });
        });
    };
  };


  export const movePlayer = (direction) => {
      
      return dispatch => {
          dispatch({ type: PLAYER_MOVE_START});
          axiosWithAuth()
          .post("https://lambda-mud-test.herokuapp.com/api/adv/move/",{direction: direction})
          .then(res => {
            dispatch({ type: PLAYER_MOVE_SUCCESS, payload: res.data });
            console.log('DIRECTION',res.data)
          })
          .catch(err => {
              dispatch({ type: PLAYER_MOVE_FAILURE, payload: err })
              console.log('ERROR',err)
          });
      };
  };