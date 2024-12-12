import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TextComponent from "./components/fundamentalConcepts/TextComponent";
import ImageComponent from "./components/fundamentalConcepts/ImageComponent";
import Touchable from "./components/fundamentalConcepts/Touchable";
import Buttons from "./components/fundamentalConcepts/Buttons";
import Alerts from "./components/fundamentalConcepts/Alerts";
import Stylesheet from "./components/fundamentalConcepts/Stylesheet";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <TextComponent /> */}
      {/* <ImageComponent /> */}
      {/* <Touchable /> */}
      {/* <Buttons /> */}
      {/* <Alerts /> */}
      <Stylesheet />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
