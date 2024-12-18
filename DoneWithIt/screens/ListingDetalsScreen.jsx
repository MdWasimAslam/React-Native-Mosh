import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppList from "../AppComponent/AppList";

const ListingDetalsScreen = ({ title, price }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.priceButton}>
          <Text style={styles.price}>{price}</Text>
        </View>
      </View>

      <View>
        <AppList
          image={require("../assets/profile.jpg")}
          title="Mosh Hamedani"
          subTitle="5 Listings"
        />
      </View>
    </View>
  );
};

export default ListingDetalsScreen;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#f9f9f9",
  },
  image: {
    width: "100%",
    height: 300,
  },
  textContainer: {
    padding: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  priceButton: {
    backgroundColor: "#f95959",
    width: 100,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  price: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },
});
