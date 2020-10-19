import React, { FC, useLayoutEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useHeaderHeight } from "@react-navigation/stack";

import data from "../data/settings";

import HeaderGradient from "../components/HeaderGradient";
import ControlsList from "../components/ControlsList";

type SettingsScreenProps = {
  navigation: any;
};

const SettingsScreen: FC<SettingsScreenProps> = ({ navigation }) => {
  const [items, setItems] = useState(data.items);

  useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: "App Settings" });
  }, [navigation]);

  const pressHandler = (item: any) => {
    switch (item.type) {
      case "Route":
        navigation.navigate(item.route);
        break;
      case "Button":
        console.log("Button:", item.id);
        break;
      case "Link":
        console.log("Link", item.uri);
        break;
      default:
        break;
    }
  };

  const changeHandler = (item: any, val: any) => {
    const newItems = items.map((oitem) => {
      return oitem.id !== item.id ? oitem : { ...oitem, value: val };
    });
    setItems(newItems);
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
