import React from 'react';
import {View, TouchableOpacity, ScrollView} from 'react-native';
import ThemeSwitcher from '@/components/ThemeSwitcher'
// @ts-ignore
import Icon from 'react-native-vector-icons/FontAwesome';
import Texts from "@/components/Texts";
import {useRouter} from "expo-router";


const settings = [
    {name: 'My Details', screen: '/clientarea/account', icon: 'user'},
    {name: 'Contacts', screen: '/clientarea/account/contacts', icon: 'address-book'},
    {name: 'Notifications', screen: '/clientarea/account/notifications', icon: 'bell'},
    {name: 'Security Settings', screen: '/clientarea/account/security', icon: 'cog'},
    {name: 'Email History', screen: '/clientarea.php?action=emails', icon: 'envelope'},
    {name: 'User Management', screen: '/account/users', icon: 'users'},
    {name: 'Logout', screen: '/sign-in', icon: 'user'},
];

export default function SettingsScreen() {
    const router = useRouter();
    const handleNavigation = (screen: string) => {
        router.push('/sign-in');
        alert(`Navigate to ${screen}`);
    };

    return (
        <View className="flex-1 p-3 ">
            <ScrollView contentContainerStyle={{gap: 8}}>
                {settings.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        className="flex-1 p-4 rounded-lg dark:bg-primary-900 bg-primary-100 shadow-sm"
                        onPress={() => handleNavigation(item.screen)}
                    >
                        <View className="flex items-center">
                            <Icon name={item.icon} size={30} color="#4b8dff"/>
                            <Texts className="text-center text-lg  text-primary-700 mt-2 dark:text-white">
                                {item.name}
                            </Texts>
                        </View>
                    </TouchableOpacity>
                ))}
                <ThemeSwitcher></ThemeSwitcher>
            </ScrollView>
        </View>
    );
}
