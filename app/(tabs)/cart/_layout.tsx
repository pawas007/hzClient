import { Stack } from "expo-router";
import React from "react";

export default function vpsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: true, title: "Cart" }}
      />
      <Stack.Screen name="order" options={{ title: "Order" }} />
    </Stack>
  );
}
