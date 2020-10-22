import { loadUser, login, register, logout } from "./auth";
import {
  setSetting,
  setVideoQuality,
  setCellularDataUsageAuto,
  setCellularDataUsageMode,
  resetSettings
} from "./settings";

import { loadFileSystemInfo, getStorageInfo, clearStorage } from "./device";

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
  loadFileSystemInfo,
  getStorageInfo,
  clearStorage
};
