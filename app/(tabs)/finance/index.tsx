import React from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Texts from "@/components/Texts";
import { useRouter } from "expo-router";

const menuItems = [
  { name: "Pay & Plan", link: "/clientarea/finance", icon: "credit-card" },
  {
    name: "Add Funds",
    link: "/clientarea.php?action=addfunds",
    icon: "plus-circle",
  },
  { name: "Invoices", link: "/clientarea/invoices", icon: "credit-card" },
  {
    name: "Payment Methods",
    link: "/account/paymentmethods",
    icon: "credit-card",
  },
];

export default function Menu() {
  const router = useRouter();

  const handleNavigation = (link: string) => {
    router.push("/products");
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 10 }}>
      <View className="menu sub open">
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleNavigation(item.link)}
            className="item p-4 rounded-lg bg-primary-100 dark:bg-primary-900 shadow-sm mb-4"
          >
            <View className="flex flex-row justify-between items-center">
              <View className="flex flex-row items-center">
                <Icon name={item.icon} size={24} color="#4CAF50" />
                <Texts className="  text-lg ml-2">{item.name}</Texts>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}
