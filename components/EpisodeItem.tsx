import React, { FC } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity
} from "react-native";

import Theme from "../constants/theme";
import { IEpisode } from "../models/media";

import IonIcon from "./UI/IonIcon";
import Text from "./UI/Text";
import PlayRing from "./Svg/PlayRing";

type EpisodeItemProps = {
  item: IEpisode;
  onPress?: (id: string) => void;
  onDownload?: (id: string) => void;
};

const EpisodeItem: FC<EpisodeItemProps> = ({ item, onPress, onDownload }) => {
  const { id, title, image, ep, progress, synopsis, duration } = item;

  return (
    <View style={styles.view}>
      <View style={styles.topContainer}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => onPress(id)}
          delayPressIn={0}
        >
          <ImageBackground style={styles.image} source={image}>
            <PlayRing style={styles.play} />
            <View style={styles.progress}>
              <View
                style={{ ...styles.bar, width: `${progress * 100}%` }}
              ></View>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>
            {ep.toString()}.&nbsp;{title}
          </Text>
          <Text style={styles.duration}>{duration.toString()}m</Text>
        </View>
        <View style={styles.rightContainer}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => onDownload(id)}
            delayPressIn={0}
          >
            <IonIcon color={Theme.secondary} name="ios-download" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.synopsis}>{synopsis}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 20
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  image: {
    position: "relative",
    width: 130,
    height: 72,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  play: {
    position: "relative",
    width: 28,
    height: 28,
    zIndex: 5
  },
  infoContainer: {
    flex: 1,
    paddingHorizontal: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start"
  },
  title: {
    color: Theme.secondary,
    fontSize: 16
  },
  duration: {
    color: Theme.textColor,
    fontSize: 14
  },
  rightContainer: {
    width: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10
  },
  progress: {
    position: "absolute",
    left: 0,
    bottom: 0,
    right: 0,
    height: 3,
    backgroundColor: Theme.textColor,
    zIndex: 4
  },
  bar: {
    position: "absolute",
    left: 0,
    bottom: 0,
    top: 0,
    backgroundColor: Theme.textColor
  },
  bottomContainer: {
    paddingTop: 10
  },
  synopsis: {
    color: Theme.textColor,
    fontSize: 16
  }
});

export default EpisodeItem;
