import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { createStackNavigator } from "react-navigation";
const { width, height } = Dimensions.get("window");
import LinearGradient from "react-native-linear-gradient";

export default class DashBoard extends Component {
  static navigationOptions = {
    title: "Panel",
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
    }, 3000);
  }
  render() {
    const { navigate } = this.props.navigation;
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
      return (
        <View>
          <LinearGradient
            colors={["#8AA1EC", "#8AA1EC", "#FEF9F8"]}
            style={{ height: height }}
          >
            <View
              style={{
                width: width,
                height: "100%",

                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Image
                style={{ height: 250, width: 250 }}
                source={require("../../images/naamraslogo.png")}
              />
              <TouchableOpacity
                style={{
                  backgroundColor: "rgb(0,80,160)",
                  marginTop: 25,
                  height: 40,
                  width: width * 0.6,
                  borderRadius: 5,
                  borderWidth: 1,
                  justifyContent: "center"
                }}
                onPress={() => navigate("login")}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 18,
                    textAlign: "center",
                    fontWeight: "300",
                    letterSpacing: 1
                  }}
                >
                  LOG IN AS USER
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: "rgb(0,80,160)",
                  marginTop: 25,

                  height: 40,
                  width: width * 0.6,
                  borderRadius: 5,
                  borderWidth: 1,
                  justifyContent: "center"
                }}
                onPress={() => navigate("adminLogin")}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 18,
                    textAlign: "center",
                    fontWeight: "300",
                    letterSpacing: 1
                  }}
                >
                  ADMIN PANEL
                </Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>
      );
    }
  }
}
