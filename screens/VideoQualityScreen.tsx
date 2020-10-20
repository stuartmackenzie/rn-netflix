import React, { FC, useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyleSheet, View } from "react-native";
import { useHeaderHeight } from "@react-navigation/stack";

import { setVideoQuality } from "../store/actions";

import HeaderGradient from "../components/HeaderGradient";
import ControlsList from "../components/ControlsList";

type VideoQualityScreenProps = {
  navigation: any;
};

const VideoQualityScreen: FC<VideoQualityScreenProps> = ({ navigation }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.settings.videoQualityItems);

  useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: "Video Quality" });
  }, [navigation]);

  const pressHandler = (item: any) => {
    dispatch(setVideoQuality(item.id));
  };

  return (
    <View style={styles.screen}>
      <HeaderGradient />
      <View style={{ ...styles.container, marginTop: useHeaderHeight() }}>
        <ControlsList items={items} onPress={pressHandler} />
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
