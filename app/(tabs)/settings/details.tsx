import React from "react";
import { View, ScrollView, Alert } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { Dropdown } from "react-native-element-dropdown";
import Texts from "@/components/Texts";
import { TouchableOpacity } from "react-native";
import { Switch } from "react-native-switch";
import FormField from "@/components/FormField";
import { useToast } from "@/hooks/useToast";
import { useGlobalStore } from "@/store/globalStore";
import { useDropdownStyles } from "@/hooks/useDropdownStyles";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  city: Yup.string().required("City is required"),
  address1: Yup.string().required("Address 1 is required"),
  state: Yup.string().required("State/Region is required"),
  postcode: Yup.string().required("Zip Code is required"),
  address2: Yup.string(),
  country: Yup.string().required("Country is required"),
  paymentMethod: Yup.string().required("Payment Method is required"),
});

export default function UserInfoForm() {
  const { showToast } = useToast();
  const dropdownStyles = useDropdownStyles();
  const countries = useGlobalStore((state) => state.countries);
  const paymentMethods = useGlobalStore((state) => state.paymentMethods);
  return (
    <Formik
      initialValues={{
        firstName: "John",
        lastName: "Doe",
        country: "ua",
        city: "Kyiv",
        address1: "Main Street 1",
        state: "Kyivska",
        postcode: "01001",
        address2: "Apt 5",
        paymentMethod: "paypal",
        separateInvoices: false,
        isBusiness: false,
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        showToast("success", "User details updated");
      }}
    >
      {({
        handleChange,
        handleSubmit,
        values,
        setFieldValue,
        errors,
        touched,
      }) => (
        <ScrollView className="p-5">
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
          <Texts className="  mb-1">Country</Texts>
          <Dropdown
            {...dropdownStyles}
            data={countries}
            labelField="label"
            valueField="value"
            placeholder="Select a country"
            value={values.country}
            onChange={(item) => setFieldValue("country", item.value)}
          />
          <Texts className="  mb-1 mt-3">Payment Method</Texts>
          <Dropdown
            {...dropdownStyles}
            data={paymentMethods}
            labelField="label"
            valueField="value"
            placeholder="Select a payment method"
            value={values.paymentMethod}
            onChange={(item) => setFieldValue("paymentMethod", item.value)}
          />
          <View className="flex-row justify-between items-center mt-4">
            <Texts className=" ">Separate Invoices</Texts>
            <Switch
              value={values.separateInvoices}
              onValueChange={() =>
                setFieldValue("separateInvoices", !values.separateInvoices)
              }
              circleSize={24}
              barHeight={30}
              backgroundActive={"rgba(76, 120, 253, 1)"}
              backgroundInactive={"rgba(164, 159, 185, 1)"}
              circleActiveColor={"rgba(130, 150, 255, 1)"}
              circleInActiveColor={"rgba(38, 38, 79, 1)"}
              renderInActiveText={false}
              renderActiveText={false}
            />
          </View>

          <View className="flex-row justify-between items-center mt-4">
            <Texts className=" ">Business?</Texts>
            <Switch
              value={values.isBusiness}
              onValueChange={() =>
                setFieldValue("isBusiness", !values.isBusiness)
              }
              circleSize={24}
              barHeight={30}
              backgroundActive={"rgba(76, 120, 253, 1)"}
              backgroundInactive={"rgba(164, 159, 185, 1)"}
              circleActiveColor={"rgba(130, 150, 255, 1)"}
              circleInActiveColor={"rgba(38, 38, 79, 1)"}
              renderInActiveText={false}
              renderActiveText={false}
            />
          </View>
          <TouchableOpacity
            onPress={() => handleSubmit()}
            className="w-full mt-6  mb-4 p-4 bg-indigo rounded-lg shadow-md items-center"
          >
            <Texts className=" text-lg">Save Changes</Texts>
          </TouchableOpacity>
        </ScrollView>
      )}
    </Formik>
  );
}
