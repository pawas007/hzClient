import { Tabs } from "expo-router";
import React from "react";
import { Platform, View } from "react-native";
import { Themes } from "@/constants/Themes";
import { useColorScheme } from "@/hooks/useColorScheme";
import { FontAwesome } from "@expo/vector-icons";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        // @ts-ignore
        tabBarActiveTintColor: Themes[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarStyle: {
          height: 60,
          // @ts-ignore
          backgroundColor: Themes[colorScheme ?? "light"].background,
          paddingBottom: Platform.OS === "ios" ? 10 : 0, // Для вирівнювання на iOS
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
          title: "Products",
          tabBarIcon: ({ color }) => (
            <View
              style={{
                position: "relative",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontAwesome size={28} name="shopping-cart" color={color} />
              {/*<View style={{*/}
              {/*    position: 'absolute',*/}
              {/*    top: -6,*/}
              {/*    right: -6,*/}
              {/*    backgroundColor: 'red',*/}
              {/*    borderRadius: 10,*/}
              {/*    width: 18,*/}
              {/*    height: 18,*/}
              {/*    justifyContent: 'center',*/}
              {/*    alignItems: 'center'*/}
              {/*}}>*/}
              {/*    <Texts style={{fontSize: 12, color: 'white', fontWeight: 'bold'}}>7</Texts>*/}
              {/*</View>*/}
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
