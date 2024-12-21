import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const Input = () => {
  const [textInput, settextInput] = React.useState("");
  return (
    <View>
      <TextInput
        style={styles.textInput}
        placeholder="Email"
        onChangeText={(text) => settextInput(text)}
        clearButtonMode="always"
        // secureTextEntry <--- For Password
      />
      <Text style={{ fontSize: 20 }}>{textInput}</Text>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
