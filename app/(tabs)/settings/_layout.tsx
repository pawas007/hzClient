import { Stack } from "expo-router";
import React from "react";

export default function settings() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          title: "Settings",
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="details"
        options={{
          headerShown: true,
          title: "Details",
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="contacts"
        options={{
          headerShown: false,
          title: "Contacts",
        }}
      ></Stack.Screen>
    </Stack>
  );
}
