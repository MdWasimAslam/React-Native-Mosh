import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const AppDelAction = ({ onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={{
          backgroundColor: "red",
          width: 70,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons name="trash-can" size={35} color="white" />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AppDelAction;

const styles = StyleSheet.create({});
