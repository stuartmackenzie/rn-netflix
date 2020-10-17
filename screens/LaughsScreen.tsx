import React, { FC, useLayoutEffect } from "react";
import { StyleSheet, View, ScrollView, Dimensions } from "react-native";
import { useHeaderHeight } from "@react-navigation/stack";

import data from "../data/laughs";

import Text from "../components/UI/Text";
import HeaderMenuButton from "../components/HeaderMenuButton";
import HeaderGradient from "../components/HeaderGradient";
import ClipItem from "../components/ClipItem";

const items = data.items;

type LaughsScreenProps = {
  navigation: any;
};

const LaughsScreen: FC<LaughsScreenProps> = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: null,
      headerLeft: () => <HeaderMenuButton navigation={navigation} />
    });
  }, [navigation]);

  const itemEls = items.map((item) => (
    <ClipItem key={item.id.toString()} style={styles.item} clip={item} />
  ));

  return (
    <View style={styles.screen}>
      <HeaderGradient />
      <ScrollView
        contentContainerStyle={{
          ...styles.content,
          marginTop: useHeaderHeight()
        }}
        showsVerticalScrollIndicator={false}
        snapToInterval={500}
        snapToAlignment={"start"}
        pagingEnabled={true}
        horizontal={false}
        snapToOffsets={[...Array(items.length)].map(
          (_, i) => i * (Dimensions.get("window").height - 170)
        )}
        decelerationRate="fast"
      >
        {itemEls}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "black"
  },
  content: {
    paddingBottom: 100
  },
  list: {
    flex: 1,
    backgroundColor: "green"
  },
  item: {
    flex: 1,
    backgroundColor: "red",
    height: Dimensions.get("window").height - 170
  },
  text: {
    color: "white"
  }
});

export default LaughsScreen;
