import React, { FC } from "react";
import { StyleSheet, View, Switch } from "react-native";

import Theme from "../../constants/theme";
import IonIcon from "./IonIcon";
import Text from "./Text";

type SwitchControlProps = {
  item?: any;
  onChange?: ((item: any, val: boolean) => void) | undefined;
};

const SwitchControl: FC<SwitchControlProps> = ({ item, onChange }) => {
  const { icon, title, text, value } = item;

  const leftEl = icon ? (
    <View style={styles.leftContainer}>
      <IonIcon name={icon} size={26} color="#B3B3B3" />
    </View>
  ) : null;
  const textEl = text ? <Text style={styles.text}>{text}</Text> : null;

  return (
    <View style={styles.view}>
      {leftEl}
      <View style={styles.middleContainer}>
        <Text style={styles.title}>{title}</Text>
        {textEl}
      </View>
      <View style={styles.rightContainer}>
        <Switch
          trackColor={{ false: "#121212", true: "#3778f1" }}
          thumbColor="#FEFEFE"
          ios_backgroundColor="#121212"
          onValueChange={(val) => onChange(item, val)}
          value={value}
        />
      </View>
    </View>
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
    alignItems: "center",
    marginRight: 20
  },
  middleContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  rightContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginLeft: 20
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

export default SwitchControl;
