import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const AppInputText = ({ icon, ...otherProps }) => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name={icon}
        size={20}
        color="gray"
        style={styles.icon}
      />
      <TextInput style={styles.textInput} {...otherProps} />
    </View>
  );
};

export default AppInputText;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f4f4",
    padding: 15,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    fontSize: 18,
    fontFamily: "Avenir",
    color: "#0c0c0c",
  },
});
