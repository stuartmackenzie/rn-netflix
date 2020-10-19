import React, { FC } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import Theme from "../../constants/theme";
import IonIcon from "./IonIcon";
import Text from "./Text";

type RouteControlProps = {
  item?: any;
  onPress?: ((item: any) => void) | undefined;
};

const RouteControl: FC<RouteControlProps> = ({ item, onPress }) => {
  const { icon, title, text } = item;
  const textEl = text ? <Text style={styles.text}>{text}</Text> : null;
  return (
    <TouchableOpacity
      style={styles.view}
      activeOpacity={0.6}
      onPress={() => onPress(item)}
      delayPressIn={20}
    >
      <View style={styles.leftContainer}>
        <IonIcon name={icon} size={26} color="#B3B3B3" />
      </View>
      <View style={styles.middleContainer}>
        <Text style={styles.title}>{title}</Text>
        {textEl}
      </View>
      <View style={styles.rightContainer}>
        <IonIcon name="ios-arrow-forward" size={20} color="#B3B3B3" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  view: {
    height: 68,
    paddingHorizontal: 20,
    backgroundColor: "#121212",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 1
  },
  leftContainer: {
    width: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  middleContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingHorizontal: 20
  },
  rightContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  title: {
    color: Theme.secondary,
    fontSize: 14
  },
  text: {
    color: Theme.textColor,
    fontSize: 12,
    marginTop: 5
  }
});

export default RouteControl;
