import React, { FC } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";

import Theme from "../constants/theme";
import { MediaDownloadItem } from "../models/media";
import Text from "./UI/Text";
import IonIcon from "./UI/IonIcon";

type DownloadItemProps = {
  item: MediaDownloadItem;
  onPress?: (id: string) => void;
};

const DownloadItem: FC<DownloadItemProps> = ({ item, onPress }) => {
  const { id, title, text, image, status } = item;

  const textEl = text ? <Text style={styles.text}>{text}</Text> : null;
  const statusEl = status ? <Text style={styles.status}>{status}</Text> : null;

  return (
    <TouchableOpacity
      style={styles.view}
      activeOpacity={0.6}
      onPress={() => onPress(id)}
      delayPressIn={0}
    >
      <View style={styles.left}>
        <Image style={styles.image} source={image} resizeMode="cover" />
      </View>
      <View style={styles.middle}>
        <Text style={styles.title}>{title}</Text>
        {textEl}
        {statusEl}
      </View>
      <View style={styles.right}>
        <IonIcon name="ios-arrow-forward" color="#E6E6E6" size={30} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 10
  },
  left: {
    paddingHorizontal: 20
  },
  image: {
    width: 128,
    height: 72
  },
  middle: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start"
  },
  title: {
    color: Theme.secondary,
    fontSize: 18,
    fontFamily: Theme.fontFamilyBold,
    marginBottom: 5
  },
  text: {
    color: Theme.textColor,
    fontSize: 14,
    fontFamily: Theme.fontFamily
  },
  status: {
    color: "#5280c5",
    fontSize: 14,
    fontFamily: Theme.fontFamily
  },
  right: {
    width: 50,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default DownloadItem;
