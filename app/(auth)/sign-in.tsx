import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Dimensions } from "react-native";
import { useRouter } from "expo-router";
import Animated, { Easing, useSharedValue, withTiming } from "react-native-reanimated";
import LogoDark from "@/assets/images/logo-dark";
// @ts-ignore
import Texts from "@/components/Texts";

export default function SignIn() {
    const router = useRouter();
    const [email, setEmail] = useState("client@email.com");
    const [password, setPassword] = useState("password");
    const [error, setError] = useState("");
    const [isValidated, setIsValidated] = useState(false);

    // Отримуємо висоту екрану
    const { height } = Dimensions.get("window");

    // Використовуємо useSharedValue для створення анімованих значень
    const logoTranslateY = useSharedValue(0); // Початкова позиція логотипа
    const logoScale = useSharedValue(1);
    const formOpacity = useSharedValue(1);

    const handleLogin = () => {
        if (email !== "client@email.com" || password !== "password") {
            setError("Invalid email or password");
        } else {
            setError("");
            setIsValidated(true);

            // Просто зміщаємо логотип вниз
            logoTranslateY.value = withTiming(110, { // Зміщуємо логотип вниз на 50 одиниць
                duration: 1000,
                easing: Easing.ease,
            });
            logoScale.value = withTiming(1.5, {
                duration: 1000,
                easing: Easing.ease,
            });

            // Анімація для форми
            formOpacity.value = withTiming(0, {
                duration: 500,
                easing: Easing.ease,
            });

            setTimeout(() => {
                router.push("/");
            }, 2000);
        }
    };

    return (
        <View className="flex-1 justify-center items-center bg-white dark:bg-black px-10">
            <Animated.View
                style={{
                    transform: [
                        { translateY: logoTranslateY }, // Анімація по вертикалі
                        { scale: logoScale },
                    ],
                }}
                className="mb-10"
            >
                <LogoDark />
            </Animated.View>

            <Animated.View
                style={{
                    opacity: formOpacity,
                    width: '100%',
                }}
                className="w-full"
            >
                <Texts className="text-primary-700 dark:text-white mb-1">Email</Texts>
                <TextInput
                    value={email}
                    onChangeText={setEmail}
                    className="w-full p-3 bg-gray-100 border border-border dark:bg-gray-800 text-primary-700 dark:text-white rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <Texts className="text-primary-700 dark:text-white mt-4 mb-1">Password</Texts>
                <TextInput
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    className="w-full p-3 bg-gray-100 border border-border dark:bg-gray-800 text-primary-700 dark:text-white rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
                {error ? (
                    <Texts className="text-[rgba(197,49,49,0.7)] mt-2">{error}</Texts>
                ) : null}
                <TouchableOpacity
                    onPress={handleLogin}
                    className="w-full mt-6 p-4 bg-indigo rounded-lg shadow-md items-center"
                >
                    <Texts className="text-white text-lg">Login</Texts>
                </TouchableOpacity>
            </Animated.View>
        </View>
    );
}
