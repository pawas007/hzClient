import { TextInput, View } from "react-native";
import Texts from "@/components/Texts";
import React from "react";
import { FormFieldProps } from "@/types/forms";
import { useTheme } from "@/hooks/useTheme";

const FormField: React.FC<FormFieldProps> = ({
  label,
  value,
  onChange,
  error,
  touched,
}) => {
  const errorMessage = Array.isArray(error)
    ? error.join(", ")
    : typeof error === "string"
      ? error
      : "";
  const isTouched = typeof touched === "boolean" ? touched : !!touched;
  const { colorScheme } = useTheme();
  const textColor =
    colorScheme === "light"
      ? "text-primary bg-gray-800"
      : "text-white bg-gray-100";
  return (
    <View className="mb-5">
      <Texts className="mb-1">{label}</Texts>
      <TextInput
        value={value}
        onChangeText={onChange}
        className={
          textColor + " w-full p-3 bg-gray-100 border border-border rounded-lg"
        }
      />
      {errorMessage && isTouched && (
        <Texts style={{ color: "red" }} className="mt-2">
          {errorMessage}
        </Texts>
      )}
    </View>
  );
};

export default FormField;
