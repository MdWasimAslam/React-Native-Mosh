import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppList from "../AppComponent/AppList";
import { FlatList } from "react-native";
import AppIcon from "../AppComponent/AppIcon";

const MenuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: "dodgerblue",
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: "tomato",
    },
  },
];

const AccountScreen = () => {
  return (
    <View>
      <View style={styles.container}>
        <AppList
          title="John Doe"
          subTitle="john@example.com"
          image={require("../assets/profile.jpg")}
        />
      </View>

      <View style={styles.container}>
        <FlatList
          data={MenuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={() => (
            <View
              style={{ width: "100%", height: 1, backgroundColor: "lightgray" }}
            />
          )}
          renderItem={({ item }) => (
            <AppList
              title={item.title}
              IconComponent={
                <AppIcon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>

      <View>
        <AppList
          title="Log Out"
          IconComponent={<AppIcon name="logout" backgroundColor="#ffe66d" />}
        />
      </View>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
});
