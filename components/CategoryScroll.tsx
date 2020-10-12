import React, { FC } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import Theme from "../constants/theme";

import Text from "./UI/Text";
import CategoryItem from "./CategoryItem";

type CategoryScrollProps = {
  category: any;
  onPress?: (id: number) => void;
};

const CategoryScroll: FC<CategoryScrollProps> = ({ category, onPress }) => {
  const renderItem = (itemData) => (
    <CategoryItem {...itemData.item} onPress={onPress} />
  );

  return (
    <View style={styles.view}>
      <Text style={styles.title}>{category.title}</Text>
      <FlatList
        keyExtractor={(item: any) => item.id.toString()}
        data={category.items}
        contentContainerStyle={{
          ...styles.scroll,
          width: category.items.length * 190
        }}
        renderItem={renderItem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  title: {
    height: 30,
    color: Theme.secondary,
    fontFamily: "Cabin-Bold",
    fontSize: 22,
    marginHorizontal: 10
  },
  scroll: {
    paddingHorizontal: 10,
    height: 150
  }
});

export default CategoryScroll;
