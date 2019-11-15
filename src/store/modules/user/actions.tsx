import { SET_USER, CLEAR_USER } from "./types";

export const setUser = (user: String) => {
  return {
    type: SET_USER,
    payload: user
  };
};

export const clearUser = () => {
  return {
    type: CLEAR_USER
  };
};
