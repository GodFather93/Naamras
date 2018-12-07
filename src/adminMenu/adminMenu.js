import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  FlatList,
  ImageBackground
} from "react-native";
import { createStackNavigator } from "react-navigation";
const { width, height } = Dimensions.get("window");
import LinearGradient from "react-native-linear-gradient";

export default class AdminMenu extends Component {
  static navigationOptions = {
    title: "Admin_Menu",
    header: false
  };
  constructor(props) {
    super(props);
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            height: height * 0.1,
            width: width,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgb(0,69,136)"
          }}
        >
          <Text
            style={{
              fontSize: 19,
              fontWeight: "800",
              letterSpacing: 3,
              marginTop: 5,
              textAlign: "center",
              marginTop: 10,
              color: "white",
              letterSpacing: 2
            }}
          >
            NAAMRAS
          </Text>
        </View>
        <LinearGradient
          colors={["#8AA1EC", "#FEF9F8", "#FEF9F8"]}
          style={styles.linearGradient}
        >
          <View
            style={{
              alignItems: "center",
              borderColor: "grey"
            }}
          >
            <FlatList
              style={{
                marginTop: 20,
                ...this.props.style
              }}
              data={[
                {
                  key: "ADMIN PANEL",
                  image: require("../../images/events.png"),
                  page: "Kirtan"
                },

                {
                  key: "SCHEDULE",
                  image: require("../../images/kirtan.png")
                }
              ]}
              numColumns={2}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => navigate(item.page)}
                  style={{ marginBottom: 9 }}
                >
                  <View
                    style={{
                      height: height * 0.18,
                      width: height * 0.18,
                      alignItems: "center",
                      justifyContent: "center",
                      borderColor: "grey",
                      borderWidth: 0.5,
                      borderRadius: 10,
                      overflow: "hidden",
                      marginHorizontal: 10,
                      marginTop: 5,
                      marginBottom: 5
                    }}
                  >
                    <ImageBackground
                      style={{
                        width: "100%",
                        height: "100%",

                        borderColor: "black"
                      }}
                      source={item.image}
                    />
                  </View>
                  <Text
                    style={{
                      textAlign: "center",
                      marginBottom: 8,
                      fontSize: 12,
                      fontWeight: "300"
                    }}
                  >
                    {item.key}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1
  }
});
