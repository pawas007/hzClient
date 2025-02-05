import React from "react";
import { View, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useColorScheme } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Texts from "@/components/Texts";
import { useRouter } from "expo-router";

const products = [
  { name: "DS", screen: "/products/vps", icon: "server" },
  { name: "Virtual Servers", screen: "/products/vps", icon: "desktop" },
  { name: "Web Hosting", screen: "/products/vps", icon: "globe" },
  { name: "Rack Space", screen: "/products/vps", icon: "database" },
  { name: "VPN", screen: "/products/vps", icon: "shield" },
  { name: "Backup Storages", screen: "/products/vps", icon: "cloud" },
  { name: "Domain Names", screen: "/products/vps", icon: "check-circle" },
  { name: "SSL Certificates", screen: "/products/vps", icon: "lock" },
];

const ProductsGrid = () => {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const router = useRouter();
  const handleNavigation = (screen: string) => {
    router.push(screen as any);
  };

  return (
    <View className="p-3 h-full">
      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        contentContainerClassName="gap-4"
        columnWrapperStyle={{ gap: 8, justifyContent: "space-between" }}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handleNavigation(item.screen)}
            className="flex-1 p-4 rounded-lg dark:bg-primary-900 bg-primary-100 shadow-sm"
          >
            <View className="flex items-center">
              <Icon name={item.icon} size={30} color="#4b8dff" />
              <Texts className="text-center text-lg  mt-2 ">{item.name}</Texts>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ProductsGrid;
