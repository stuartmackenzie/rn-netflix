import {
  SET_SETTING,
  SET_VIDEO_QUALITY,
  SET_CELLULAR_DATA_USAGE_AUTO,
  SET_CELLULAR_DATA_USAGE_MODE,
  RESET_SETTINGS
} from "../actions/actions";

import { VideoPlaybackMode, VideoQuality } from "../../types";

import settingsData from "../../data/settings";
import dataUsageData from "../../data/data-usage";
import videoQualityData from "../../data/video-quality";

const initialState = {
  settingsItems: settingsData.items,
  dataUsageItems: dataUsageData.items,
  videoQualityItems: videoQualityData.items,
  videoPlayback: {
    cellularDataUsage: {
      auto: true,
      mode: VideoPlaybackMode.SaveData
    }
  },
  downloads: {
    wifiOnly: true,
    smart: true,
    videoQuality: VideoQuality.Standard
  }
};

// Set a generic top level setting
const setSetting = (state, action) => {
  const { settingsItems, downloads } = state;
  const { id, value } = action;

  let key;

  if (id === "wifi-only") {
    key = "wifiOnly";
  } else if (id === "smart-downloads") {
    key = "smart";
  } else {
    return state;
  }

  const items = settingsItems.map((item) => {
    return item.id !== id ? item : { ...item, value };
  });

  return {
    ...state,
    settingsItems: items,
    downloads: { ...downloads, [key]: value }
  };
};

const setVideoQuality = (state, action) => {
  const { settingsItems, videoQualityItems, downloads } = state;
  const { id } = action;
  const videoQuality =
    id === "standard" ? VideoQuality.Standard : VideoQuality.Higher;

  const vqItems = videoQualityItems.map((item) => {
    const value = item.id === id;
    return { ...item, value };
  });

  const items = settingsItems.map((item) => {
    return item.id === "video-quality" ? { ...item, text: videoQuality } : item;
  });

  return {
    ...state,
    settingsItems: items,
    videoQualityItems: vqItems,
    downloads: { ...downloads, videoQuality }
  };
};

const setCellularDataUsageAuto = (state, action) => {
  const { settingsItems, dataUsageItems, videoPlayback } = state;
  const { value } = action;
  const cellularDataUsage = videoPlayback.cellularDataUsage;

  const duItems = dataUsageItems.map((item) => {
    if (item.type === "Switch") return { ...item, value };
    return { ...item, enabled: !value };
  });

  const text = value ? "Automatic" : cellularDataUsage.mode;

  const items = settingsItems.map((item) => {
    return item.id === "cellular-data-usage" ? { ...item, text } : item;
  });

  return {
    ...state,
    settingsItems: items,
    dataUsageItems: duItems,
    videoPlayback: {
      ...videoPlayback,
      cellularDataUsage: { ...cellularDataUsage, auto: value }
    }
  };
};

const setCellularDataUsageMode = (state, action) => {
  const { settingsItems, dataUsageItems, videoPlayback } = state;
  const { id } = action;
  const cellularDataUsage = videoPlayback.cellularDataUsage;

  // If Auto, do not allow changing of mode
  if (cellularDataUsage.auto) return state;

  const mode =
    id === "wifi-only"
      ? VideoPlaybackMode.WifiOnly
      : id === "maximum-data"
      ? VideoPlaybackMode.MaximumData
      : VideoPlaybackMode.SaveData;

  const duItems = dataUsageItems.map((item) => {
    if (item.type !== "Option") return item;
    const value = item.id === id;
    return { ...item, value };
  });

  const items = settingsItems.map((item) => {
    return item.id === "cellular-data-usage" ? { ...item, text: mode } : item;
  });

  return {
    ...state,
    settingsItems: items,
    dataUsageItems: duItems,
    videoPlayback: {
      ...videoPlayback,
      cellularDataUsage: { ...cellularDataUsage, mode }
    }
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
    case SET_SETTING:
      return setSetting(state, action);
    case SET_VIDEO_QUALITY:
      return setVideoQuality(state, action);
    case SET_CELLULAR_DATA_USAGE_AUTO:
      return setCellularDataUsageAuto(state, action);
    case SET_CELLULAR_DATA_USAGE_MODE:
      return setCellularDataUsageMode(state, action);
    case RESET_SETTINGS:
      return resetSettings(state);
    default:
      return state;
  }
};

export default settingsReducer;
