import React from "react";
import {View, Text} from "react-native";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function HomeScreen() {
    return (
        <View className="flex-1 justify-center items-center">
            <Text className="text-black dark:text-white text-lg font-bold">Home</Text>
            <ThemeSwitcher/>
        </View>
    );
}
