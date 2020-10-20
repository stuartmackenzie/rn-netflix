import React, { FC } from "react";
import { StyleSheet, FlatList } from "react-native";

import { ListControl, ListControlParams } from "../models/view";
import Theme from "../constants/theme";

import Text from "./UI/Text";
import ListHeader from "./ListHeader";
import RouteControl from "./UI/RouteControl";
import SwitchControl from "./UI/SwitchControl";
import ButtonControl from "./UI/ButtonControl";
import StorageControl from "./UI/StorageControl";
import LinkControl from "./UI/LinkControl";
import OptionControl from "./UI/OptionControl";

type ControlsListProps = {
  items?: Array<any>;
  onPress?: ((item: any) => void) | undefined;
  onChange?: ((item: any, val: any) => void) | undefined;
};

const ControlsList: FC<ControlsListProps> = ({ items, onPress, onChange }) => {
  onPress = onPress || (() => {});
  onChange = onChange || (() => {});

  // const models = items.map(item => new ListControl(item));
  const headerIndicies = items.reduce((acc, cur, idx) => {
    if (cur.type === "Header") acc.push(idx);
    return acc;
  }, []);

  const renderItem = (itemData: { item: any; index: number }) => {
    let control;
    const item = itemData.item;
    const idx = itemData.index;
    switch (item.type) {
      case "Header":
        control = <ListHeader {...item} />;
        break;
      case "Route":
        control = <RouteControl item={item} onPress={onPress} />;
        break;
      case "Switch":
        control = <SwitchControl item={item} onChange={onChange} />;
        break;
      case "Button":
        control = <ButtonControl item={item} onPress={onPress} />;
        break;
      case "Storage":
        control = <StorageControl item={item} />;
        break;
      case "Link":
        control = <LinkControl item={item} onPress={onPress} />;
        break;
      case "Option":
        control = <OptionControl item={item} onPress={onPress} />;
        break;
      default:
        control = (
          <Text style={styles.text}>
            Control for type {item.type} not found.
          </Text>
        );
        break;
    }
    return control;
  };

  return (
    <FlatList
      style={styles.list}
      contentContainerStyle={styles.content}
      data={items}
      keyExtractor={(item: ListControl) => item.id}
      renderItem={renderItem}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      stickyHeaderIndices={headerIndicies}
    ></FlatList>
  );
};

const styles = StyleSheet.create({
  list: { flex: 1 },
  content: {},
  text: {
    color: Theme.secondary,
    fontSize: 18,
    fontFamily: Theme.fontFamily
  }
});

export default ControlsList;
