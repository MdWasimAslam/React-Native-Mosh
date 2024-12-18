import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ViewImageScreen = () => (
  <View style={styles.container}>
    {/* Action Buttons */}
    <View style={styles.actionContainer}>
      <MaterialCommunityIcons name="close" style={styles.icon} />
      <MaterialCommunityIcons name="trash-can-outline" style={styles.icon} />
    </View>

    {/* Image Display */}
    <Image
      resizeMode="contain"
      source={require("../assets/chair.jpg")}
      style={styles.image}
    />
  </View>
);

export default ViewImageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", // Ensures a clean white background
  },
  actionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20, // Adds consistent spacing
  },
  icon: {
    fontSize: 35,
    color: "black",
  },
  image: {
    flex: 1, // Ensures the image fills the remaining space
    width: "100%",
  },
});
