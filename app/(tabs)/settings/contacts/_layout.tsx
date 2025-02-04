import {Stack} from "expo-router";
import React from "react";


export default function contacts() {
    return (
        <Stack >
            <Stack.Screen name="index" options={{headerShown: true, title: "Contacts"}}/>
            <Stack.Screen name="contact-show" options={{headerShown: false, presentation: 'modal'}}/>
            <Stack.Screen name="contact-edit" options={{headerShown: true,title: "Edit contact"}}/>
            <Stack.Screen name="contact-add" options={{headerShown: true, title: "Create contact"}}/>
        </Stack>

    );
}
