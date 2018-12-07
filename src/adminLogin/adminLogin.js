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

export default class AdminLogin extends Component {
  static navigationOptions = {
    title: "Login",
    header: false
  };
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            width: width * 0.75,
            height: "100%",
            backgroundColor: "white"
          }}
        >
          <View style={{ height: height * 0.7 }}>
            <Text
              style={{
                marginTop: 55,
                fontSize: 24,
                marginLeft: width * 0.15,
                fontWeight: "500",
                letterSpacing: 1
              }}
            >
              NAAMRAS
            </Text>
            <Text
              style={{
                marginTop: 180,
                fontSize: 16,
                marginLeft: width * 0.15,
                fontWeight: "300"
              }}
            >
              LOG INTO ADMIN PANEL
            </Text>
            <TextInput
              style={{ height: 40, marginTop: 35, marginLeft: width * 0.15 }}
              placeholder="Phone Number/ Email ID"
              onChangeText={text => this.setState({ text })}
            />
            <View
              style={{
                height: 1,
                width: width * 0.55,
                backgroundColor: "grey",
                marginLeft: width * 0.15
              }}
            />
            <TextInput
              style={{ height: 40, marginTop: 20, marginLeft: width * 0.15 }}
              placeholder="Password"
              onChangeText={text => this.setState({ text })}
            />
            <View
              style={{
                height: 1,
                width: width * 0.55,
                backgroundColor: "grey",
                marginLeft: width * 0.15
              }}
            />
          </View>
          <View style={{ height: height * 0.3, justifyContent: "center" }}>
            <TouchableOpacity
              style={{
                backgroundColor: "rgb(0,80,160)",
                marginLeft: width * 0.15,
                height: 40,
                width: width * 0.55,
                borderRadius: 5,
                borderWidth: 1,
                justifyContent: "center"
              }}
              onPress={() => navigate("adminDash")}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 22,
                  textAlign: "center",
                  fontWeight: "400"
                }}
              >
                LOGIN
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: width * 0.25,
            height: height,
            flexDirection: "column"
          }}
        >
          <LinearGradient
            colors={["#0C1C52", "#0C1C52", "#1B3BA6"]}
            style={{ height: height * 0.1 }}
          >
            <View
              style={{
                height: height * 0.1,

                width: "100%"
              }}
            />
          </LinearGradient>
          <LinearGradient
            colors={["#8AA1EC", "#FEF9F8", "#FEF9F8"]}
            style={{ height: height * 0.9 }}
          >
            <View
              style={{
                height: height * 0.9,

                width: "100%"
              }}
            />
          </LinearGradient>
        </View>
      </View>
    );
  }
}
