import React, { FC } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

import Text from "./UI/Text";
import IonIcon from "./UI/IonIcon";

type NotificationsItemProps = {
  onPress?: () => void;
};

const NotificationsItem: FC<NotificationsItemProps> = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={styles.view}
      activeOpacity={0.6}
      onPress={() => onPress()}
      delayPressIn={20}
    >
      <View style={styles.left}>
        <View style={styles.circle}>
          <IonIcon name="ios-notifications" color="white" size={26} />
        </View>
      </View>
      <View style={styles.middle}>
        <Text style={styles.text}>Notifications</Text>
      </View>
      <View style={styles.right}>
        <IonIcon name="ios-arrow-forward" color="white" size={26} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  left: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  circle: {
    backgroundColor: "red",
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center"
  },
  middle: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  text: {
    fontFamily: "Cabin-Bold",
    color: "#FFF"
  },
  right: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginRight: 15
  }
});

export default NotificationsItem;
