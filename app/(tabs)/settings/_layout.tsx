import { Stack } from "expo-router";
import React from "react";

export default function settings() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: true, title: "Settings" }}
      />
      <Stack.Screen
        name="details"
        options={{ headerShown: true, title: "Details" }}
      />
      <Stack.Screen
        name="contacts"
        options={{ headerShown: false, title: "Contacts" }}
      />
      <Stack.Screen
        name="notifications"
        options={{ headerShown: true, title: "Notifications" }}
      />
      <Stack.Screen
        name="users"
        options={{ headerShown: true, title: "User Management" }}
      />
    </Stack>
  );
}
