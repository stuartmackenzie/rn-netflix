import React, {
  FC,
  forwardRef,
  ForwardRefRenderFunction,
  Ref,
  useImperativeHandle,
  useRef
} from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions
} from "react-native";

import IonIcon from "./UI/IonIcon";

type SearchInputProps = {
  value?: any;
  onChange?: ((text: string) => void) | undefined;
  onPress?: () => void;
  placeholder?: string;
  placeholderTextColor?: string;
};

const SearchInput: ForwardRefRenderFunction<any, SearchInputProps> = (
  {
    value,
    onChange,
    onPress,
    placeholder = "Search",
    placeholderTextColor = "#B3B3B3",
    ...rest
  },
  ref: Ref<{ blur: () => void }>
) => {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    blur: () => {
      inputRef.current.blur();
    }
  }));

  return (
    <View style={styles.control}>
      <TouchableOpacity
        style={styles.iconContainer}
        activeOpacity={0.6}
        onPress={() => onPress()}
        delayPressIn={0}
      >
        <IonIcon name="ios-search" color="#7f7f7f" />
      </TouchableOpacity>
      <TextInput
        ref={inputRef}
        keyboardType="default"
        style={styles.input}
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  control: {
    width: Dimensions.get("window").width - 120,
    marginLeft: -20,
    height: 34,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#323232",
    borderRadius: 5,
    overflow: "hidden"
  },
  iconContainer: {
    width: 34,
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {},
  input: {
    flex: 1,
    marginRight: 10,
    paddingHorizontal: 5,
    paddingVertical: 2,
    height: 34,
    color: "#B3B3B3"
  }
});

export default forwardRef(SearchInput);
