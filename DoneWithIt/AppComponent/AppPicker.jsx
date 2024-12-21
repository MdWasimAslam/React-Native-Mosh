import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
  FlatList,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Screen from "../screens/Screen";
import AppPickerItem from "./AppPickerItem";

const AppPicker = ({
  icon,
  placeholder,
  items,
  onSelectItem,
  SelectedItem,
}) => {
  const [openModal, setopenModal] = React.useState(false);

  return (
    <>
      <TouchableOpacity onPress={() => setopenModal(true)}>
        <View style={styles.container}>
          <MaterialCommunityIcons
            name={icon}
            size={20}
            color="gray"
            style={styles.icon}
          />
          <Text style={{ flex: 1 }}>
            {SelectedItem ? SelectedItem.label : placeholder}
          </Text>

          <MaterialCommunityIcons name="chevron-down" size={20} color="gray" />
        </View>
      </TouchableOpacity>
      <Modal visible={openModal} animationType="slide">
        <Screen>
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <AppPickerItem
                label={item.label}
                onPress={() => {
                  setopenModal(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
};

export default AppPicker;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f4f4",
    padding: 15,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    fontSize: 18,
    fontFamily: "Avenir",
    color: "#0c0c0c",
  },
});
