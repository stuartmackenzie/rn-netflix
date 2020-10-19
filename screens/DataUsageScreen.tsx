import React, { FC, useLayoutEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useHeaderHeight } from "@react-navigation/stack";

import data from "../data/data-usage";

import HeaderGradient from "../components/HeaderGradient";
import ControlsList from "../components/ControlsList";

type DataUsageScreenProps = {
  navigation: any;
};

const DataUsageScreen: FC<DataUsageScreenProps> = ({ navigation }) => {
  const [items, setItems] = useState(data.items);

  useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: "Cellular Data Usage " });
  }, [navigation]);

  const pressHandler = (item: any) => {
    const firstItem = items[0];

    // If Automatic is on, pressing is not enabled
    if (firstItem.value) return;

    const newItems = items.map((oitem) => {
      if (oitem.type !== "Option") return oitem;
      return { ...oitem, value: oitem.id === item.id };
    });
    setItems(newItems);
  };

  const changeHandler = (_: any, val: any) => {
    const newItems = items.map((oitem) => {
      if (oitem.type === "Switch") return { ...oitem, value: val };
      return { ...oitem, enabled: !val };
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

export default DataUsageScreen;
