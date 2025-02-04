import { TextInput, View } from "react-native";
import Texts from "@/components/Texts";
import React from "react";

// @ts-ignore
const FormField = ({ label, value, onChange, error, touched }) => (
  <View className="mb-5">
    <Texts className="text-primary-700 dark: mb-1">{label}</Texts>
    <TextInput
      value={value}
      onChangeText={onChange}
      className="w-full p-3 bg-gray-100 border border-border dark:bg-gray-800 text-primary-700 dark: rounded-lg"
    />
    {error && touched && (
      <Texts className="text-[rgba(197,49,49,0.7)] mt-2">{error}</Texts>
    )}
  </View>
);

export default FormField;
