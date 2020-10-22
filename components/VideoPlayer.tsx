import React, { FC } from "react";
import {
  StyleSheet,
  View,
  ViewStyle,
  Dimensions,
  ImageProps
} from "react-native";
import { Video, AVPlaybackNativeSource } from "expo-av";
import VideoPlayer from "expo-video-player";

type UIVideoPlayerProps = {
  video?: AVPlaybackNativeSource;
  poster?: ImageProps | Readonly<ImageProps>;
  style?: ViewStyle;
};

const UIVideoPlayer: FC<UIVideoPlayerProps> = ({ video, poster, style }) => {
  return (
    <View style={{ ...styles.view, ...style }}>
      <VideoPlayer
        videoProps={{
          shouldPlay: false,
          resizeMode: Video.RESIZE_MODE_CONTAIN,
          source: video,
          posterSource: poster,
          posterStyle: {
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height - 170
          },
          usePoster: true,
          rate: 1.0,
          volume: 1.0,
          isMuted: false
        }}
        height={Dimensions.get("window").height - 170}
        inFullscreen={false}
        showControlsOnLoad={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "red"
  }
});

export default UIVideoPlayer;
