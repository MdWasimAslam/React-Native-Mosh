import { StyleSheet, View } from "react-native";
import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import AppFormField from "../AppComponent/AppFormField";
import AppPicker from "../AppComponent/AppPicker";
import AppSubmitButton from "../AppComponent/AppSubmitButton";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Camera", value: 3 },
];

const ListingEditScreen = () => {
  return (
    <Formik
      initialValues={{
        title: "",
        price: "",
        description: "",
        category: null,
      }}
      onSubmit={(values) => console.log(values)}
      validationSchema={Yup.object().shape({
        title: Yup.string().required().min(1).label("Title"),
        price: Yup.number().required().min(1).max(10000).label("Price"),
        description: Yup.string().label("Description"),
        category: Yup.object()
          .nullable()
          .required("Category is required")
          .label("Category"),
      })}
    >
      {({ handleChange, handleSubmit, values, setFieldValue, fieldValue }) => (
        <View style={styles.container}>
          <AppFormField
            maxLength={255}
            name="title"
            placeholder="Title"
            onChangeText={handleChange("title")}
            value={values.title}
          />
          <AppFormField
            keyboardType="numeric"
            maxLength={8}
            name="price"
            placeholder="Price"
            onChangeText={handleChange("price")}
            value={values.price}
          />
          <AppPicker
            items={categories}
            placeholder="Category"
            selectedItem={values.category}
            onSelectItem={(item) => setFieldValue("category", item)}
          />
          <AppFormField
            maxLength={255}
            multiline
            name="description"
            numberOfLines={3}
            placeholder="Description"
            onChangeText={handleChange("description")}
            value={values.description}
          />
          <AppSubmitButton title="Post" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};

export default ListingEditScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f9f9f9",
    flex: 1,
  },
});
