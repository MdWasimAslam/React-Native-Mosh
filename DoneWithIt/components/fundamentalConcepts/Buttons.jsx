import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const Buttons = () => {
  return (
    <View>
      {/* The style prop is not available for the Button component */}
      <Button title="Click Me" onPress={() => alert("Button Clicked")} />

      <TouchableOpacity
        style={styles.myBtn}
        onPress={() => alert("Button Clicked")}
      >
        <Text>Click Me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  myBtn: {
    backgroundColor: "#f9c2ff",
    padding: 10,
    margin: 10,
    borderRadius: 5,
    alignItems: "center",
    color: "white",
  },
});
