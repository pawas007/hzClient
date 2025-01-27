import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
// @ts-ignore
import Icon from 'react-native-vector-icons/FontAwesome';

const products = [
    { name: 'DS', screen: 'DedicatedServersScreen', icon: 'server' },
    { name: 'Virtual Servers', screen: 'VirtualServersScreen', icon: 'desktop' },
    { name: 'Web Hosting', screen: 'WebHostingScreen', icon: 'globe' },
    { name: 'Rack Space', screen: 'RackSpaceScreen', icon: 'database' },
    { name: 'VPN', screen: 'VpnScreen', icon: 'shield-alt' },
    { name: 'Backup Storages', screen: 'BackupStoragesScreen', icon: 'cloud' },
    { name: 'Domain Names', screen: 'DomainNamesScreen', icon: 'check-circle' },
    { name: 'SSL Certificates', screen: 'SslCertificatesScreen', icon: 'lock' },

];

const ProductsGrid = () => {
    const navigation = useNavigation();
    const colorScheme = useColorScheme();
    return (
        <ScrollView className="py-5 px-3">
            <View className="grid grid-cols-2 gap-4">
                {products.map((product, index) => (
                    <TouchableOpacity
                        key={index}
                        className="p-4 rounded-lg dark:bg-primary-900 bg-primary-100 shadow-lg"
                    >
                        <View className="flex items-center">

                            <Icon name={product.icon} size={30} color="#4b8dff" />
                            <Text className="text-center text-lg font-semibold text-primary-700 mt-2 dark:text-white">
                                {product.name}
                            </Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
};

export default ProductsGrid;
