/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { createStackNavigator } from "react-navigation";
const { width, height } = Dimensions.get("window");
import { LogPanel } from "./src/logPanel";
import { LoginScreen } from "./src/loginScreen";
import { AdminLogin } from "./src/adminLogin";
import { SignUp } from "./src/signUp";
import { AdminMenu } from "./src/adminMenu";
import { MainDash } from "./src/mainDash";
import { SewaMenu } from "./src/sewaMenu";
import { KirtanSchedule } from "./src/kirtanSchedule";
import { Exhibition } from "./src/exhibition";
import SewaOne from "./src/sewaMenuServices/darbarSahibSewa";

const NavigationApp = createStackNavigator(
  {
    logPanel: { screen: LogPanel },
    login: { screen: LoginScreen },
    adminLogin: { screen: AdminLogin },
    signUp: { screen: SignUp },
    adminDash: { screen: AdminMenu },
    Dash: { screen: MainDash },
    Sewa: { screen: SewaMenu },
    Kirtan: { screen: KirtanSchedule },
    Exhibition: { screen: Exhibition },
    SewaOne: { screen: SewaOne }
  },
  {
    headerMode: "none"
  }
);

export default class App extends Component<Props> {
  render() {
    return <NavigationApp />;
  }
}
