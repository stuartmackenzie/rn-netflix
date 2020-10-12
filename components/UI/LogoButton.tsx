import React, { FC } from "react";
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  GestureResponderEvent
} from "react-native";

const logo = require("../../assets/shared/logo.png");

type LogoButtonProps = {
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
};

const LogoButton: FC<LogoButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress} delayPressIn={0}>
      <Image style={styles.image} source={logo} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 50
  }
});

export default LogoButton;
