import { ImageProps } from "react-native";

export enum VideoPlaybackMode {
  WifiOnly = "Wi-Fi Only",
  SaveData = "Save Data",
  MaximumData = "Maximum Data"
}

export enum VideoQuality {
  Standard = "Standard",
  Higher = "Higher"
}

export type ImageRef = ImageProps | Readonly<ImageProps>;
