import React, { FC, ReactNode } from "react";
import { StyleSheet, Text } from "react-native";

type UITextProps = {
  style?: any;
  children?: ReactNode;
}

const UIText : FC<UITextProps> = ({ style, children, ...rest }) => {
  return (
    <Text style={{ ...styles.text, ...style }} {...rest}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "Cabin-Regular"
  }
});

export default UIText;
