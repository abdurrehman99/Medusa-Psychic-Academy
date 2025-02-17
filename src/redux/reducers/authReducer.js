import { SET_CURRENT_USER } from "../types";

const initialState = {
  isAuthenticated: false,
  user: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        isAuthenticated: true,
        user: action.payload,
      };
    default:
      return state;
  }
}
