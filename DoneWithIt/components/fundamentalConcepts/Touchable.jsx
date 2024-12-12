import {
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import React from "react";

const Touchable = () => {
  const imgClicked = () => {
    console.log("Image Clicked");
  };
  return (
    <View>
      <Text>Touchable</Text>
      <TouchableWithoutFeedback onPress={imgClicked}>
        <Image style={styles.myImg} source={require("../../assets/icon.png")} />
      </TouchableWithoutFeedback>

      <TouchableHighlight onPress={imgClicked}>
        <Image style={styles.myImg} source={require("../../assets/icon.png")} />
      </TouchableHighlight>

      <TouchableOpacity onPress={imgClicked}>
        <Image style={styles.myImg} source={require("../../assets/icon.png")} />
      </TouchableOpacity>
    </View>
  );
};

export default Touchable;

const styles = StyleSheet.create({
  myImg: {
    width: 100,
    height: 100,
  },
});
