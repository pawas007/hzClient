import { Stack } from "expo-router";
import React from "react";

export default function vpsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Settings",
        }}
      ></Stack.Screen>
    </Stack>
  );
}
