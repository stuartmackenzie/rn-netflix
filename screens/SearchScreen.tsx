import React, {
  FC,
  useLayoutEffect,
  useState,
  useCallback,
  createRef
} from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { useHeaderHeight } from "@react-navigation/stack";

import Theme from "../constants/theme";
import { SearchMediaItem } from "../models/media";

import data from "../data/search";

import HeaderGradient from "../components/HeaderGradient";
import HeaderMenuButton from "../components/HeaderMenuButton";
import Text from "../components/UI/Text";
import SearchInput from "../components/SearchInput";
import HeaderCancelButtons from "../components/HeaderCancelButtons";
import SearchItem from "../components/SearchItem";

const items = data.items.map((item) => new SearchMediaItem(item));

type SearchScreenProps = {
  navigation: any;
};

const SearchScreen: FC<SearchScreenProps> = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const inputRef = createRef();

  const searchPressHandler = useCallback(() => {
    console.log("Search Icon Pressed");
  }, []);

  const searchChangeHandler = useCallback((val) => {
    setSearch(val);
  }, []);

  const cancelHandler = useCallback(() => {
    console.log("Search Canceled");
    if (inputRef && inputRef.current) inputRef.current.blur();
    setSearch("");
  }, [inputRef]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <HeaderMenuButton navigation={navigation} />,
      headerTitle: () => (
        <SearchInput
          ref={inputRef}
          onChange={searchChangeHandler}
          onPress={searchPressHandler}
          value={search}
        />
      ),
      headerRight: () => <HeaderCancelButtons onCancel={cancelHandler} />
    });
  }, [
    navigation,
    search,
    inputRef,
    searchChangeHandler,
    searchPressHandler,
    cancelHandler
  ]);

  const itemHandler = (id: number) => {
    console.log(`Item: ${id}`);
  };

  const renderItem = (itemData) => (
    <SearchItem item={itemData.item} onPress={itemHandler} />
  );

  const ListHeaderComponent = (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Popular Searches</Text>
    </View>
  );

  return (
    <View style={styles.screen}>
      <HeaderGradient />
      <View style={{ ...styles.container, marginTop: useHeaderHeight() }}>
        <FlatList
          keyExtractor={(item: SearchMediaItem) => item.id.toString()}
          data={items}
          contentContainerStyle={styles.list}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={ListHeaderComponent}
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
  content: {},
  container: {
    width: "100%"
  },
  titleContainer: {
    height: 40,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 10
  },
  title: {
    fontFamily: Theme.fontFamilyBold,
    color: "#E5E5E5",
    fontSize: 20
  },
  list: {
    flexDirection: "column"
  }
});

export default SearchScreen;
