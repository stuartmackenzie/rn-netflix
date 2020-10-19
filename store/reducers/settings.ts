import {
  SET_VIDEO_PLAYBACK_SETTINGS,
  SET_DOWNLOAD_SETTINGS,
  RESET_SETTINGS
} from "../actions/actions";
import { VideoPlaybackMode, VideoQuality } from "../../types";

const initialState = {
  videoPlayback: {
    auto: true,
    mode: VideoPlaybackMode.WifiOnly
  },
  downloads: {
    wifiOnly: true,
    smart: true,
    videoQuality: VideoQuality.Standard
  }
};

const setVideoPlaybackSettings = (state, action) => {
  const { videoPlayback } = state;
  const { auto, mode } = action;
  return {
    ...state,
    videoPlayback: { ...videoPlayback, auto, mode }
  };
};

const setDownloadSettings = (state, action) => {
  const { downloads } = state;
  const { wifiOnly, smart, videoQuality } = action;
  return {
    ...state,
    downloads: { ...downloads, wifiOnly, smart, videoQuality }
  };
};

const resetSettings = (state) => {
  return {
    ...state,
    ...initialState
  };
};

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VIDEO_PLAYBACK_SETTINGS:
      return setVideoPlaybackSettings(state, action);
    case SET_DOWNLOAD_SETTINGS:
      return setDownloadSettings(state, action);
    case RESET_SETTINGS:
      return resetSettings(state);
    default:
      return state;
  }
};

export default settingsReducer;
