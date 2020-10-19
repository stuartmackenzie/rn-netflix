import React, { FC } from "react";
import { StyleSheet, View } from "react-native";

import Theme from "../../constants/theme";
import Text from "./Text";

type StorageControlProps = {
  item?: any;
  onPress?: ((item: any) => void) | undefined;
};

const Label = ({ text, color }) => (
  <View style={styles.labelContainer}>
    <View style={{ ...styles.square, backgroundColor: color }}></View>
    <Text style={styles.label}>{text}</Text>
  </View>
);

const StorageControl: FC<StorageControlProps> = ({ item }) => {
  let { title, used = 20, app = 10 } = item;
  app = used + app;

  const usedColor = "#4a4a4a";
  const appColor = "#5c8ed8";
  const freeColor = "#d8d8d8";

  return (
    <View style={styles.view}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.middleContainer}>
        <View
          style={{
            ...styles.status,
            backgroundColor: usedColor,
            width: `${used}%`,
            zIndex: 3
          }}
        ></View>
        <View
          style={{
            ...styles.status,
            backgroundColor: appColor,
            width: `${app}%`,
            zIndex: 2
          }}
        ></View>
        <View
          style={{
            ...styles.status,
            backgroundColor: freeColor,
            width: "100%",
            zIndex: 1
          }}
        ></View>
      </View>
      <View style={styles.bottomContainer}>
        <Label text="Used" color={usedColor} />
        <Label text="Netflix" color={appColor} />
        <Label text="Free" color={freeColor} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    height: 90,
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: "#121212",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 1
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  middleContainer: {
    width: "100%",
    position: "relative",
    height: 10,
    overflow: "hidden"
  },
  status: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0
  },
  bottomContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  title: {
    color: Theme.textColor,
    fontSize: 16
  },
  labelContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  square: {
    width: 10,
    height: 10
  },
  label: {
    marginLeft: 5,
    color: Theme.textColor,
    fontSize: 16
  }
});

export default StorageControl;
