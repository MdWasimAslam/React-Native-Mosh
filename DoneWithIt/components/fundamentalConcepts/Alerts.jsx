import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  View,
  Button,
} from "react-native";
import React from "react";

const Alerts = () => {
  const getPrompt = () => {
    Alert.prompt("Enter Your Name", "John Doe", (text) => {
      Alert.alert("You entered: " + text);
    });
  };
  return (
    <View>
      <TouchableOpacity
        style={styles.myBtn}
        onPress={() => alert("Button Clicked")}
      >
        <Text>Click Me</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.myBtn}
        onPress={() => Alert.alert("My Alert")}
      >
        <Text>Click Me</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.myBtn} onPress={getPrompt}>
        <Text>Click Me</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.myBtn} onPress={getPrompt}>
        <Button
          title="Click Me"
          onPress={() =>
            Alert.alert("Title", "Message", [
              { text: "Yes", onPress: () => console.log("Yes Pressed") },
              { text: "No", onPress: () => console.log("No Pressed") },
            ])
          }
        />
      </TouchableOpacity>
    </View>
  );
};

export default Alerts;

const styles = StyleSheet.create({
  myBtn: {
    backgroundColor: "#f9c2ff",
    padding: 10,
    margin: 10,
    borderRadius: 5,
    alignItems: "center",
    color: "white",
  },
});
