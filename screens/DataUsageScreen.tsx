import React, { FC, useLayoutEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyleSheet, View } from "react-native";
import { useHeaderHeight } from "@react-navigation/stack";

import {
  setCellularDataUsageAuto,
  setCellularDataUsageMode
} from "../store/actions";

import HeaderGradient from "../components/HeaderGradient";
import ControlsList from "../components/ControlsList";

type DataUsageScreenProps = {
  navigation: any;
};

const DataUsageScreen: FC<DataUsageScreenProps> = ({ navigation }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.settings.dataUsageItems);
  const videoPlayback = useSelector((state) => state.settings.videoPlayback);

  useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: "Cellular Data Usage " });
  }, [navigation]);

  const changeHandler = (_: any, val: boolean) => {
    dispatch(setCellularDataUsageAuto(val));
  };

  const pressHandler = useCallback(
    (item: any) => {
      // If Automatic is on, pressing is not enabled (also protected in store)
      if (videoPlayback.cellularDataUsage.auto) return;
      dispatch(setCellularDataUsageMode(item.id));
    },
    [videoPlayback]
  );

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
