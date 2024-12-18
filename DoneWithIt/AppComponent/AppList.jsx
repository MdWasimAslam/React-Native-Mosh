import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const AppList = ({ image, title, subTitle, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      underlayColor="#f0f0f0"
    >
      <View>
        <Image style={styles.image} source={image} />
      </View>
      <View>
        <Text style={styles.textTitle}>{title}</Text>
        <Text style={styles.textSubTitle}>{subTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AppList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    // marginVertical: 20,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 100,
  },
  textTitle: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  textSubTitle: {
    marginLeft: 10,
    fontSize: 16,
    color: "#777",
  },
});
