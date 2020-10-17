import React, { FC } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";

import Theme from "../constants/theme";
import { SearchMediaItem } from "../models/media";

import IonIcon from "./UI/IonIcon";
import Text from "./UI/Text";

type SearchItemProps = {
  item: SearchMediaItem;
  onPress?: (id: number) => void;
};

const SearchItem: FC<SearchItemProps> = ({ item, onPress }) => {
  const { id, title, image } = item;
  return (
    <TouchableOpacity
      style={styles.view}
      activeOpacity={0.6}
      onPress={() => onPress(id)}
      delayPressIn={20}
    >
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={image} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.arrowContainer}>
        <IonIcon color={Theme.secondary} name="md-arrow-dropright" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 1
  },
  imageContainer: {},
  image: {
    width: 138,
    height: 78
  },
  titleContainer: {
    flex: 2,
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  title: {
    color: Theme.textColor,
    fontSize: 18
  },
  arrowContainer: {
    width: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  arrow: {}
});

export default SearchItem;
