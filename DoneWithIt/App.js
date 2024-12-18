import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import TextComponent from "./components/fundamentalConcepts/TextComponent";
import ImageComponent from "./components/fundamentalConcepts/ImageComponent";
import Touchable from "./components/fundamentalConcepts/Touchable";
import Buttons from "./components/fundamentalConcepts/Buttons";
import Alerts from "./components/fundamentalConcepts/Alerts";
import Stylesheet from "./components/fundamentalConcepts/Stylesheet";
import Dimentions from "./components/Layouts/Dimentions";
import DeviceOrientation from "./components/Layouts/DeviceOrientation";
import FlexBox from "./components/Layouts/FlexBox";
import Welcome from "./screens/WelcomeScreen";
import Styling from "./components/Layouts/Styling";
import AppCard from "./AppComponent/AppCard";
import ListingDetalsScreen from "./screens/ListingDetalsScreen";
import ViewImageScreen from "./screens/ViewImageScreen";
import MessagesScreen from "./screens/MessagesScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <GestureHandlerRootView>
        {/* <TextComponent /> */}
        {/* <ImageComponent /> */}
        {/* <Touchable /> */}
        {/* <Buttons /> */}
        {/* <Alerts /> */}
        {/* <Stylesheet /> */}
        {/* <Dimentions /> */}
        {/* <DeviceOrientation /> */}
        {/* <FlexBox /> */}
        {/* <Welcome /> */}
        {/* <Styling /> */}
        {/* <AppCard
        title="Red Jacket for sale"
        price="$100"
        image={require("./assets/jacket.jpg")}
      /> */}
        {/* <ListingDetalsScreen title="Red Jacket for sale" price="$100" /> */}
        {/* <ViewImageScreen /> */}
        <MessagesScreen />
        <StatusBar style="auto" />
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
