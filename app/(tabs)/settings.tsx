import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import ThemeSwitcher from '@/components/ThemeSwitcher'
// @ts-ignore
import Icon from 'react-native-vector-icons/FontAwesome';

const settings = [
    { name: 'My Details', screen: '/clientarea/account', icon: 'user' },
    { name: 'Contacts', screen: '/clientarea/account/contacts', icon: 'address-book' },
    { name: 'Notifications', screen: '/clientarea/account/notifications', icon: 'bell' },
    { name: 'Security Settings', screen: '/clientarea/account/security', icon: 'shield-alt' },
    { name: 'Email History', screen: '/clientarea.php?action=emails', icon: 'envelope' },
    { name: 'User Management', screen: '/account/users', icon: 'users' },
];

export default function SettingsScreen() {
    const handleNavigation = (screen: string) => {
        alert(`Navigate to ${screen}`);
    };

    return (
        <View className="flex-1 p-3 ">
            <ScrollView contentContainerStyle={{ gap: 8 }}>
                {settings.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        className="flex-1 p-4 rounded-lg dark:bg-primary-900 bg-primary-100 shadow-sm"
                        onPress={() => handleNavigation(item.screen)}
                    >
                        <View className="flex items-center">
                            <Icon name={item.icon} size={30} color="#4b8dff" />
                            <Text className="text-center text-lg font-semibold text-primary-700 mt-2 dark:text-white">
                                {item.name}
                            </Text>
                        </View>
                    </TouchableOpacity>
                ))}
                <ThemeSwitcher></ThemeSwitcher>
            </ScrollView>

        </View>
    );
}
