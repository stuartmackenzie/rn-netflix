import React, { FC, useLayoutEffect, useState } from "react";
import { StyleSheet, View, Dimensions } from "react-native";

import isValidEmail from "../utils/isValidEmail";
import isValidPassword from "../utils/isValidPassword";

import Text from "../components/UI/Text";
import Button from "../components/UI/Button";
import Link from "../components/UI/Link";
import LogoButton from "../components/UI/LogoButton";
import HeaderMenuButton from "../components/HeaderMenuButton";
import HeaderHelpButtons from "../components/HeaderHelpButtons";

import TextInput from "../components/TextInput";
import { useHeaderHeight } from '@react-navigation/stack';

type AuthScreenProps = {
  navigation: any;
};

const AuthScreen : FC<AuthScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [password, setPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState(true);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <HeaderMenuButton navigation={navigation} />,
      headerTitle: () => <LogoButton onPress={() => console.log('Logo')} />,
      headerRight: () => <HeaderHelpButtons onHelp={() => console.log("Help")} />
    });
  }, [navigation]);

  const emailHandler = (val) => {
    setEmail(val);
  };

  const passwordHandler = (val) => {
    setPassword(val);
  };

  const submitHandler = () => {
    const evalid = isValidEmail(email);
    const pvalid = isValidPassword(password);
    setEmailValid(evalid)
    setPasswordValid(pvalid);
    if(!evalid || !pvalid) return;
    console.log('Submit');
  };

  const recoverPasswordHandler = () => {
    console.log("Recover");
  };

  const learnMoreHandler = () => {
    console.log("Learn More");
  };

  const emailInput = (
    <TextInput
      label="Email"
      value={email}
      valid={emailValid}
      errorText={"* Must be a valid email"}
      placeholder="Email"
      onChange={emailHandler}
      email={true}
    />
  );

  const passwordInput = (
    <TextInput
      label="Password"
      value={password}
      valid={passwordValid}
      errorText={"* Must be a strong password"}
      placeholder="Password"
      onChange={passwordHandler}
      password={true}
    />
  );

  return (
    <View style={styles.screen}>
      <View style={{...styles.content, marginTop: useHeaderHeight() }}>
        <View style={styles.form}>
          {emailInput}
          {passwordInput}
          <Button style={styles.button} buttonStyle={styles.buttonStyle} textStyle={styles.buttonText} onPress={submitHandler} >Sign In</Button>
          <Link style={styles.recoverLink} onPress={recoverPasswordHandler} >Recover Password</Link>
          <Text style={styles.text}>Sign in is protected by Google reCAPTCHA to ensure you're not a bot.</Text>
          <Link style={styles.link} onPress={learnMoreHandler}>Learn More.</Link>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#131313'
  },
  content: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  form: {
    width: Dimensions.get('window').width - 112
  },
  button: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#000000'
  },
  buttonStyle: {
    backgroundColor: 'transparent'
  },
  recoverLink: {
    marginTop: 30,
    color: "#B3B3B3",
    fontFamily: "Cabin-Bold",
    textAlign: "center"
  },
  buttonText: {
    color: "#B3B3B3"
  },
  text: {
    marginTop: 30,
    color: "#B3B3B3",
    fontSize: 16,
    textAlign: "center"
  },
  link: {
    color: "#B3B3B3",
    textAlign: "center",
    fontFamily: "Cabin-Bold",
    marginTop: 10
  }
});

export default AuthScreen;