import React, { FC } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

import Theme from "../constants/theme";
import { Clip } from "../models/media";

import Text from "./UI/Text";
import IconTextButton from "./UI/IconTextButton";
import VideoPlayer from "./VideoPlayer";

type ClipItemProps = {
  clip: Clip;
  style?: ViewStyle;
};

const ClipItem: FC<ClipItemProps> = ({ clip, style }) => {
  const actionHandler = (id: string) => {
    console.log(`Action: ${id}`);
  };

  return (
    <View style={{ ...styles.view, ...style }}>
      <VideoPlayer
        style={styles.videoPlayer}
        video={clip.video}
        poster={clip.poster}
      />
      <View style={styles.actions}>
        <IconTextButton
          id="lol"
          style={styles.action}
          textStyle={styles.actionText}
          icon="ios-notifications-outline"
          onPress={actionHandler}
        >
          LOL
        </IconTextButton>
        <IconTextButton
          id="list"
          style={styles.action}
          textStyle={styles.actionText}
          icon="ios-notifications-outline"
          onPress={actionHandler}
        >
          My List
        </IconTextButton>
        <IconTextButton
          id="share"
          style={styles.action}
          textStyle={styles.actionText}
          icon="ios-information-circle-outline"
          onPress={actionHandler}
        >
          Share
        </IconTextButton>
        <IconTextButton
          id="play"
          style={styles.action}
          textStyle={styles.actionText}
          icon="ios-information-circle-outline"
          onPress={actionHandler}
        >
          Play
        </IconTextButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: "column"
  },
  videoPlayer: {
    flex: 1
  },
  actions: {
    flex: 1,
    position: "absolute",
    right: 0,
    bottom: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    zIndex: 100
  },
  action: {
    marginBottom: 20
  },
  actionText: {
    fontFamily: "Cabin-Regular",
    fontSize: 12
  }
});

export default ClipItem;
