import React, { FC } from "react";
import { StyleSheet, View, Image, ViewStyle } from "react-native";

import Theme from "../constants/theme";
import { Media } from "../models/media";

import Text from "./UI/Text";
import IconTextButton from "./UI/IconTextButton";
import WebVideoPlayer from "./WebVideoPlayer";
import Tags from "./Tags";

type MediaItemProps = {
  media: Media;
  style?: ViewStyle;
};

const MediaItem: FC<MediaItemProps> = ({ media, style }) => {
  const actionHandler = (id: string) => {
    console.log(`Action: ${id}`);
  };

  const tagHandler = (tag: string) => {
    console.log(`Tag: ${tag}`);
  };

  return (
    <View style={{ ...styles.view, ...style }}>
      <WebVideoPlayer style={styles.videoPlayer} uri={media.videoUri} />
      <View style={styles.info}>
        <Image style={styles.titleImage} source={media.titleImage} />
        <Text style={styles.release}>{media.release}</Text>
        <Text style={styles.title}>{media.title}</Text>
        <Text style={styles.text}>{media.text}</Text>
        <Tags style={styles.tags} tags={media.tags} onPress={tagHandler} />
        <View style={styles.actions}>
          <IconTextButton
            id="remind"
            style={styles.action}
            textStyle={styles.actionText}
            icon="ios-notifications-outline"
            onPress={actionHandler}
          >
            Remind Me
          </IconTextButton>
          <IconTextButton
            id="info"
            style={styles.action}
            textStyle={styles.actionText}
            icon="ios-information-circle-outline"
            onPress={actionHandler}
          >
            Info
          </IconTextButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: "column",
    marginTop: 20
  },
  videoPlayer: {
    flex: 1
  },
  video: {},
  info: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingHorizontal: 10,
    marginTop: 20
  },
  actions: {
    position: "absolute",
    right: 10,
    top: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: 140
  },
  action: {},
  actionText: {
    fontFamily: "Cabin-Regular",
    fontSize: 12
  },
  titleImage: {
    width: 200,
    height: 80,
    marginBottom: 10
  },
  release: {
    fontSize: 14,
    fontFamily: Theme.fontFamily,
    color: Theme.textColor,
    marginBottom: 15
  },
  title: {
    fontSize: 16,
    fontFamily: Theme.fontFamilyBold,
    color: Theme.secondary,
    marginBottom: 6
  },
  text: {
    fontSize: 14,
    fontFamily: Theme.fontFamily,
    color: Theme.textColor
  },
  tags: {},
  tag: {
    color: Theme.secondary,
    fontSize: 14
  },
  dot: {
    color: "red"
  }
});

export default MediaItem;
