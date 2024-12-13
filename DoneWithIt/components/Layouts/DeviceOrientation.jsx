import { SafeAreaView, View, Dimensions } from "react-native";
import React from "react";
import { useDeviceOrientation } from "@react-native-community/hooks";

const DeviceOrientation = () => {
  const orientation = useDeviceOrientation();
  const [width, setWidth] = React.useState(0);
  const [height, setheight] = React.useState(200);
  React.useEffect(() => {
    if (orientation === "portrait") {
      setWidth(Dimensions.get("screen").width);
    } else {
      const screenWidth = Dimensions.get("screen").width;
      const screenHeight = Dimensions.get("screen").height;
      setWidth(screenWidth);
      setheight(screenHeight);
    }
  }, [orientation]);

  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
      <View
        style={{ width: width, height: height, backgroundColor: "dodgerblue" }}
      ></View>
    </SafeAreaView>
  );
};

export default DeviceOrientation;
