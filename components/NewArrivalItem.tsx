import React, { FC } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageProps,
  TouchableOpacity
} from "react-native";

import Theme from "../constants/theme";

import Text from "./UI/Text";

type NewArrivalItemProps = {
  id: number;
  title: string;
  image: ImageProps | Readonly<ImageProps>;
  text: string;
  onPress?: (id: number) => void;
};

const NewArrivalItem: FC<NewArrivalItemProps> = ({
  id,
  title,
  image,
  text,
  onPress
}) => {
  return (
    <TouchableOpacity
      style={styles.view}
      activeOpacity={0.6}
      onPress={() => onPress(id)}
      delayPressIn={20}
    >
      <View style={styles.left}>
        <View style={styles.dot}></View>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={image} />
      </View>
      <View style={styles.right}>
        <Text style={styles.strap}>New Arrival</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  view: {
    width: "100%",
    flexDirection: "row"
  },
  left: {
    width: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "red"
  },
  imageContainer: {
    flex: 1
  },
  image: {
    marginVertical: 10,
    width: 120,
    height: 80
  },
  right: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingHorizontal: 20,
    marginVertical: 10
  },
  strap: {
    fontSize: 16,
    fontFamily: Theme.fontFamilyBold,
    color: Theme.textColor,
    marginBottom: 6
  },
  title: {
    fontSize: 16,
    fontFamily: Theme.fontFamily,
    color: Theme.textColor,
    marginBottom: 6
  },
  text: {
    fontSize: 14,
    fontFamily: Theme.fontFamily,
    color: Theme.textColor
  }
});

export default NewArrivalItem;
