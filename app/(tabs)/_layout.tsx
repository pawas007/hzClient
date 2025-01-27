import {Tabs} from 'expo-router';
import React from 'react';
import {Platform,Text, View} from 'react-native';


import {Colors} from '@/constants/Colors';
import {useColorScheme} from '@/hooks/useColorScheme';
import {FontAwesome} from "@expo/vector-icons";

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                // @ts-ignore
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                headerShown: false,
                tabBarStyle: Platform.select({
                    ios: {
                        position: 'absolute',
                    },
                    default: {},
                }),
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    headerShown: true,
                    title: 'Home',
                    tabBarIcon: ({color}) => <FontAwesome size={28} name="home" color={color}/>

                }}
            />
            <Tabs.Screen
                name="products"
                options={{
                    title: 'Products',
                    tabBarIcon: ({color}) => (
                        <View style={{ position: 'relative', justifyContent: 'center', alignItems: 'center' }}>
                            <FontAwesome size={28} name="shopping-cart" color={color} />
                            <View style={{
                                position: 'absolute',
                                top: -6,
                                right: -6,
                                backgroundColor: 'red',
                                borderRadius: 10,
                                width: 18,
                                height: 18,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Text>
                                    7
                                </Text>
                            </View>
                        </View>
                    ),
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    title: 'Settings',
                    tabBarIcon: ({color}) => <FontAwesome size={28} name="cog" color={color}/>
                }}
            />
        </Tabs>
    );
}
