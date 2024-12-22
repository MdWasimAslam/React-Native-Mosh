import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppInputText from "../AppComponent/AppInputText";
import AppButton from "../AppComponent/AppButton";
import { Formik } from "formik";
import * as Yup from "yup";
import AppFormField from "../AppComponent/AppFormField";
import AppSubmitButton from "../AppComponent/AppSubmitButton";
import AppForm from "../AppComponent/AppForm";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  return (
    <View style={{ padding: 20 }}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          name="email"
          placeholder="Email"
          icon="email"
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
        />

        <AppFormField
          name="password"
          placeholder="Password"
          icon="lock"
          autoCorrect={false}
          autoCapitalize="none"
          secureTextEntry
          textContentType="password"
        />

        <AppSubmitButton title="Login" />
      </AppForm>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
