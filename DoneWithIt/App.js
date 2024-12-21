import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import { GestureHandlerRootView, Switch } from "react-native-gesture-handler";
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
import AppIcon from "./AppComponent/AppIcon";
import AppList from "./AppComponent/AppList";
import AccountScreen from "./screens/AccountScreen";
import ListingsScreen from "./screens/ListingsScreen";
import Input from "./components/fundamentalConcepts/Input";
import AppInputText from "./AppComponent/AppInputText";
import Switchs from "./components/fundamentalConcepts/Switchs";
import AppPicker from "./AppComponent/AppPicker";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Camera", value: 3 },
];
export default function App() {
  const [category, setcategory] = React.useState(categories[0]);
  console.log("=====>", category);
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
        {/* <MessagesScreen /> */}
        {/* <AppIcon
          name="email"
          size={50}
          backgroundColor="dodgerblue"
          iconColor="white"
        /> */}
        {/* <AppList
          title="My Title"
          // subTitle="My SubTitle"
          ImageComponent={
            <AppIcon
              name="email"
              size={50}
              backgroundColor="dodgerblue"
              iconColor="white"
            />
          }
        /> */}

        {/* <AccountScreen /> */}
        {/* <ListingsScreen /> */}
        {/* <Input /> */}
        {/* <AppInputText icon={"email"} placeholder="Email" /> */}
        {/* <Switchs /> */}
        <AppPicker
          icon="apps"
          placeholder={"Category"}
          items={categories}
          onSelectItem={(item) => setcategory(item)}
          selectedItem={category}
        />
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
