import React, { FC, useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import Text from "../components/UI/Text";
import HeaderMenuButton from "../components/HeaderMenuButton";

type IntroScreenProps = {
  navigation: any;
};

const IntroScreen : FC<IntroScreenProps> = ({ navigation }) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <HeaderMenuButton navigation={navigation} />
    });
  }, [navigation]);

  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Splash</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'green'
  },
  text: {
    fontFamily: "Cabin-Regular",
    color: "#FFF"
  }
});

export default IntroScreen;