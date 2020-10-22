import React, { FC, useLayoutEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { useHeaderHeight } from "@react-navigation/stack";

import data from "../data/mylist";
import { GridItem, GridItemParams } from "../models/view";

import Theme from "../constants/theme";
import HeaderGradient from "../components/HeaderGradient";
import ProfileButton from "../components/ProfileButton";
import GridImageItem from "../components/GridImageItem";

type MyListScreenProps = {
  navigation: any;
};

const MyListScreen: FC<MyListScreenProps> = ({ navigation }) => {
  const items: Array<GridItem> = data.items.map(
    (item: GridItemParams) => new GridItem(item)
  );

  const headerHeight = useHeaderHeight();

  const profileHandler = () => {
    console.log("Profile");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "My List",
      headerRight: () => <ProfileButton onPress={profileHandler} />
    });
  }, [navigation]);

  const itemHandler = (id: number) => {
    console.log(`My List: ${id}`);
  };

  const renderItem = (itemData) => (
    <GridImageItem item={itemData.item} onPress={itemHandler} />
  );

  return (
    <View style={styles.screen}>
      <HeaderGradient />
      <View style={{ ...styles.container, marginTop: headerHeight }}>
        <FlatList
          style={styles.list}
          contentContainerStyle={styles.listContent}
          data={items}
          keyExtractor={(item: GridItem) => item.id.toString()}
          renderItem={renderItem}
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          numColumns={4}
        ></FlatList>
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
    flexDirection: "column"
  },
  list: {
    height: 100,
    marginTop: 20,
    overflow: "hidden"
  },
  listContent: {
    height: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    overflow: "hidden"
  }
});

export default MyListScreen;
