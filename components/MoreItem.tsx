import React, { FC } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

import Theme from "../constants/theme";
import { ListItem } from "../models/view";

import IonIcon from "./UI/IonIcon";
import Text from "./UI/Text";

type MoreItemProps = {
  item: ListItem;
  onPress?: (id: string) => void;
};

const MoreItem: FC<MoreItemProps> = ({ item, onPress }) => {
  const { id, icon, text } = item;
  return (
    <TouchableOpacity
      style={styles.view}
      activeOpacity={0.6}
      onPress={() => onPress(id)}
      delayPressIn={20}
    >
      <View style={styles.iconContainer}>
        <IonIcon color={Theme.textColor} name={icon} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
      </View>
      <View style={styles.arrowContainer}>
        <IonIcon color={Theme.textColor} name="ios-arrow-forward" size={16} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 1,
    paddingHorizontal: 20,
    height: 55,
    backgroundColor: "#121212"
  },
  iconContainer: {
    width: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  text: {
    color: Theme.textColor,
    fontSize: 18,
    fontFamily: Theme.fontFamily
  },
  arrowContainer: {
    width: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  arrow: {}
});

export default MoreItem;
