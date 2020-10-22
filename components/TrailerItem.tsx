import React, { FC } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  Dimensions
} from "react-native";

import Theme from "../constants/theme";
import { ITrailer } from "../models/media";

import Text from "./UI/Text";
import PlayRing from "./Svg/PlayRing";

type TrailerItemProps = {
  item: ITrailer;
  onPress?: (id: string) => void;
};

const TrailerItem: FC<TrailerItemProps> = ({ item, onPress }) => {
  const { id, title, image } = item;

  return (
    <View style={styles.view}>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => onPress(id)}
        delayPressIn={0}
      >
        <ImageBackground style={styles.image} source={image}>
          <PlayRing style={styles.play} />
        </ImageBackground>
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
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
  image: {
    height: ((Dimensions.get("window").width - 20) * 9) / 16,
    width: Dimensions.get("window").width - 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  play: {
    position: "relative",
    width: 28,
    height: 28
  },
  titleContainer: {
    marginTop: 6,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  title: {
    color: Theme.secondary,
    fontSize: 16
  }
});

export default TrailerItem;
