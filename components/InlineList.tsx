import React, { FC } from "react";
import { StyleSheet, View, ViewStyle, TouchableOpacity } from "react-native";

import Theme from "../constants/theme";
import Text from "./UI/Text";

type InlineListProps = {
  max?: number;
  label?: string;
  items?: Array<string>;
  style?: ViewStyle;
  color?: string;
  onPress?: ((text: string) => void) | undefined;
};

const InlineList: FC<InlineListProps> = ({
  max = 2,
  label,
  items = [],
  style,
  color = Theme.textColor,
  onPress
}) => {
  max = max < 2 ? 2 : max;
  const addMore = items.length > max;
  if (addMore) {
    items = items.slice(0, max);
    items.push("more");
  }

  const els = [];
  let i = 0;

  if (label) {
    if (items.length === 1 && label.lastIndexOf("s") === label.length - 1)
      label = label.substr(0, label.length - 1);
    els.push(
      <Text key="label" style={{ ...styles.label, color }}>
        {label}:&nbsp;
      </Text>
    );
  }

  for (const item of items) {
    els.push(
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => onPress(item)}
        delayPressIn={10}
        key={item}
      >
        <Text style={{ ...styles.text, color }}>{item}</Text>
      </TouchableOpacity>
    );
    if (i < items.length - 1) {
      els.push(
        <Text key={i.toString()} style={{ ...styles.text, color }}>
          ,&nbsp;
        </Text>
      );
    }
    i++;
  }

  return <View style={{ ...styles.view, ...style }}>{els}</View>;
};

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  label: {
    fontSize: 14
  },
  text: {
    fontSize: 14
  }
});

export default InlineList;
