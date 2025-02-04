import React from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import ThemeSwitcher from "@/components/ThemeSwitcher";
// @ts-ignore
import Icon from "react-native-vector-icons/FontAwesome";
// @ts-ignore
import Texts from "@/components/Texts";
import { useRouter } from "expo-router";

const index = [
  { name: "My Details", screen: "/settings/details", icon: "user" },
  { name: "Contacts", screen: "/settings/contacts", icon: "address-book" },
  { name: "Notifications", screen: "/settings/notifications", icon: "bell" },
  { name: "Security", screen: "/settings/security", icon: "cog" },
  { name: "User Management", screen: "/settings/users", icon: "users" },
  { name: "Logout", screen: "/sign-in", icon: "user" },
] as const;

export default function SettingsScreen() {
  const router = useRouter();

  const handleNavigation = (screen: string) => {
    router.push(screen as any);
  };

  return (
    <View className="flex-1 p-3">
      <ScrollView contentContainerStyle={{ gap: 8 }}>
        {index.map((item, index) => (
          <TouchableOpacity
            key={index}
            className="flex-1 p-4 rounded-lg dark:bg-primary-900 bg-primary-100 shadow-sm"
            onPress={() => handleNavigation(item.screen)}
          >
            <View className="flex items-center">
              <Icon name={item.icon} size={30} color="#4b8dff" />
              <Texts className="text-center text-lg  mt-2 ">{item.name}</Texts>
            </View>
          </TouchableOpacity>
        ))}
        <ThemeSwitcher />
      </ScrollView>
    </View>
  );
}
