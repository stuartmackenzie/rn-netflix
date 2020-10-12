import React, { FC } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
  TextStyle
} from "react-native";
import Text from "./Text";

type LinkProps = {
  style?: TextStyle;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
};

const Link: FC<LinkProps> = ({ style, children, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress} delayPressIn={0}>
      <Text style={{ ...styles.text, ...style }}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 16
  }
});

export default Link;
