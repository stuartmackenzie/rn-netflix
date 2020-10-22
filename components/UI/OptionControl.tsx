import React, { FC } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import Theme from "../../constants/theme";
import IonIcon from "./IonIcon";
import Text from "./Text";

type OptionControlProps = {
  item?: any;
  onPress?: ((item: any) => void) | undefined;
};

const OptionControl: FC<OptionControlProps> = ({ item, onPress }) => {
  const { enabled, icon, title, text, value } = item;

  const disabledColor = "#525252";

  const textEl = text ? <Text style={styles.text}>{text}</Text> : null;

  const leftEl = icon ? (
    <View style={styles.leftContainer}>
      <IonIcon
        name={icon}
        size={26}
        color={enabled ? "#B3B3B3" : disabledColor}
      />
    </View>
  ) : null;

  const rightEl =
    enabled && value ? (
      <View style={styles.rightContainer}>
        <IonIcon name="ios-checkmark" size={26} color="#3778f1" />
      </View>
    ) : null;

  return (
    <TouchableOpacity
      style={styles.view}
      disabled={!enabled}
      activeOpacity={0.6}
      onPress={() => onPress(item)}
      delayPressIn={20}
    >
      {leftEl}
      <View style={styles.middleContainer}>
        <Text
          style={{
            ...styles.title,
            color: enabled ? Theme.secondary : disabledColor
          }}
        >
          {title}
        </Text>
        {textEl}
      </View>
      {rightEl}
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
    alignItems: "center",
    marginRight: 20
  },
  middleContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  title: {
    color: Theme.secondary,
    fontSize: 14
  },
  text: {
    color: Theme.textColor,
    fontSize: 12,
    marginTop: 5
  },
  rightContainer: {
    width: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20
  }
});

export default OptionControl;
