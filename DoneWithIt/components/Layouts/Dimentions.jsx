import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";

const Dimentions = () => {
  console.log(Dimensions.get("screen"));
  return (
    <View>
      <View
        style={{ width: 150, height: 150, backgroundColor: "dodgerblue" }}
      ></View>
    </View>
  );
};

export default Dimentions;

const styles = StyleSheet.create({});
