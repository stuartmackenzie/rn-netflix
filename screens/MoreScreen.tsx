import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import Text from "../components/UI/Text";

type MoreScreenProps = {};

const MoreScreen : FC<MoreScreenProps> = ({}) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>More</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'black'
  },
  text: {
    fontFamily: "Cabin-Regular",
    color: "#FFF"
  }
});

export default MoreScreen;