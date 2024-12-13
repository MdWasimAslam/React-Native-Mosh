import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TextComponent from "./components/fundamentalConcepts/TextComponent";
import ImageComponent from "./components/fundamentalConcepts/ImageComponent";
import Touchable from "./components/fundamentalConcepts/Touchable";
import Buttons from "./components/fundamentalConcepts/Buttons";
import Alerts from "./components/fundamentalConcepts/Alerts";
import Stylesheet from "./components/fundamentalConcepts/Stylesheet";
import Dimentions from "./components/Layouts/Dimentions";
import DeviceOrientation from "./components/Layouts/DeviceOrientation";
import FlexBox from "./components/Layouts/FlexBox";

export default function App() {
  return (
    <>
      {/* <TextComponent /> */}
      {/* <ImageComponent /> */}
      {/* <Touchable /> */}
      {/* <Buttons /> */}
      {/* <Alerts /> */}
      {/* <Stylesheet /> */}
      {/* <Dimentions /> */}
      {/* <DeviceOrientation /> */}
      <FlexBox />
      <StatusBar style="auto" />
    </>
  );
}
