import AsyncStorage from "@react-native-community/async-storage";
import { SET_USER, CLEAR_USER } from "./actions";

import * as auth from "../../dal/auth";

const USER_STORAGE_KEY = "user";

let LOGOUT_TIMER;

// localId = user id
// idToken = user token
export const parseUser = (data) => {
  const { expiresIn } = data;
  const expirationDate = new Date(new Date().getTime() + +expiresIn * 1000);
  data.expirationDate = expirationDate;
  return data;
};

export const getUserFromState = (state) => {
  const user = state?.auth?.user;
  if (!user) {
    throw new Error("Invalid user");
  }
  return user;
};

const saveUserToStorage = async (user) => {
  try {
    const jsonValue = JSON.stringify(user);
    await AsyncStorage.setItem(USER_STORAGE_KEY, jsonValue);
  } catch (err) {
    throw err;
  }
};

const getUserFromStorage = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(USER_STORAGE_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (err) {
    throw err;
  }
};

const removeUserFromStorage = async () => {
  try {
    await AsyncStorage.removeItem(USER_STORAGE_KEY);
  } catch (err) {
    throw err;
  }
};

const delay = (ms = 2000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

const setLogoutTimer = (expirationTime) => {
  return (dispatch) => {
    LOGOUT_TIMER = setTimeout(() => {
      dispatch(logout());
    }, expirationTime);
  };
};

export const authenticate = (user, expiry?) => {
  return async (dispatch) => {
    try {
      await saveUserToStorage(user);
    } catch (err) {
      console.log("Authenticate Save to Storage", err);
    }
    const expiresIn = expiry || parseInt(user.expiresIn) * 1000;
    dispatch(setLogoutTimer(expiresIn));
    return dispatch({ type: SET_USER, user });
  };
};

export const loadUser = () => {
  return async (dispatch) => {
    await delay(2000);
    const user = await getUserFromStorage();
    if (user) {
      const expiry =
        new Date(user.expirationDate).getTime() - new Date().getTime();
      return dispatch(authenticate(user, expiry));
    } else {
      console.log("No user to load");
      return Promise.resolve();
    }
  };
};

export const login = ({ email, password }) => {
  return async (dispatch) => {
    let data;
    try {
      data = await auth.login({ email, password });
    } catch (err) {
      console.log(err);
      throw err;
    }
    const user = parseUser(data);
    dispatch(authenticate(user));
  };
};

export const register = ({
  email,
  password,
  displayName = "",
  photoUrl = ""
}) => {
  return async (dispatch) => {
    let data;
    try {
      data = await auth.register({ email, password });
    } catch (err) {
      throw err;
    }
    let user = parseUser(data);

    // Update registered user account with displayName and/or photoUrl
    if (displayName || photoUrl) {
      const idToken = user.idToken;
      try {
        data = await auth.updateUser({ idToken, displayName, photoUrl });
      } catch (err) {
        throw err;
      }
      user = parseUser(data);
    }
    return dispatch(authenticate(user));
  };
};

export const logout = () => {
  return async (dispatch) => {
    if (LOGOUT_TIMER) clearTimeout(LOGOUT_TIMER);
    await removeUserFromStorage();
    return dispatch({ type: CLEAR_USER });
  };
};
