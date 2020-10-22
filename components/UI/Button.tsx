import React, { FC } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  GestureResponderEvent,
  TextStyle
} from "react-native";
import Theme from "../../constants/theme";
import Text from "./Text";
import IonIcon from "./IonIcon";

type ButtonProps = {
  style?: ViewStyle;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  icon?: string;
  color?: string;
  size?: number;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
};

const UIButton: FC<ButtonProps> = ({
  style,
  buttonStyle,
  textStyle,
  icon,
  color,
  size,
  children,
  onPress
}) => {
  let iconEl = null;
  if (icon) {
    iconEl = <IonIcon name={icon} color={color} size={size} />;
  }
  return (
    <View style={{ ...styles.view, ...style }}>
      <TouchableOpacity activeOpacity={0.6} onPress={onPress} delayPressIn={0}>
        <View style={{ ...styles.button, ...buttonStyle }}>
          {iconEl}
          <Text style={{ ...styles.text, ...textStyle }}>{children}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    borderRadius: 3,
    overflow: "hidden"
  },
  button: {
    backgroundColor: Theme.buttonColor,
    paddingVertical: 14,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "white",
    fontSize: 18
  }
});

export default UIButton;
