import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const AppPickerItem = ({ label, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default AppPickerItem;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: "Avenir",
    color: "#0c0c0c",
    padding: 20,
  },
});
