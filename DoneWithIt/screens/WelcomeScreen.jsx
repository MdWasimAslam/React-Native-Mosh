import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import React from "react";

const Welcome = () => {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text>Sell What You Don't Need</Text>
      </View>
      <View style={styles.loginBtn}></View>
      <View style={styles.registerBtn}></View>
    </ImageBackground>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginBtn: {
    width: "100%",
    height: 80,
    backgroundColor: "#fc5c65",
    alignItems: "center",
    justifyContent: "center",
  },
  registerBtn: {
    width: "100%",
    height: 80,
    backgroundColor: "#4ECDC4",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
});
