import React, { FC } from "react";
import { StyleSheet, View, ViewStyle, Dimensions } from "react-native";
import { WebView } from "react-native-webview";

type WebVideoPlayerProps = {
  uri: string;
  style?: ViewStyle;
  videoStyle?: ViewStyle;
};

const WebVideoPlayer: FC<WebVideoPlayerProps> = ({
  uri,
  style,
  videoStyle
}) => {
  return (
    <View style={{ ...styles.view, ...style }}>
      <WebView
        style={{ ...styles.video, ...videoStyle }}
        javaScriptEnabled={true}
        source={{ uri }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    height: (Dimensions.get("window").width * 9) / 16,
    width: Dimensions.get("window").width,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    overflow: "hidden"
  },
  video: {
    width: "100%",
    height: "100%"
  }
});

export default WebVideoPlayer;
