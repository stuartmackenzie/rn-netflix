import React, { FC, ReactNode } from "react";
import { StyleSheet, View, ScrollView, ViewStyle } from "react-native";

import HeaderGradient from "./HeaderGradient";

type ContentProps = {
  children?: ReactNode;
  showGradient?: boolean;
  style?: ViewStyle;
};

const Content: FC<ContentProps> = ({
  style,
  children,
  showGradient = true
}) => {
  return (
    <View style={{ ...styles.screen, ...style }}>
      {showGradient && <HeaderGradient />}
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>{children}</View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "black"
  },
  content: {},
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingBottom: 30
  }
});

export default Content;
