import React, { FC } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

import Theme from "../constants/theme";
import Link from "./UI/Link";
import Text from "./UI/Text";

type SignOutItemProps = {
  version: string;
  style: ViewStyle;
  onPress?: () => void;
};

const SignOutItem: FC<SignOutItemProps> = ({ version, style, onPress }) => {
  return (
    <View style={{ ...styles.view, ...style }}>
      <Link style={styles.link} onPress={() => onPress()}>
        Sign Out
      </Link>
      <Text style={styles.version}>Version: {version}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  link: {
    color: Theme.secondary,
    fontFamily: Theme.fontFamily,
    fontSize: 16,
    marginBottom: 6
  },
  version: {
    color: Theme.textColor,
    fontFamily: Theme.fontFamily,
    fontSize: 16
  }
});

export default SignOutItem;
