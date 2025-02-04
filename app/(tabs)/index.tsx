import React from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
// @ts-ignore
import Icon from "react-native-vector-icons/FontAwesome";
// @ts-ignore
import Texts from "@/components/Texts";

const notifications = [
  { title: "Announcements", icon: "bullhorn", count: 216 },
  { title: "Alerts", icon: "bell", count: 0 },
  { title: "My Emails", icon: "envelope", count: 3 },
  { title: "Maintenance", icon: "wrench", count: 1 },
];

export default function HomeScreen() {
  return (
    <ScrollView>
      <View className="p-3">
        {/* Finance Section */}
        <View>
          <View className="bg-white dark:bg-primary-900 p-4 rounded-lg shadow-md">
            <Texts className="text-gray-500 dark:text-white uppercase text-sm font-normal mb-2">
              Finance
            </Texts>
            <Texts className="text-xl text-black dark:text-white font-normal">
              €0.00 Euro
            </Texts>
            <Texts className="text-md text-gray-500 dark:text-white">
              Balance
            </Texts>

            <View className="flex flex-row justify-center mt-4">
              <TouchableOpacity
                className="flex-1 p-4 bg-blue-500 dark:bg-primary-dark rounded-lg mr-2"
                onPress={() => alert("Go to Pay")}
              >
                <Texts className="text-center text-white">Pay</Texts>
              </TouchableOpacity>
              <TouchableOpacity
                className="flex-1 p-4 bg-blue-500 dark:bg-primary-dark rounded-lg mr-2"
                onPress={() => alert("Add Funds")}
              >
                <Texts className="text-center text-blue-500 dark:text-white">
                  Add Funds
                </Texts>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <Texts className="text-black dark:text-white text-lg font-medium my-4">
          Notification Board
        </Texts>
        {notifications.map((notification, index) => (
          <View
            key={index}
            className="flex flex-row justify-between items-center mb-4 p-4 rounded-lg bg-primary-100 dark:bg-primary-900 shadow-md"
          >
            <View className="flex flex-row items-center">
              <Icon name={notification.icon} size={24} color="#4CAF50" />
              <Texts className="text-primary-700 dark:text-white text-lg ml-2">
                {notification.title}
              </Texts>
            </View>
            <Texts className="text-primary-700 dark:text-white text-lg">
              {notification.count}
            </Texts>
          </View>
        ))}

        <View className="mt-6">
          <View className="text-center mt-4">
            <Texts className="text-lg text-gray-600 dark:text-white font-normal">
              Tickets require your attention
            </Texts>
            <TouchableOpacity
              className="flex-1 p-4 rounded-lg dark:bg-primary-900 bg-primary-100 shadow-md mt-4"
              onPress={() => alert("Navigate to tickets")}
            >
              <View className="flex items-center">
                <Icon name="ticket" size={30} color="#4b8dff" />
                <Texts className="text-center text-lg text-primary-700 mt-2 dark:text-white">
                  2
                </Texts>
              </View>
            </TouchableOpacity>
          </View>

          <View className="grid grid-cols-2 gap-4 mt-6">
            <View className="text-right">
              <TouchableOpacity
                className="flex-1 p-4 rounded-lg dark:bg-primary-900 bg-primary-100 shadow-md"
                onPress={() => alert("Submit a ticket")}
              >
                <View className="flex items-center">
                  <Icon name="plus" size={30} color="#4b8dff" />
                  <Texts className="text-center text-lg text-primary-700 mt-2 dark:text-white">
                    Submit Ticket
                  </Texts>
                </View>
              </TouchableOpacity>
            </View>
            <View className="text-left">
              <TouchableOpacity
                className="flex-1 p-4 rounded-lg dark:bg-primary-900 bg-primary-100 shadow-md"
                onPress={() => alert("Start live chat")}
              >
                <View className="flex items-center">
                  <Icon name="comments" size={30} color="#4b8dff" />
                  <Texts className="text-center text-lg text-primary-700 mt-2 dark:text-white">
                    Live chat
                  </Texts>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View className="text-center mt-5">
            <TouchableOpacity
              className="flex-1 p-4 rounded-lg dark:bg-primary-900 bg-primary-100 shadow-md"
              onPress={() => alert("Navigate to knowledge base")}
            >
              <View className="flex items-center">
                <Icon name="info-circle" size={30} color="#4b8dff" />
                <Texts className="text-center text-lg text-primary-700 mt-2 dark:text-white">
                  Knowledge Base
                </Texts>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
