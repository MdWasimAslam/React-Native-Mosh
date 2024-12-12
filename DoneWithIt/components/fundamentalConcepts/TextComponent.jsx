import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TextComponent = () => {
  const [textColor, setTextColor] = React.useState("black");
  const toggleTextColor = () => {
    setTextColor(textColor === "black" ? "red" : "black");
  };
  return (
    <View>
      <Text>I am a normal text component</Text>

      <Text style={{ color: "red" }}>I am a red text component</Text>
      <Text numberOfLines={1}>
        I will be on a single line even if I am too long Lorem ipsum dolor sit
        amet, consectetur adipisicing elit. Alias et quae, est perspiciatis
        aliquid dolore ullam incidunt provident. Quam, quis!
      </Text>

      <Text style={{ fontSize: 20 }}>I am a big text</Text>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>I am a bold text</Text>
      <Text style={{ fontSize: 20, fontStyle: "italic" }}>
        I am an italic text
      </Text>
      <Text style={{ fontSize: 20, textDecorationLine: "underline" }}>
        I am an underlined text
      </Text>

      <Text style={{ fontSize: 20, textDecorationLine: "line-through" }}>
        I am a line-through text
      </Text>
      <Text onPress={toggleTextColor} style={{ color: textColor }}>
        Press me and my text color will change
      </Text>
    </View>
  );
};

export default TextComponent;

const styles = StyleSheet.create({});
