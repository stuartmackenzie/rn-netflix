import React, { FC } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import Theme from "../../constants/theme";
import IonIcon from "./IonIcon";
import Text from "./Text";

type ButtonControlProps = {
  item?: any;
  onPress?: ((item: any) => void) | undefined;
};

const ButtonControl: FC<ButtonControlProps> = ({ item, onPress }) => {
  const { icon, title } = item;
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
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  view: {
    height: 65,
    paddingHorizontal: 20,
    backgroundColor: "#121212",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
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
  title: {
    color: Theme.secondary,
    fontSize: 14
  }
});

export default ButtonControl;
