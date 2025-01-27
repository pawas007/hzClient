import React from "react";
import {View, Text, TouchableOpacity, ScrollView} from "react-native";
// @ts-ignore
import Icon from "react-native-vector-icons/FontAwesome";

const notifications = [
    {title: "Announcements", icon: "bullhorn", count: 216},
    {title: "Alerts", icon: "bell", count: 0},
    {title: "My Emails", icon: "envelope", count: 3},
    {title: "Maintenance", icon: "wrench", count: 1},
];

export default function HomeScreen() {
    return (
        <ScrollView >
            <View className="m-3">
            <Text className="text-black dark:text-white text-lg font-bold mb-4">Notification Board</Text>
            {notifications.map((notification, index) => (
                <View
                    key={index}
                    className="flex flex-row justify-between items-center mb-4 p-4 rounded-lg bg-primary-100 dark:bg-primary-900 shadow-md"
                >
                    <View className="flex flex-row items-center">
                        <Icon name={notification.icon} size={24} color="#4CAF50"/>
                        <Text className="text-primary-700 dark:text-white text-lg font-semibold ml-2">
                            {notification.title}
                        </Text>
                    </View>
                    <Text className="text-primary-700 dark:text-white text-lg font-semibold">{notification.count}</Text>
                </View>
            ))}

            <View className="mt-6 p-4 bg-white dark:bg-primary-900 rounded-lg shadow-md">
                <Text className="text-gray-600 dark:text-white font-semibold uppercase">Support & Knowledge base</Text>

                <View className="text-center mt-4">
                    <Text className="text-lg text-gray-600 dark:text-white font-normal">Tickets require your
                        attention</Text>
                    <TouchableOpacity
                        className="flex-1 p-4 rounded-lg dark:bg-primary-900 bg-primary-100 shadow-sm mt-4"
                        onPress={() => alert("Navigate to tickets")}
                    >
                        <View className="flex items-center">
                            <Icon name="ticket" size={30} color="#4b8dff"/>
                            <Text
                                className="text-center text-lg font-semibold text-primary-700 mt-2 dark:text-white">0</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View className="grid grid-cols-2 gap-4 mt-6">
                    <View className="text-right">
                        <TouchableOpacity
                            className="flex-1 p-4 rounded-lg dark:bg-primary-900 bg-primary-100 shadow-sm"
                            onPress={() => alert("Submit a ticket")}
                        >
                            <View className="flex items-center">
                                <Icon name="plus" size={30} color="#4b8dff"/>
                                <Text
                                    className="text-center text-lg font-semibold text-primary-700 mt-2 dark:text-white">
                                    Submit Ticket
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View className="text-left">
                        <TouchableOpacity
                            className="flex-1 p-4 rounded-lg dark:bg-primary-900 bg-primary-100 shadow-sm"
                            onPress={() => alert("Start live chat")}
                        >
                            <View className="flex items-center">
                                <Icon name="comments" size={30} color="#4b8dff"/>
                                <Text
                                    className="text-center text-lg font-semibold text-primary-700 mt-2 dark:text-white">
                                    Live chat
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View className="my-4 border-t border-gray-300 dark:border-primary-600"></View>

                <View className="text-center mt-5">
                    <TouchableOpacity
                        className="flex-1 p-4 rounded-lg dark:bg-primary-900 bg-primary-100 shadow-sm"
                        onPress={() => alert("Navigate to knowledge base")}
                    >
                        <View className="flex items-center">
                            <Icon name="info-circle" size={30} color="#4b8dff"/>
                            <Text className="text-center text-lg font-semibold text-primary-700 mt-2 dark:text-white">
                                Knowledge Base
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
      </View>
        </ScrollView>
    );
}
