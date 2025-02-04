import React, { useState } from "react";
import { View, ScrollView, Alert, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import Texts from "@/components/Texts";
import FormField from "@/components/FormField";
import { useColorScheme } from "react-native";

// Валідація форми
const validationSchema = Yup.object().shape({
  newPassword: Yup.string().required("New Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword")], "Passwords must match")
    .required("Confirm Password is required"),
  ipAddress: Yup.string().matches(
    /^(\d{1,3}\.){3}\d{1,3}$/,
    "Enter a valid IP address"
  ),
});

export default function SecuritySettings() {
  const isDarkMode = useColorScheme() === "dark";
  const [apiKey, setApiKey] = useState("");

  const handleGenerateApiKey = () => {
    const newKey = Math.random().toString(36).substring(2, 18).toUpperCase();
    setApiKey(newKey);
    Alert.alert("API Key", `New API Key: ${newKey}`);
  };

  return (
    <Formik
      initialValues={{ newPassword: "", confirmPassword: "", ipAddress: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => Alert.alert("Message", "Security settings updated")}
    >
      {({ handleChange, handleSubmit, values, errors, touched }) => (
        <ScrollView className="p-5">
          {/* New Password */}
          <FormField
            label="New Password"
            value={values.newPassword}
            onChange={handleChange("newPassword")}
            error={errors.newPassword}
            touched={touched.newPassword}

          />

          {/* Confirm Password */}
          <FormField
            label="Confirm New Password"
            value={values.confirmPassword}
            onChange={handleChange("confirmPassword")}
            error={errors.confirmPassword}
            touched={touched.confirmPassword}

          />

          {/* API Key Section */}
          <View className="mt-6">
            <Texts className="text-primary-700 dark:text-white text-lg mb-2">
              API Key
            </Texts>
            <TouchableOpacity
              onPress={handleGenerateApiKey}
              className="w-full p-4 bg-indigo rounded-lg shadow-md items-center"
            >
              <Texts className="text-white text-lg">Generate new key</Texts>
            </TouchableOpacity>

            {apiKey ? (
              <View className="mt-3 p-3 border border-gray-300 dark:border-gray-600 rounded-lg">
                <Texts className="text-primary-700 dark:text-white">{apiKey}</Texts>
              </View>
            ) : null}
          </View>

          {/* IP Access List */}
          <View className="mt-6">
            <Texts className="text-primary-700 dark:text-white text-lg mb-2">
              IP Access List
            </Texts>
            <FormField
              label="Allowed IP"
              value={values.ipAddress}
              onChange={handleChange("ipAddress")}
              error={errors.ipAddress}
              touched={touched.ipAddress}
            />
            <TouchableOpacity
              onPress={() => Alert.alert("IP List", "IP added successfully")}
              className="w-full p-4 bg-indigo rounded-lg shadow-md items-center"
            >
              <Texts className="text-white text-lg">Add More</Texts>
            </TouchableOpacity>
          </View>

          {/* Two-Factor Authentication */}
          <View className="mt-6">
            <Texts className="text-primary-700 dark:text-white text-lg mb-2">
              Two-Factor Authentication
            </Texts>
            <View className="p-3 bg-yellow-200 dark:bg-yellow-700 rounded-lg">
              <Texts className="text-yellow-900 dark:text-white">
                We strongly encourage you to enable Two-Factor Authentication for added security.
              </Texts>
            </View>
            <TouchableOpacity
              onPress={() => Alert.alert("2FA", "Enabling Two-Factor Authentication...")}
              className="w-full mt-3 p-4 bg-indigo rounded-lg shadow-md items-center"
            >
              <Texts className="text-white text-lg">Click here to Enable</Texts>
            </TouchableOpacity>
          </View>

          {/* Save Changes Button */}
          <TouchableOpacity
            onPress={() => handleSubmit()}
            className="w-full mt-6 p-4 bg-indigo rounded-lg shadow-md items-center"
          >
            <Texts className="text-white text-lg">Save Changes</Texts>
          </TouchableOpacity>
        </ScrollView>
      )}
    </Formik>
  );
}
