import { useColorScheme } from "nativewind";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";

export function useTheme() {
    const { colorScheme, setColorScheme } = useColorScheme();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadTheme = async () => {
            const storedTheme = await AsyncStorage.getItem("theme");
            if (storedTheme) {
                setColorScheme(storedTheme as "light" | "dark");
            }
            setIsLoading(false);
        };
        loadTheme();
    }, []);

    const toggleTheme = async () => {
        const newTheme = colorScheme === "light" ? "dark" : "light";
        setColorScheme(newTheme);
        await AsyncStorage.setItem("theme", newTheme);
    };

    return { colorScheme, toggleTheme, isLoading };
}
