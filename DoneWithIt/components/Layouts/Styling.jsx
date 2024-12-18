import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppButton from "../../AppComponent/AppButton";
const Styling = () => {
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "dodgerblue",
          //   borderWidth: 10,
          //   borderColor: "royalblue",
          //   borderRadius: 50,
          //   borderTopWidth: 20,
          //   borderTopLeftRadius: 50,
          //   shadowColor: "grey",
          //   shadowOffset: { width: 10, height: 10 },
          //   shadowOpacity: 1,
          //   shadowRadius: 10,
          padding: 20,
          paddingHorizontal: 10,
        }}
      >
        <View style={{ width: 50, height: 50, backgroundColor: "gold" }}></View>
      </View>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "tomato",
          margin: 20,
        }}
      ></View>

      <Text
        style={{
          fontSize: 30,
          fontFamily: "Roboto",
          fontStyle: "italic",
          fontWeight: "bold",
        }}
      >
        Styling
      </Text>
      <MaterialCommunityIcons name="email" size={50} color="dodgerblue" />
      <AppButton title="Login" />
    </View>
  );
};

export default Styling;

const styles = StyleSheet.create({});
