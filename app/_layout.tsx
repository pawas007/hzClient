import { ThemeProvider } from "@react-navigation/native";
import { Themes } from "@/constants/Themes";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import "../global.css";
import { useTheme } from "@/hooks/useTheme";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ToastProvider } from "react-native-toast-notifications";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const { colorScheme, isLoading } = useTheme();

    const [loaded] = useFonts({
        Roboto: require("../assets/fonts/Roboto-Regular.ttf"),
    });

    useEffect(() => {
        if (loaded && !isLoading) {
            SplashScreen.hideAsync();
        }
    }, [loaded, isLoading]);

    if (!loaded || isLoading) {
        return null;
    }

    return (
        <ToastProvider>
            <SafeAreaProvider>
                <ThemeProvider
                    value={colorScheme === "light" ? Themes.light : Themes.dark}
                >
                    <Stack>
                        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
                        <Stack.Screen name="+not-found" options={{ headerShown: true }} />
                    </Stack>

                    <StatusBar style="auto" />
                </ThemeProvider>
            </SafeAreaProvider>
        </ToastProvider>
    );
}
