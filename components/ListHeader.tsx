import React, { FC } from "react";
import { StyleSheet, View } from "react-native";

import Theme from "../constants/theme";
import Text from "./UI/Text";

type ListHeaderProps = {
  title: string;
};

const ListHeader: FC<ListHeaderProps> = ({ title }) => {
  return (
    <View style={styles.view}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    height: 40,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#000000"
  },
  title: {
    marginHorizontal: 10,
    color: Theme.secondary,
    fontSize: 18,
    fontFamily: Theme.fontFamilyBold
  }
});

export default ListHeader;
