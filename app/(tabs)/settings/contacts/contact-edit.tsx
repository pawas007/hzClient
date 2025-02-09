import React from "react";
import { ScrollView, TouchableOpacity, Alert } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Formik } from "formik";
import * as Yup from "yup";
import Texts from "@/components/Texts";
import FormField from "@/components/FormField";
import { useToast } from "@/hooks/useToast";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: Yup.string().required("Phone number is required"),
  city: Yup.string().required("City is required"),
  address1: Yup.string().required("Address 1 is required"),
  state: Yup.string().required("State/Region is required"),
  postcode: Yup.string().required("Zip Code is required"),
  address2: Yup.string(),
  country: Yup.string().required("Country is required"),
});

export default function ContactEditScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { contact } = route.params as { contact: any };
  const { showToast } = useToast();
  const handleSubmit = (values: any) => {
    showToast("success", "Contact updated successfully");
    navigation.goBack();
  };

  return (
    <ScrollView className="p-5">
      <Formik
        initialValues={{
          firstName: contact.firstName || "",
          lastName: contact.lastName || "",
          email: contact.email || "",
          phoneNumber: contact.phoneNumber || "",
          city: contact.city || "",
          address1: contact.address1 || "",
          state: contact.state || "",
          postcode: contact.postcode || "",
          address2: contact.address2 || "",
          country: contact.country || "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleSubmit, values, errors, touched }) => (
          <>
            <FormField
              label="First Name"
              value={values.firstName}
              onChange={handleChange("firstName")}
              error={errors.firstName}
              touched={touched.firstName}
            />
            <FormField
              label="Last Name"
              value={values.lastName}
              onChange={handleChange("lastName")}
              error={errors.lastName}
              touched={touched.lastName}
            />
            <FormField
              label="Email Address"
              value={values.email}
              onChange={handleChange("email")}
              error={errors.email}
              touched={touched.email}
            />
            <FormField
              label="Phone Number"
              value={values.phoneNumber}
              onChange={handleChange("phoneNumber")}
              error={errors.phoneNumber}
              touched={touched.phoneNumber}
            />
            <FormField
              label="City"
              value={values.city}
              onChange={handleChange("city")}
              error={errors.city}
              touched={touched.city}
            />
            <FormField
              label="Address 1"
              value={values.address1}
              onChange={handleChange("address1")}
              error={errors.address1}
              touched={touched.address1}
            />
            <FormField
              label="State/Region"
              value={values.state}
              onChange={handleChange("state")}
              error={errors.state}
              touched={touched.state}
            />
            <FormField
              label="Zip Code"
              value={values.postcode}
              onChange={handleChange("postcode")}
              error={errors.postcode}
              touched={touched.postcode}
            />
            <FormField
              label="Address 2"
              value={values.address2}
              onChange={handleChange("address2")}
              error={errors.address2}
              touched={touched.address2}
            />
            <FormField
              label="Country"
              value={values.country}
              onChange={handleChange("country")}
              error={errors.country}
              touched={touched.country}
            />

            <TouchableOpacity
              onPress={() => handleSubmit()}
              className="w-full mb-4 p-4 bg-indigo rounded-lg shadow-md items-center"
            >
              <Texts className=" text-lg">Save Changes</Texts>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.goBack()}
              className="w-full   mb-4 p-4 bg-indigo rounded-lg shadow-md items-center"
            >
              <Texts className=" text-lg">Cancel</Texts>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </ScrollView>
  );
}
