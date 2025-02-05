import { useColorScheme } from "react-native";
import { TextStyle, ViewStyle } from "react-native";

export const useDropdownStyles = () => {
  const isDarkMode = useColorScheme() === "dark";

  return {
    style: {
      marginBottom: 5,
      height: 45,
      borderColor: "rgba(208, 205, 221, 1)",
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
      backgroundColor: isDarkMode
        ? "rgba(25, 25, 53, 1)"
        : "rgba(244, 243, 249, 1)",
    } as ViewStyle,

    placeholderStyle: {
      fontSize: 14,
      color: isDarkMode ? "rgba(196, 196, 196, 1)" : "rgba(25, 25, 53, 1)",
    } as TextStyle,

    selectedTextStyle: {
      fontSize: 14,
      fontWeight: "600" as
        | "normal"
        | "bold"
        | "100"
        | "200"
        | "300"
        | "400"
        | "500"
        | "600"
        | "700"
        | "800"
        | "900", // ✅ Виправлення типу fontWeight
      color: isDarkMode ? "rgba(244, 243, 249, 1)" : "rgba(25, 25, 53, 1)",
    } as TextStyle,

    containerStyle: {
      backgroundColor: isDarkMode
        ? "rgba(25, 25, 53, 1)"
        : "rgba(244, 243, 249, 1)",
      borderRadius: 10,
      paddingVertical: 10,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 5,
    } as ViewStyle,

    itemTextStyle: {
      fontSize: 14,
      color: isDarkMode ? "rgba(244, 243, 249, 1)" : "rgba(25, 25, 53, 1)",
    } as TextStyle,

    itemContainerStyle: {
      paddingVertical: 0,
      borderBottomWidth: 0.5,
      borderBottomColor: "rgba(208, 205, 221, 0.5)",
    } as ViewStyle,

    activeColor: isDarkMode ? "rgba(38, 38, 79, 1)" : "rgba(220, 220, 255, 1)",
  };
};
