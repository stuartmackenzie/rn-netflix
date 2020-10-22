import React, { FC } from "react";
import { StyleSheet, View, ViewStyle, TouchableOpacity } from "react-native";

import Theme from "../constants/theme";
import Text from "./UI/Text";

type TagsProps = {
  tags?: Array<string>;
  style?: ViewStyle;
  color?: string;
  dotColor?: string;
  onPress?: ((tag: string) => void) | undefined;
};

const Tags: FC<TagsProps> = ({
  tags = [],
  style,
  color = Theme.secondary,
  dotColor = "red",
  onPress
}) => {
  const tagsLength = tags.length;
  const tagEls = [];
  for (let i = 0; i < tagsLength; i++) {
    const tag = tags[i];
    const addDot = i < tagsLength - 1;
    tagEls.push(
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => onPress(tag)}
        delayPressIn={20}
        key={tag}
      >
        <Text style={{ ...styles.tag, color }}>
          {tag}
          {addDot ? (
            <Text style={{ ...styles.dot, color: dotColor }}>
              &nbsp;•&nbsp;
            </Text>
          ) : null}
        </Text>
      </TouchableOpacity>
    );
  }
  return <View style={{ ...styles.view, ...style }}>{tagEls}</View>;
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: "row",
    height: 30,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  tag: {
    fontSize: 14
  },
  dot: {
    color: "red"
  }
});

export default Tags;
