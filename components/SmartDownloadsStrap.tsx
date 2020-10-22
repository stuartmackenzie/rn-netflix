import React, { FC } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

import Theme from "../constants/theme";
import Text from "./UI/Text";
import IonIcon from "./UI/IonIcon";

type SmartDownloadsStrapProps = {
  onPress?: () => void;
};

const SmartDownloadsStrap: FC<SmartDownloadsStrapProps> = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={styles.view}
      activeOpacity={0.6}
      onPress={() => onPress()}
      delayPressIn={0}
    >
      <View style={styles.iconContainer}>
        <IonIcon
          name="ios-information-circle-outline"
          color="white"
          size={23}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Smart Downloads&nbsp;&nbsp;<Text style={styles.link}>ON</Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  view: {
    height: 46,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#121212",
    paddingHorizontal: 20
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  textContainer: {
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  text: {
    fontFamily: Theme.fontFamilyBold,
    fontSize: 14,
    color: Theme.secondary,
    textAlign: "center"
  },
  link: {
    color: "#3778f1",
    textTransform: "uppercase",
    fontSize: 14,
    fontFamily: Theme.fontFamilyBold
  }
});

export default SmartDownloadsStrap;
