import React from "react";
import { View, Text } from "react-native";
import { Switch } from "react-native-switch";
import { useTheme } from "@/hooks/useTheme";

export default function ThemeSwitcher() {
    const { colorScheme, toggleTheme } = useTheme();

    return (
        <View className="flex-row justify-center items-center space-x-4 mt-5">
            <Switch
                value={colorScheme === "dark"}
                onValueChange={toggleTheme}
                circleSize={24}
                barHeight={30}
                circleBorderWidth={2}
                backgroundActive={"#4F46E5"}
                backgroundInactive={"#D1D5DB"}
                circleActiveColor={"#FACC15"}
                circleInActiveColor={"#374151"}
                switchLeftPx={2}
                switchRightPx={2}
            />
        </View>
    );
}
