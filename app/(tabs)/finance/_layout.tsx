import {Stack} from "expo-router";
import React from "react";

export default function vpsLayout() {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{headerShown: true, title: "Finance"}}
            />
            <Stack.Screen
                name="funds"
                options={{headerShown: true, title: "Add funds"}}
            />
            <Stack.Screen
                name="payments"
                options={{headerShown: true, title: "Payments methods"}}
            />
            <Stack.Screen
                name="invoices"
                options={{headerShown: true, title: "Invoices"}}
            />
        </Stack>
    );
}
