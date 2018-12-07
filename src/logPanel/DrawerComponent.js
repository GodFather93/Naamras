import React, { Component } from "react";
import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import DrawerSideMenu from "./DrawerSideMenu";
import DashBoard from "./AppDashBoard";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions
} from "react-native";
const { width, height } = Dimensions.get("window");
import { NavigationActions } from "react-navigation";

const MainScreenNavigator = createStackNavigator(
  {
    MainDash: { screen: DashBoard }
  },
  {
    headerMode: "none"
  }
);

const Drawer = createDrawerNavigator(
  {
    Main: { screen: MainScreenNavigator }
  },
  {
    contentComponent: DrawerSideMenu,
    drawerWidth: width
  }
);

export default Drawer;
