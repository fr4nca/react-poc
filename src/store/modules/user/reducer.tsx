import { SET_USER, CLEAR_USER } from "./types";

const initialState = {
  user: ""
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload
      };
    case CLEAR_USER:
      return {
        ...state,
        user: ""
      };
    default:
      return state;
  }
};
