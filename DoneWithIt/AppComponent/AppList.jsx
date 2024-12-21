import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const AppList = ({ image, title, subTitle, IconComponent, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      underlayColor="#f0f0f0"
    >
      <View>
        {IconComponent}
        {image && <Image source={image} style={styles.image} />}
      </View>
      <View style={styles.TextContainer}>
        <Text style={styles.textTitle}>{title}</Text>
        {subTitle && <Text style={styles.textSubTitle}>{subTitle}</Text>}
      </View>
    </TouchableOpacity>
  );
};

export default AppList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: "#F9F6F7",
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
  TextContainer: {
    justifyContent: "center",
  },
});
