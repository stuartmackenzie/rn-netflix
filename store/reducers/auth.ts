import { SET_USER, CLEAR_USER } from "../actions/actions";

const initialState = {
  user: null
};

const setUser = (state, action) => {
  return {
    ...state,
    user: action.user
  };
};

const clearUser = (state, action) => {
  return {
    ...state,
    ...initialState
  };
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return setUser(state, action);
    case CLEAR_USER:
      return clearUser(state, action);
    default:
      return state;
  }
};

export default authReducer;
