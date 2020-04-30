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
  player: { 
      name: '',
      title: '',
      description: '',
      players: [],
      err_msg: ''},
  isLoading: false,
  isSuccess: false
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_PLAYER_START:
      return {
        ...state,
        isLoading: true
      };
    case INIT_PLAYER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        player: action.payload
      };
    case INIT_PLAYER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case PLAYER_MOVE_START:
       
      return {
            ...state,
            isLoading: true,
        }
    case PLAYER_MOVE_SUCCESS:
      console.log("XXXPLAYERXXX",action.payload)
      return {
          isLoading: false,
          player: action.payload
        }
    case PLAYER_MOVE_FAILURE:
      return {
        isLoading: false,
        error: action.payload
      }        
    default:
          return state;
      }
  }

  export default gameReducer;