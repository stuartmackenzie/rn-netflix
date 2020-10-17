import React, { FC } from "react";
import { StyleSheet, View, TextStyle, ViewStyle } from "react-native";
import Link from "./UI/Link";

type LinksProps = {
  items?: Array<string>;
  style?: ViewStyle;
  linkStyle?: TextStyle;
  onPress?: ((text: string) => void) | undefined;
};

const Links: FC<LinksProps> = ({ items = [], style, linkStyle, onPress }) => {
  const els = items.map((item) => (
    <Link key={item} style={linkStyle} onPress={() => onPress(item)}>
      {item}
    </Link>
  ));
  return <View style={{ ...styles.view, ...style }}>{els}</View>;
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }
});

export default Links;
