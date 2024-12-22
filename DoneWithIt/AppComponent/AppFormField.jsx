import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppInputText from "./AppInputText";
import { useFormikContext } from "formik";

const AppFormField = ({ name, ...otherProps }) => {
  const { errors, touched, setFieldTouched, handleChange } = useFormikContext();
  return (
    <>
      <AppInputText
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      />
      <Text style={{ color: "red", marginLeft: 10 }}>
        {errors[name] && touched[name] ? errors[name] : null}
      </Text>
    </>
  );
};

export default AppFormField;

const styles = StyleSheet.create({});
