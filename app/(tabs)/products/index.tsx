import React from 'react';
import {View, TouchableOpacity, ScrollView, FlatList, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useColorScheme} from 'react-native';
// @ts-ignore
import Icon from 'react-native-vector-icons/FontAwesome';
import Texts from "@/components/Texts";

const products = [
    {name: 'DS', screen: 'DedicatedServersScreen', icon: 'server'},
    {name: 'Virtual Servers', screen: 'VirtualServersScreen', icon: 'desktop'},
    {name: 'Web Hosting', screen: 'WebHostingScreen', icon: 'globe'},
    {name: 'Rack Space', screen: 'RackSpaceScreen', icon: 'database'},
    {name: 'VPN', screen: 'VpnScreen', icon: 'shield'},
    {name: 'Backup Storages', screen: 'BackupStoragesScreen', icon: 'cloud'},
    {name: 'Domain Names', screen: 'DomainNamesScreen', icon: 'check-circle'},
    {name: 'SSL Certificates', screen: 'SslCertificatesScreen', icon: 'lock'},

];

const ProductsGrid = () => {
    const navigation = useNavigation();
    const colorScheme = useColorScheme();
    return (
        <View className="p-3 h-full">
            <FlatList
                data={products}
                numColumns={2}
                keyExtractor={(item, index) => index.toString()}
                contentContainerClassName="gap-4"
                columnWrapperStyle={{gap: 8, justifyContent: "space-between"}}
                renderItem={({item}) => (
                    <TouchableOpacity className="flex-1 p-4 rounded-lg dark:bg-primary-900 bg-primary-100 shadow-sm">
                        <View className="flex items-center">
                            <Icon name={item.icon} size={30} color="#4b8dff"/>
                            <Texts className="text-center text-lg  text-primary-700 mt-2 dark:text-white">
                                {item.name}
                            </Texts>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default ProductsGrid;
