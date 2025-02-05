import { Tabs } from "expo-router";
import React from "react";
import { Platform, View } from "react-native";
import { Themes } from "@/constants/Themes";
import { useColorScheme } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Texts from "@/components/Texts";
import { useCartStore } from "@/store/cartStore";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const totalQuantity = useCartStore((state) => state.getTotalQuantity());
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Themes[colorScheme ?? "light"].colors.primary,
        headerShown: false,
        tabBarStyle: {
          paddingTop: 5,
          height: 70,
          backgroundColor: Themes[colorScheme ?? "light"].colors.background,
          paddingBottom: Platform.OS === "ios" ? 10 : 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: true,
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="finance"
        options={{
          headerShown: true,
          title: "Finance",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="dollar" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="products"
        options={{
          headerShown: false,
          title: "Products",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="list" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          headerShown: true,
          tabBarIcon: ({ color }) => (
            <View
              style={{
                position: "relative",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontAwesome size={28} name="shopping-cart" color={color} />
              {totalQuantity > 0 && (
                <View
                  style={{
                    position: "absolute",
                    top: 0,
                    right: -10,
                    backgroundColor: "rgba(130, 150, 255, 1)",
                    borderRadius: 10,
                    width: 16,
                    height: 16,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Texts
                    style={{ fontSize: 10, color: "white", fontWeight: "bold" }}
                  >
                    {totalQuantity}
                  </Texts>
                </View>
              )}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          headerShown: false,
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
