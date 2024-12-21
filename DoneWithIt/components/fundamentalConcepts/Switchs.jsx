import { StyleSheet, Switch, Text, View } from "react-native";
import React from "react";

const Switchs = () => {
  const [value, setvalue] = React.useState(false);
  return (
    <View>
      <Switch value={value} onValueChange={() => setvalue(!value)} />
    </View>
  );
};

export default Switchs;

const styles = StyleSheet.create({});
