import React, { FC, useLayoutEffect, useCallback } from "react";
import { StyleSheet, View, Dimensions } from "react-native";

import items from "../data/intro";

import Button from "../components/UI/Button";
import HeaderMenuButton from "../components/HeaderMenuButton";
import HeaderHelpPrivacyButtons from "../components/HeaderHelpPrivacyButtons";
import HeaderGradient from '../components/HeaderGradient';
import Pages from "../components/Pages";
import IntroItem from "../components/IntroItem";

type IntroScreenProps = {
  navigation: any;
};

const IntroScreen : FC<IntroScreenProps> = ({ navigation }) => {

  const wh = Dimensions.get("window").height;

  const helpHandler = useCallback(() => {
    console.log('Help');
  }, [navigation]);

  const privacyHandler = useCallback(() => {
    console.log('Privacy');
  }, [navigation]);

  const loginHandler = () => {
    console.log('Sign In');
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Home",
      headerLeft: () => <HeaderMenuButton navigation={navigation} />,
      headerRight: () => <HeaderHelpPrivacyButtons onHelp={helpHandler} onPrivacy={privacyHandler} />
    });
  }, [navigation, helpHandler, privacyHandler]);

  const renderItems = () => {
    return items.map((item, i) => {
      return <IntroItem key={i.toString()} {...item} />;
    });
  };

  return (
    <View style={styles.screen}>
      <HeaderGradient />
      <Pages guideStyle={styles.guideStyle} renderItems={renderItems} height={wh-200} />
      <View style={styles.buttonContainer}>
        <Button style={styles.button} buttonStyle={styles.buttonStyle} onPress={loginHandler} >SIGN IN</Button>
      </View>      
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'black'
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 100,
    zIndex: 2
  },
  pages: {
    backgroundColor: 'rgba(0,0,0,0.8)'
  },
  buttonContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 20,
    height: 70,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'transparent',
    marginHorizontal: 10
  },
  button: {
    width: "100%",
    borderRadius: 4
  },
  buttonStyle: {
    paddingVertical: 14
  },
  guideStyle: {
    bottom: 80
  }
});

export default IntroScreen;