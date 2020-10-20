import { loadUser, login, register, logout } from "./auth";
import {
  setSetting,
  setVideoQuality,
  setCellularDataUsageAuto,
  setCellularDataUsageMode,
  resetSettings
} from "./settings";

import { getStorageInfo, clearStorage } from "./device";

export {
  loadUser,
  login,
  register,
  logout,
  setSetting,
  setVideoQuality,
  setCellularDataUsageAuto,
  setCellularDataUsageMode,
  resetSettings,
  getStorageInfo,
  clearStorage
};
