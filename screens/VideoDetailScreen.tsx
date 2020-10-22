import React, { FC, useEffect, useLayoutEffect, useState } from "react";
import { FlatList, StyleSheet, View, Image } from "react-native";
import { useHeaderHeight } from "@react-navigation/stack";

import Theme from "../constants/theme";
import { nSeries } from "../data/shared";
import data from "../data/video-detail-series";
import { IEpisode } from "../models/media";

import Text from "../components/UI/Text";
import Button from "../components/UI/Button";
import IconTextButton from "../components/UI/IconTextButton";
import ProfileButton from "../components/ProfileButton";
import HeaderGradient from "../components/HeaderGradient";
import WebVideoPlayer from "../components/WebVideoPlayer";
import Tabs from "../components/Tabs";
import Rating from "../components/Svg/Rating";
import InlineList from "../components/InlineList";
import ListHeader from "../components/ListHeader";

import EpisodeItem from "../components/EpisodeItem";
import TrailerItem from "../components/TrailerItem";
import GridImageItem from "../components/GridImageItem";

const item = data.item;
const episodes = data?.episodes || [];
const trailers = data?.trailers || [];
const mores = data?.mores || [];

const initialTabs = data?.tabs || [];
const initialTab = initialTabs.find((item) => item.selected);
const selTab = initialTab ? initialTab.id : "episodes";

type VideoDetailScreenProps = {
  navigation: any;
};

