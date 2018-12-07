import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { NavigationActions } from "react-navigation";
import { DrawerActions } from "react-navigation";

const Cell = props => (
  <TouchableOpacity style={cellStyle.container} onPress={props.onPress}>
    <Text style={cellStyle.titleText}>{props.title}</Text>
  </TouchableOpacity>
);

const cellStyle = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: "center",
    marginBottom: 2,
    borderBottomColor: "white",
    borderBottomWidth: 1
  },
  titleText: {
    fontSize: 15,
    color: "white"
  }
});

export default class DrawerSideMenu extends Component {
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({ routeName: route });
    this.props.navigation.dispatch(navigateAction);
    this.props.navigation.dispatch(DrawerActions.closeDrawer());
  };

  onCellPress(target) {
    this.props.navigation.dispatch(DrawerActions.closeDrawer()),
      this.props.navigation.navigate(target);
  }

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={["#FCD500", "#F27623"]}
          style={{ flex: 1, paddingTop: 25 }}
        >
          <View style={{ alignItems: "center" }}>
            <Image
              source={require("../../images/icon.png")}
              style={styles.logo}
            />
            <Text style={styles.Naamras}>Naamras</Text>
          </View>
          <Image
            style={{
              width: 25,
              height: 25,
              position: "absolute",
              left: 10,
              top: 35
            }}
            source={require("../../images/1.png")}
          />

          <Cell
            title="DashBoard"
            onPress={() => this.onCellPress("MainDash")}
          />
          <Cell title="Admin Panel" onPress={() => null} />

          <Cell title="Login as user" onPress={() => null} />
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10
  },
  logo: {
    height: 50,
    width: 50
  },
  Naamras: {
    color: "white",
    fontSize: 14,
    fontWeight: "300",
    letterSpacing: 2,
    marginTop: 5
  }
});
