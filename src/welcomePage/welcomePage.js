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
import { LogPanel } from "../logPanel";

export default class MainMenu extends Component {
  static navigationOptions = {
    title: "Menu",
    header: false
  };
  state = {
    ready: false
  };
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ ready: true });
    }, 4000);
  }
  render() {
    if (this.state.ready === false) {
      return (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#191970"
          }}
        >
          <Image
            style={{ height: 250, width: 250 }}
            source={require("../../images/naamraslogo.png")}
          />
        </View>
      );
    } else {
      return <LogPanel />;
    }
  }
}
