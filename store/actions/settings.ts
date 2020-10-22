import {
  SET_SETTING,
  SET_VIDEO_QUALITY,
  SET_CELLULAR_DATA_USAGE_AUTO,
  SET_CELLULAR_DATA_USAGE_MODE,
  RESET_SETTINGS
} from "./actions";

export const setSetting = (id: string, value: boolean) => {
  return async (dispatch) => {
    return dispatch({ type: SET_SETTING, id, value });
  };
};

export const setVideoQuality = (id: string) => {
  return async (dispatch) => {
    return dispatch({ type: SET_VIDEO_QUALITY, id });
  };
};

export const setCellularDataUsageAuto = (value: boolean) => {
  return async (dispatch) => {
    return dispatch({ type: SET_CELLULAR_DATA_USAGE_AUTO, value });
  };
};

export const setCellularDataUsageMode = (id: string) => {
  return async (dispatch) => {
    return dispatch({ type: SET_CELLULAR_DATA_USAGE_MODE, id });
  };
};

export const resetSettings = () => {
  return async (dispatch) => {
    return dispatch({ type: RESET_SETTINGS });
  };
};
