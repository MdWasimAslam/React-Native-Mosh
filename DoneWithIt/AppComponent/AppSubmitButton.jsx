import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppButton from "./AppButton";
import { useFormikContext } from "formik";

const AppSubmitButton = ({ title }) => {
  const { handleSubmit } = useFormikContext();

  return (
    <>
      <AppButton title={title} onPress={handleSubmit} />
    </>
  );
};

export default AppSubmitButton;

const styles = StyleSheet.create({});
