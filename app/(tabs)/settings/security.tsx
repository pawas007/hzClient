import React, { useState } from "react";
import { View, ScrollView, Alert, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import Texts from "@/components/Texts";
import FormField from "@/components/FormField";
import { useColorScheme } from "react-native";
import { useToast } from "@/hooks/useToast";

const validationSchema = Yup.object().shape({
  newPassword: Yup.string().required("New Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword")], "Passwords must match")
    .required("Confirm Password is required"),
  ipAddress: Yup.string().matches(
    /^(\d{1,3}\.){3}\d{1,3}$/,
    "Enter a valid IP address",
  ),
});

export default function SecuritySettings() {
  const [apiKey, setApiKey] = useState("");
  const { showToast } = useToast();
  const handleGenerateApiKey = () => {
    const newKey = Math.random().toString(36).substring(2, 18).toUpperCase();
    setApiKey(newKey);
    showToast("success", `New API Key: ${newKey}`);
  };

  return (
    <Formik
      initialValues={{ newPassword: "", confirmPassword: "", ipAddress: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => showToast("success", "Security settings updated")}
    >
      {({ handleChange, handleSubmit, values, errors, touched }) => (
        <ScrollView className="p-5">
          <FormField
            label="New Password"
            value={values.newPassword}
            onChange={handleChange("newPassword")}
            error={errors.newPassword}
            touched={touched.newPassword}
          />
          <FormField
            label="Confirm New Password"
            value={values.confirmPassword}
            onChange={handleChange("confirmPassword")}
            error={errors.confirmPassword}
            touched={touched.confirmPassword}
          />
          <View className="mt-6">
            <Texts className="  text-lg mb-2">API Key</Texts>
            <TouchableOpacity
              onPress={handleGenerateApiKey}
              className="w-full p-4 bg-indigo rounded-lg shadow-md items-center"
            >
              <Texts className=" text-lg">Generate new key</Texts>
            </TouchableOpacity>

            {apiKey ? (
              <View className="mt-3 p-3 border border-gray-300 dark:border-gray-600 rounded-lg">
                <Texts className=" ">{apiKey}</Texts>
              </View>
            ) : null}
          </View>

          <View className="mt-6">
            <Texts className="  text-lg mb-2">IP Access List</Texts>
            <FormField
              label="Allowed IP"
              value={values.ipAddress}
              onChange={handleChange("ipAddress")}
              error={errors.ipAddress}
              touched={touched.ipAddress}
            />
            <TouchableOpacity
              onPress={() => showToast("success", "IP added successfully")}
              className="w-full p-4 bg-indigo rounded-lg shadow-md items-center"
            >
              <Texts className=" text-lg">Add More</Texts>
            </TouchableOpacity>
          </View>
          <View className="mt-6">
            <Texts className="  text-lg mb-2">Two-Factor Authentication</Texts>
            <View className="p-3 bg-yellow-200 dark:bg-yellow-700 rounded-lg">
              <Texts className="text-yellow-900 ">
                We strongly encourage you to enable Two-Factor Authentication
                for added security.
              </Texts>
            </View>
            <TouchableOpacity
              onPress={() =>
                showToast("success", "Enabling Two-Factor Authentication...")
              }
              className="w-full mt-3 p-4 bg-indigo rounded-lg shadow-md items-center"
            >
              <Texts className=" text-lg">Click here to Enable</Texts>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => handleSubmit()}
            className="w-full mt-6 p-4 bg-indigo rounded-lg shadow-md items-center"
          >
            <Texts className=" text-lg">Save Changes</Texts>
          </TouchableOpacity>
        </ScrollView>
      )}
    </Formik>
  );
}
