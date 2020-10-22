import React, { FC } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";

import { GridItem } from "../models/view";

type GridImageItemProps = {
  item: GridItem;
  onPress?: (id: number | string) => void;
};

const GridImageItem: FC<GridImageItemProps> = ({ item, onPress }) => {
  const { id, image } = item;
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
    width: 78,
    height: 138
  }
});

export default GridImageItem;
