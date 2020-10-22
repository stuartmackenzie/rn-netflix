import React, { FC, useState } from "react";
import { StyleSheet, View, ViewStyle, TouchableOpacity } from "react-native";

import { ITab } from "../models/view";
import Theme from "../constants/theme";
import Text from "./UI/Text";

type TabsProps = {
  items?: Array<ITab>;
  style?: ViewStyle;
  onPress?: ((id: string) => void) | undefined;
};

const Tabs: FC<TabsProps> = ({ items = [], style, onPress }) => {
  const tabHandler = (id: string) => {
    if (typeof onPress === "function") onPress(id);
  };

  const tabsEls = [];
  for (const tab of items) {
    const { id, text, selected } = tab;
    const indicator = selected ? <View style={styles.indicator}></View> : null;
    const textColor = selected ? Theme.secondary : Theme.textColor;
    tabsEls.push(
      <TouchableOpacity
        style={styles.tab}
        activeOpacity={0.6}
        onPress={() => tabHandler(id)}
        delayPressIn={20}
        key={id}
      >
        {indicator}
        <Text style={{ ...styles.tabText, color: textColor }}>{text}</Text>
      </TouchableOpacity>
    );
  }
  return <View style={{ ...styles.view, ...style }}>{tabsEls}</View>;
};

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    height: 50,
    justifyContent: "space-between",
    alignItems: "center"
  },
  tab: {
    height: "100%",
    position: "relative",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 6
  },
  tabText: {
    fontSize: 16,
    fontFamily: Theme.fontFamilyBold,
    textTransform: "uppercase"
  },
  indicator: {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    height: 4,
    backgroundColor: "red",
    zIndex: 4
  }
});

export default Tabs;
