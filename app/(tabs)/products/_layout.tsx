import {Stack, Tabs} from 'expo-router';
import React from 'react';

export default function vpsLayout() {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{title: "Products"}}
            >
            </Stack.Screen>
            <Stack.Screen
                name="vps"
                options={{title: "Vps"}}
            >
            </Stack.Screen>
        </Stack>
    );
}
