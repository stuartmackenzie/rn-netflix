import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import Text from "../components/UI/Text";

type SettingsScreenProps = {};

const SettingsScreen : FC<SettingsScreenProps> = ({}) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Settings</Text>
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

export default SettingsScreen;