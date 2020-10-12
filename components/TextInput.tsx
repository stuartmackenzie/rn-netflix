import React, { FC, useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Text from "./UI/Text";

type TextInputProps = {
  value?: any;
  onChange?: ((text: string) => void) | undefined;
  valid?: boolean;
  label?: string;
  errorText?: string;
  email?: boolean;
  password?: boolean;
  placeholder?: string;
  placeholderTextColor?: string;
};

const UITextInput: FC<TextInputProps> = ({
  value,
  onChange,
  valid=false,
  label = "",
  errorText = "* Invalid",
  email = false,
  password = false,
  placeholder="",
  placeholderTextColor="#B3B3B3",
  ...rest
}) => {
  const [focused, setFocused] = useState(false);

  let invalidEl = null;
  
  if(!valid) {
    invalidEl = <Text style={styles.errorText}>{errorText}</Text>;
  }

  const keyboardType = email ? "email-address" : "default";
  const secureTextEntry = password ? true : false;

  const focusHandler = () => {
    setFocused(true);
  };

  const blurHandler = () => {
    setFocused(false);
  };

  return (
    <View style={styles.control}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}</Text>
        {invalidEl}
      </View>
      <TextInput
        keyboardType={keyboardType}
        style={styles.input}
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={secureTextEntry}
        onFocus={focusHandler}
        onBlur={blurHandler}
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  control: {
    width: "100%",
    marginBottom: 20
  },
  labelContainer: {
    height: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  label: {
    fontFamily: "Cabin-Regular",
    color: "#B3B3B3",
    fontSize: 14
  },
  errorText: {
    fontFamily: "Cabin-Regular",
    fontSize: 14,
    color: "red"
  },
  input: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    backgroundColor: "#333333",
    borderRadius: 5,
    height: 40,
    color: "#B3B3B3"
  }
});

export default UITextInput;
