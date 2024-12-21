import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppCard from "../AppComponent/AppCard";

const listings = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch for sale",
    price: 200,
    image: require("../assets/couch.jpg"),
  },
];
const ListingsScreen = () => {
  return (
    <View>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <AppCard title={item.title} price={item.price} image={item.image} />
        )}
      />
    </View>
  );
};

export default ListingsScreen;

const styles = StyleSheet.create({});
