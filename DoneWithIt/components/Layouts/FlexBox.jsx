import { StyleSheet, Text, View } from "react-native";
import React from "react";

const FlexBox = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{ width: 100, height: 100, backgroundColor: "dodgerblue" }}
      />
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "gold",
        }}
      />
      <View style={{ width: 100, height: 100, backgroundColor: "tomato" }} />
    </View>
  );
};

export default FlexBox;

const styles = StyleSheet.create({});
