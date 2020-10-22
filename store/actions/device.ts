import * as FileSystem from "expo-file-system";

export const loadFileSystemInfo = () => {
  return async (dispatch) => {
    const documentDirectory = FileSystem.documentDirectory;
    const cacheDirectory = FileSystem.cacheDirectory;

    // Android: 17179869184
    // iOS: 17179869184
    const freeDiskStorage = await FileSystem.getFreeDiskStorageAsync();

    // Android: 17179869184
    // iOS: 17179869184
    const totalDiskCapacity = await FileSystem.getTotalDiskCapacityAsync();

    const info = {
      documentDirectory,
      cacheDirectory,
      freeDiskStorage,
      totalDiskCapacity
    };

    console.log(info);
  };
};

export const getStorageInfo = () => {
  return async (dispatch) => {
    console.log("TODO: getStorageInfo");
  };
};

export const clearStorage = () => {
  return async (dispatch) => {
    console.log("TODO: clearStorage");
  };
};
