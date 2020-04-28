import {
    INIT_PLAYER_START,
    INIT_PLAYER_SUCCESS,
    INIT_PLAYER_FAILURE,
    PLAYER_MOVE_START,
    PLAYER_MOVE_SUCCESS,
    PLAYER_MOVE_FAILURE
    
  } from "../actions/gameActions";


const initialState = {
    error: "",
    room: {},
    player: {},
    isLoading: false,
    isSuccess: false
  };

  export const gameReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case INIT_PLAYER_START:
        return {
          ...state,
          isLoading: true
        };
      case INIT_PLAYER_SUCCESS:
        return {
          ...state,
          isLoading: false,
          player: payload.data
        };
      case INIT_PLAYER_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: payload.error
        };
      case PLAYER_MOVE_START:
        return {
              ...state,
              isLoading: true,
          }
      case PLAYER_MOVE_SUCCESS:
        return {
            isLoading: false,
            player: payload.data
          }
      case PLAYER_MOVE_FAILURE:
        return {
          isLoading: false,
          error: payload.error
        }        
      default:
            return state;
        }
    }