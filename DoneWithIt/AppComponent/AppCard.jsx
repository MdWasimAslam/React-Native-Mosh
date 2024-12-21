import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const AppCard = ({ title, price, image }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <View style={styles.cardContainer}>
        <Image source={image} style={styles.image} resizeMode="cover" />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.priceButton}>
            <Text style={styles.price}>{price}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AppCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: "90%",
    height: 300,
    backgroundColor: "#e3e3e3",
    borderRadius: 15,
    overflow: "hidden",
    marginBottom: 20,
    paddingBottom: 10,
  },
  image: {
    width: "100%",
    height: "70%",
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
