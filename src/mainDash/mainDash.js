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

export default class MainDash extends Component {
  static navigationOptions = {
    title: "Menu",
    header: false
  };
  constructor(props) {
    super(props);
  }
  state = {
    ListData: [
      {
        title: "YT Live-Stream",
        image: require("../../images/photogallery.png"),
        page: "Sewa"
      },
      {
        title: "Gliding Collection Preview",
        image: require("../../images/photogallery.png"),
        subtitle:
          "On tapping view controller popped up and shows the whole preview",
        page: "Pre2"
      },
      {
        title: "Centered Menu ",
        image: require("../../images/photogallery.png"),
        subtitle:
          "On tapping view controller popped up and shows the whole preview",
        page: "Pre3"
      },
      {
        title: "YT Live-Stream",
        image: require("../../images/photogallery.png"),
        page: "Sewa"
      }
    ]
  };
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
          <View style={{ height: height * 0.15, marginTop: 20 }}>
            <ScrollView
              horizontal={true}
              style={{ width: width, paddingLeft: 0, marginRight: 5 }}
              decelerationRate={1}
              pagingEnabled={false}
              center={false}
              directionalLockEnabled={false}
              scrollEventThrottle={16}
              showsHorizontalScrollIndicator={false}
            >
              {this.state.ListData.map((item, index) => (
                <View
                  style={{
                    height: "80%",
                    width: width * 0.48,
                    borderRadius: 2,
                    paddingLeft: 15
                  }}
                >
                  <TouchableOpacity
                    onPress={() => navigate(item.page)}
                    style={{
                      height: "100%",
                      width: "100%",
                      opacity: 0.9,
                      borderColor: "black",
                      borderRadius: 1,
                      borderWidth: 1,
                      justifyContent: "center",
                      backgroundColor: "white"
                    }}
                  >
                    <Text style={{ textAlign: "center" }}> Play</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
          </View>
          <View style={{ alignItems: "center", borderColor: "grey" }}>
            <FlatList
              style={{
                marginTop: 2,
                ...this.props.style
              }}
              data={[
                {
                  key: "SCHEDULE",
                  image: require("../../images/kirtan.png"),
                  page: "Kirtan"
                },
                {
                  key: "HALL MAP",
                  image: require("../../images/hallmap.png")
                },
                {
                  key: "PHOTO GALLERY",
                  image: require("../../images/photogallery.png")
                },
                {
                  key: "SEWA",
                  image: require("../../images/sewa.png"),
                  page: "Sewa"
                },
                {
                  key: "TRANSPORTATION",
                  image: require("../../images/transport.png")
                },
                {
                  key: "CALENDAR",
                  image: require("../../images/calendar.png")
                },
                {
                  key: "EXIBITION",
                  image: require("../../images/exhibition.png"),
                  page: "Exhibition"
                },
                {
                  key: "EVENTS",
                  image: require("../../images/events.png")
                },
                {
                  key: "PERSONALITIES",
                  image: require("../../images/personalities.png")
                },
                {
                  key: "BLOG",
                  image: require("../../images/blog.png")
                },
                {
                  key: "SPONSORS",
                  image: require("../../images/sponsors.png")
                },
                {
                  key: "CONTACT US",
                  image: require("../../images/contactus.png")
                }
              ]}
              numColumns={3}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => navigate(item.page)}
                  style={{ marginBottom: 9 }}
                >
                  <View
                    style={{
                      height: height * 0.12,
                      width: height * 0.122,
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