const VideoDetailScreen: FC<VideoDetailScreenProps> = ({ navigation }) => {
  const [tabs, setTabs] = useState(initialTabs);
  const [tab, setTab] = useState(selTab);
  const [headerIndicies, setHeaderIndicies] = useState([]);
  const [models, setModels] = useState([]);

  useEffect(() => {
    let newModels = [{ id: "0", type: "First", title: "list" }];
    const newIndicies = [];

    if (tab === "episodes") {
      const seasonNums = [];
      for (const episode of episodes) {
        if (!seasonNums.includes(episode.season)) {
          seasonNums.push(episode.season);
          newIndicies.push(newModels.length);
          newModels.push({
            id: episode.season.toString(),
            type: "Header",
            title: `Season ${episode.season}`
          });
        }
        newModels.push({ ...episode, type: "Episode" });
      }
    } else if (tab === "trailers") {
      for (const trailer of trailers) {
        newModels.push({ ...trailer, type: "Trailer" });
      }
    } else if (tab === "more") {
      for (const more of mores) {
        newModels.push({ ...more, type: "More" });
      }
    }
    setModels(newModels);
    setHeaderIndicies(newIndicies);
  }, [tab]);

  const profileHandler = () => {
    navigation.navigate("More");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: null,
      headerRight: () => <ProfileButton onPress={profileHandler} />
    });
  }, [navigation]);

  const playHandler = () => {
    console.log(`playHandler`);
  };

  const downloadHandler = (id: string | number) => {
    console.log(`Download: ${id}`);
  };

  const itemPlayHandler = () => {
    console.log(`itemPlayHandler`);
  };

  const actionHandler = (id: string) => {
    console.log(`Action: ${id}`);
  };

  const tabHandler = (id: string) => {
    const newTabs = tabs.map((tab) => ({ ...tab, selected: tab.id === id }));
    setTabs(newTabs);
    setTab(id);
  };

  const peopleHandler = (name: string) => {
    if (name === "more") {
      console.log(`Show all people`);
    } else {
      console.log(`People: ${name}`);
    }
  };

  const moreItemHandler = (id: string) => {
    console.log(`More Item: ${id}`);
  };

  const episode = item?.episode;
  let episodeEl = null;
  if (episode) {
    episodeEl = <Text style={styles.episode}>{episode}</Text>;
  }

  const cast = item?.cast;
  let castEl = null;
  if (cast && cast.length > 0) {
    castEl = (
      <InlineList
        style={styles.cast}
        color={Theme.textColor}
        label="Cast"
        max={2}
        items={cast}
        onPress={peopleHandler}
      />
    );
  }

  const creators = item?.creators;
  let creatorsEl = null;
  if (creators && creators.length > 0) {
    creatorsEl = (
      <InlineList
        style={styles.creators}
        color={Theme.textColor}
        label="Creators"
        max={2}
        items={creators}
        onPress={peopleHandler}
      />
    );
  }

  const listHeaderView = (
    <View style={styles.listHeader}>
      <View style={styles.info}>
        <View style={styles.typeContainer}>
          <Image style={styles.typeImage} source={nSeries} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.match}>{item.match} match</Text>
          <Text style={styles.year}>{item.year}</Text>
          <Rating style={styles.rating} />
          <Text style={styles.extra}>{item.extra}</Text>
          <Text style={styles.quality}>{item.quality}</Text>
        </View>
        <View style={styles.buttons}>
          <Button
            style={styles.playButton}
            buttonStyle={styles.playButtonStyle}
            textStyle={styles.playButtonText}
            icon="ios-play"
            color="#000000"
            onPress={playHandler}
          >
            Play
          </Button>
          <Button
            style={styles.downloadButton}
            buttonStyle={styles.downloadButtonStyle}
            textStyle={styles.downloadButtonText}
            icon="ios-download"
            color="#FFFFFF"
            onPress={downloadHandler}
          >
            Download
          </Button>
        </View>
        <View style={styles.textContainer}>
          {episodeEl}
          <Text style={styles.text}>{item.text}</Text>
          {castEl}
          {creatorsEl}
        </View>
        <View style={styles.actions}>
          <IconTextButton
            id="my-list"
            style={styles.action}
            textStyle={styles.actionText}
            icon="ios-add"
            onPress={actionHandler}
          >
            My List
          </IconTextButton>
          <IconTextButton
            id="rate"
            style={styles.action}
            textStyle={styles.actionText}
            icon="ios-thumbs-up"
            onPress={actionHandler}
          >
            Rate
          </IconTextButton>
          <IconTextButton
            id="share"
            style={styles.action}
            textStyle={styles.actionText}
            icon="ios-share"
            onPress={actionHandler}
          >
            Share
          </IconTextButton>
        </View>
      </View>
      <Tabs style={styles.tabs} items={tabs} onPress={tabHandler} />
    </View>
  );

  const renderItem = (itemData) => {
    if (itemData.index === 0) return listHeaderView;
    if (headerIndicies.includes(itemData.index)) {
      return <ListHeader title={itemData.item.title} />;
    } else {
      if (itemData.item.type === "Episode") {
        return (
          <EpisodeItem
            item={itemData.item}
            onPress={itemPlayHandler}
            onDownload={downloadHandler}
          />
        );
      } else if (itemData.item.type === "Trailer") {
        return <TrailerItem item={itemData.item} onPress={itemPlayHandler} />;
      } else if (itemData.item.type === "More") {
        return <GridImageItem item={itemData.item} onPress={moreItemHandler} />;
      }
    }
  };

  return (
    <View style={styles.screen}>
      <HeaderGradient />
      <View style={{ ...styles.content, marginTop: useHeaderHeight() }}>
        <WebVideoPlayer style={styles.videoPlayer} uri={item.videoUri} />
        <FlatList
          style={styles.list}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          horizontal={false}
          nestedScrollEnabled={true}
          data={models}
          keyExtractor={(item: any) => item.id}
          renderItem={renderItem}
          stickyHeaderIndices={headerIndicies}
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
  content: {
    flex: 1,
    flexDirection: "column"
  },
  videoPlayer: {},
  list: {
    flex: 1,
    paddingHorizontal: 10
  },
  listContent: {},
  listHeader: {},
  info: {},
  typeContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  typeImage: {
    width: 58,
    height: 16
  },
  titleContainer: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  title: {
    color: Theme.secondary,
    fontSize: 26,
    fontFamily: Theme.fontFamilyBold
  },
  details: {
    marginTop: 6,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  match: {
    color: "green",
    fontFamily: Theme.fontFamilyBold,
    marginRight: 15
  },
  year: {
    color: Theme.textColor,
    marginRight: 10
  },
  rating: {
    width: 18,
    height: 18,
    marginRight: 10,
    marginTop: 1
  },
  extra: {
    color: Theme.textColor,
    marginRight: 10
  },
  quality: {
    color: Theme.textColor
  },
  buttons: {
    marginTop: 20,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  playButton: {
    width: "100%"
  },
  playButtonStyle: {
    backgroundColor: "#FFF",
    flexDirection: "row",
    paddingVertical: 5
  },
  playButtonText: {
    color: "#000",
    marginLeft: 10
  },
  downloadButton: {
    marginTop: 10,
    width: "100%"
  },
  downloadButtonStyle: {
    backgroundColor: "#2B2B2B",
    flexDirection: "row",
    paddingVertical: 5
  },
  downloadButtonText: {
    marginLeft: 10
  },
  textContainer: {
    marginTop: 20
  },
  episode: {
    color: Theme.secondary,
    fontSize: 16,
    fontFamily: Theme.fontFamilyBold,
    marginBottom: 5
  },
  text: {
    color: Theme.secondary,
    fontSize: 16,
    lineHeight: 20
  },
  cast: {
    marginTop: 8,
    height: 20
  },
  creators: {
    height: 20
  },
  actions: {
    marginTop: 20,
    marginBottom: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  action: {},
  actionText: {
    fontFamily: "Cabin-Bold"
  },
  tabs: {},
  tabContent: {
    flex: 1,
    minHeight: 1000
  }
});

export default VideoDetailScreen;
