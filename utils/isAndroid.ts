import { Platform } from "react-native";

const isAndroid = (): boolean => {
  return Platform.OS === "android";
};

export default isAndroid;
