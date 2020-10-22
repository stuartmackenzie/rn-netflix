import React, { FC } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
  TextStyle,
  ViewStyle
} from "react-native";
import Text from "./Text";
import IonIcon from "./IonIcon";

type IconTextButtonProps = {
  id: string;
  icon: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  onPress?: ((id: string) => void) | undefined;
  color?: string;
};

const IconTextButton: FC<IconTextButtonProps> = ({
  id,
  icon,
  style,
  textStyle,
  children,
  color = "white",
  onPress
}) => {
  return (
    <TouchableOpacity
      style={{ ...styles.view, ...style }}
      activeOpacity={0.6}
      onPress={() => onPress(id)}
      delayPressIn={0}
    >
      <IonIcon name={icon} color={color} />
      <Text style={{ ...styles.text, ...textStyle }}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  text: {
    color: "white"
  }
});

export default IconTextButton;
