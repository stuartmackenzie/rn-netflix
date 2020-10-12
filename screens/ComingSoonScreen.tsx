import React, { FC, useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import HeaderMenuButton from "../components/HeaderMenuButton";
import Text from "../components/UI/Text";

type ComingSoonScreenProps = {
  navigation: any;
};

const ComingSoonScreen : FC<ComingSoonScreenProps> = ({ navigation }) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <HeaderMenuButton navigation={navigation} />
    });
  }, [navigation]);

  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Coming Soon</Text>
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

export default ComingSoonScreen;