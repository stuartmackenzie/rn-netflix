import React, { FC, useLayoutEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyleSheet, View } from "react-native";
import { useHeaderHeight } from "@react-navigation/stack";

import { setSetting, clearStorage } from "../store/actions";

import HeaderGradient from "../components/HeaderGradient";
import ControlsList from "../components/ControlsList";

type SettingsScreenProps = {
  navigation: any;
};

const SettingsScreen: FC<SettingsScreenProps> = ({ navigation }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.settings.settingsItems);

  useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: "App Settings" });
  }, [navigation]);

  const pressHandler = useCallback(
    (item: any) => {
      switch (item.type) {
        case "Route":
          navigation.navigate(item.route);
          break;
        case "Button":
          console.log("Button:", item.id);
          if (item.id === "delete-all-downloads") {
            dispatch(clearStorage());
          }
          break;
        case "Link":
          console.log("Link", item.uri);
          break;
        default:
          break;
      }
    },
    [navigation]
  );

  const changeHandler = (item: any, val: any) => {
    dispatch(setSetting(item.id, val));
  };

  return (
    <View style={styles.screen}>
      <HeaderGradient />
      <View style={{ ...styles.container, marginTop: useHeaderHeight() }}>
        <ControlsList
          items={items}
          onPress={pressHandler}
          onChange={changeHandler}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "black"
  },
  container: {
    flex: 1,
    flexDirection: "column"
  }
});

export default SettingsScreen;
