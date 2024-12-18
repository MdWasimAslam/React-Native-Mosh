import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import AppList from "../AppComponent/AppList";
import Screen from "./Screen";
import AppDelAction from "../AppComponent/AppDelAction";
import Swipeable from "react-native-gesture-handler/Swipeable";

const MessagesScreen = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      title: "T1",
      description: "D1",
      image: require("../assets/profile.jpg"),
    },
    {
      id: 2,
      title: "T2",
      description: "D2",
      image: require("../assets/profile.jpg"),
    },
  ]);

  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleDelete = (id) => {
    setMessages(messages.filter((message) => message.id !== id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <Swipeable
            renderRightActions={() => (
              <AppDelAction onPress={() => handleDelete(item.id)} />
            )}
          >
            <AppList
              title={item.title}
              subTitle={item.description}
              image={item.image}
              onPress={() => console.log("Message selected --->", item)}
            />
          </Swipeable>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        refreshing={isRefreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/profile.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: "#000",
  },
});

export default MessagesScreen;
