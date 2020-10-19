import React, { FC, useLayoutEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useHeaderHeight } from "@react-navigation/stack";

import data from "../data/video-quality";

import HeaderGradient from "../components/HeaderGradient";
import ControlsList from "../components/ControlsList";

type VideoQualityScreenProps = {
  navigation: any;
};

const VideoQualityScreen: FC<VideoQualityScreenProps> = ({ navigation }) => {
  const [items, setItems] = useState(data.items);

  useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: "Video Quality" });
  }, [navigation]);

  const pressHandler = (item: any) => {
    const newItems = items.map((oitem) => {
      return { ...oitem, value: !oitem.value };
    });
    setItems(newItems);
  };

  const changeHandler = (_: any, _1: any) => {};

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

export default VideoQualityScreen;
