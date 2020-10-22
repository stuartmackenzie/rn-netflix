import React, { FC, useLayoutEffect } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  ScrollView,
  Dimensions
} from "react-native";
import { useHeaderHeight } from "@react-navigation/stack";

import data from "../data/profiles";
import moreData from "../data/more";

import { Profile, ProfileParams } from "../models/user";
import { ListItem, ListItemParams } from "../models/view";

import Theme from "../constants/theme";
import Button from "../components/UI/Button";
import HeaderGradient from "../components/HeaderGradient";
import ProfileButton from "../components/ProfileButton";
import ProfileItem from "../components/ProfileItem";
import MoreItem from "../components/MoreItem";
import SignOutItem from "../components/SignOutItem";

type MoreScreenProps = {
  navigation: any;
};

const MoreScreen: FC<MoreScreenProps> = ({ navigation }) => {
  const items = data.items;
  const profiles: Array<Profile> = items.map(
    (item: ProfileParams) => new Profile(item)
  );
  const moreListItems: Array<ListItem> = moreData.items.map(
    (item: ListItemParams) => new ListItem(item)
  );
  const version = moreData.version;

  const profileWidth = 60;
  const profileMargin = 24;
  const selId = 234509;
  const winWidth = Dimensions.get("window").width;
  let listWidth = profiles.length * (profileWidth + profileMargin);
  listWidth = listWidth < winWidth ? winWidth : listWidth;

  const headerHeight = useHeaderHeight();
  const scrollHeight = Dimensions.get("window").height - headerHeight - 270;

  const profileHandler = () => {
    console.log("Profile");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "More",
      headerRight: () => <ProfileButton onPress={profileHandler} />
    });
  }, [navigation]);

  const profileItemHandler = (id: number) => {
    if (id === -1) {
      console.log(`Add Profile`);
    } else {
      console.log(`Open Profile: ${id.toString()}`);
    }
  };

  const manageHandler = () => {
    console.log("Manage Profiles");
  };

  const signOutHandler = () => {
    console.log("Sign Out");
  };

  const itemHandler = (id: string) => {
    console.log(`More: ${id}`);
    switch (id) {
      case "settings":
        navigation.navigate("Settings");
        break;
      case "mylist":
        navigation.navigate("MyList");
        break;
      case "help":
        navigation.navigate("Help");
        break;
      default:
        break;
    }
  };

  const renderItem = (itemData) => (
    <ProfileItem
      profile={itemData.item}
      selId={selId}
      width={profileWidth}
      textStyle={styles.profileText}
      onPress={profileItemHandler}
    />
  );

  const moreEls = moreListItems.map((item) => (
    <MoreItem key={item.id} item={item} onPress={itemHandler} />
  ));

  return (
    <View style={styles.screen}>
      <HeaderGradient />
      <View style={{ ...styles.container, marginTop: headerHeight }}>
        <FlatList
          style={styles.list}
          contentContainerStyle={{ ...styles.listContent, width: listWidth }}
          data={profiles}
          keyExtractor={(item: Profile) => item.id.toString()}
          renderItem={renderItem}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        ></FlatList>
        <View style={styles.manageContainer}>
          <Button
            style={styles.editButton}
            buttonStyle={styles.editButtonStyle}
            textStyle={styles.editButtonText}
            icon="md-create"
            color="#B2B2B2"
            size={20}
            onPress={manageHandler}
          >
            Manage Profiles
          </Button>
        </View>
        <ScrollView
          style={{ ...styles.scroll, height: scrollHeight }}
          contentContainerStyle={styles.scrollContent}
        >
          {moreEls}
          <SignOutItem
            style={styles.signOut}
            version={version}
            onPress={signOutHandler}
          />
        </ScrollView>
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
  },
  profileText: {
    fontSize: 14
  },
  manageContainer: {
    height: 50,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  editButton: {
    backgroundColor: "transparent"
  },
  editButtonStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "transparent"
  },
  editButtonText: {
    color: "#B2B2B2",
    marginLeft: 10,
    fontSize: 14,
    fontFamily: Theme.fontFamilyBold
  },
  scroll: {
    height: 300
  },
  scrollContent: {
    height: "100%",
    flexDirection: "column"
  },
  signOut: {
    marginTop: 30
  }
});

export default MoreScreen;
