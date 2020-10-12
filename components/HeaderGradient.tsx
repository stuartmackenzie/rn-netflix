import React, { FC } from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useHeaderHeight } from '@react-navigation/stack';

type HeaderGradientProps = {
  colors?: Array<string>;
};

const HeaderGradient: FC<HeaderGradientProps> = ({ colors=['rgba(0,0,0,0.8)', 'transparent'] }) => {
  return <LinearGradient colors={colors} style={{...styles.view, height: useHeaderHeight()}}></LinearGradient>;
};

const styles = StyleSheet.create({
  view: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 100,
    zIndex: 2
  }
});

export default HeaderGradient;