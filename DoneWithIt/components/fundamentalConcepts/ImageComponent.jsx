import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const ImageComponent = () => {
  return (
    <View>
      <Image style={styles.myImg} source={require("../../assets/icon.png")} />
      <Image
        style={styles.myImg}
        source={{
          uri: "https://fastly.picsum.photos/id/626/200/200.jpg?hmac=k-fpo_bQAtxcljtuQzE1GTq5YEufAV5jjzW3n86c0i0",
        }}
        // blurRadius={1} <--- this will blur the image
        // onLoad={() => console.log("Image loaded")} <--- this will log "Image loaded" when the image is loaded
        // onLoadStart={() => console.log("Image loading started")} <--- this will log "Image loading started" when the image starts loading
        // onLoadEnd={() => console.log("Image loading ended")} <--- this will log "Image loading ended" when the image loading ends
        // onError={() => console.log("Image loading failed")} //<--- this will log "Image loading failed" when the image loading
        // onProgress={({ nativeEvent }) => console.log(nativeEvent.loaded)} <--- this will log the percentage of the image loaded
        // resizeMode="cover" // <--- this will cover the image to the size of the container
      />
    </View>
  );
};

export default ImageComponent;

const styles = StyleSheet.create({
  myImg: {
    width: 200,
    height: 200,
  },
});
