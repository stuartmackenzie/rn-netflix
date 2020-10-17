const primary = "#e91e63";
const secondary = "#FFF";
const inactive = "#BBB";
const fontFamily = "Cabin-Regular";
const fontFamilyBold = "Cabin-Bold";

const theme = {
  primary,
  secondary,
  buttonColor: "#D22F27",
  textColor: "#B3B3B3",
  inactive: inactive,
  categories: "#039be5",
  favorites: "#8e24aa",
  fontFamily,
  fontFamilyBold,
  headerStyle: {
    backgroundColor: "black",
    shadowRadius: 0,
    shadowOffset: {
      height: 0
    }
  },
  headerTintColor: secondary,
  headerTitleStyle: {
    fontFamily,
    fontSize: 20
  },
  headerBackTitleStyle: {
    fontFamily
  },
  tabBarOptions: {
    activeTintColor: "#FFF",
    inactiveTintColor: "#AAA",
    labelStyle: {
      fontFamily: fontFamilyBold
    },
    style: {
      backgroundColor: "black",
      borderWidth: 0,
      borderTopWidth: 0
    }
  }
};

export default theme;
