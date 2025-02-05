import React, { useState } from "react";
import { View, ScrollView, TouchableOpacity } from "react-native";
import { useCartStore } from "@/store/cartStore";

import Texts from "@/components/Texts";
import { Dropdown } from "react-native-element-dropdown";
import {useProductConfigsStore} from "@/store/productConfigsStore";
import {useDropdownStyles} from "@/hooks/useDropdownStyles";

export default function CartScreen() {
    const { products, getTotalPrice, getTotalQuantity, removeProduct, updateProduct, updateQuantity } = useCartStore();
    const { billingCycles, operatingSystems, raidSetups, volumes } = useProductConfigsStore();
    const [expandedProduct, setExpandedProduct] = useState<number | null>(null);
  const dropdownStyles = useDropdownStyles();
    return (
        <View className="flex-1 p-3">
            {products.length === 0 ? (
                <Texts className="text-xl text-center text-gray-500">Your cart is empty.</Texts>
            ) : (
                <>
                    <ScrollView className="mb-5">
                        {products.map((item) => {
                            const totalProductPrice = (item.price?.eur || 0) + Object.values(item.additionalPrices || {}).reduce((a, b) => a + (b || 0), 0);

                            return (
                                <View key={item.id} className="p-2 mb-2 rounded-lg bg-primary-100 dark:bg-primary-900 shadow-sm">
                                    <Texts className="text-lg font-bold">{item.name}</Texts>
                                    <Texts className="text-sm">Price: €{(totalProductPrice * item.quantity).toFixed(2)}

                                    </Texts>

                                    <View className="flex-row items-center mt-2">
                                        <TouchableOpacity
                                            className="bg-gray-500 px-3 py-1 rounded"
                                            onPress={() => updateQuantity(item.id, item.quantity - 1)}
                                        >
                                            <Texts >-</Texts>
                                        </TouchableOpacity>

                                        <Texts className="mx-3">{item.quantity}</Texts>

                                        <TouchableOpacity
                                            className="bg-gray-500 px-3 py-1 rounded"
                                            onPress={() => updateQuantity(item.id, item.quantity + 1)}
                                        >
                                            <Texts >+</Texts>
                                        </TouchableOpacity>
                                    </View>

                                    <TouchableOpacity
                                        className="mt-2 bg-gray-500 px-3 py-1 rounded"
                                        onPress={() => setExpandedProduct(expandedProduct === item.id ? null : item.id)}
                                    >
                                        <Texts className="text-center">
                                            {expandedProduct === item.id ? "Hide Configurations" : "Show Configurations"}
                                        </Texts>
                                    </TouchableOpacity>

                                    {expandedProduct === item.id && (
                                        <>
                                            <Dropdown
                                                 {...dropdownStyles}
                                                data={billingCycles}
                                                labelField="label"
                                                valueField="value"
                                                placeholder="Choose Billing Cycle"
                                                value={item.configurations.billingCycle}
                                                onChange={(selected) => updateProduct(item.id, "billingCycle", selected.value, selected.price)}
                                            />

                                            <Dropdown
                                                 {...dropdownStyles}
                                                data={operatingSystems}
                                                labelField="label"
                                                valueField="value"
                                                placeholder="Choose Operating System"
                                                value={item.configurations.os}
                                                onChange={(selected) => updateProduct(item.id, "os", selected.value, 0)}
                                            />

                                            <Dropdown
                                                 {...dropdownStyles}
                                                data={raidSetups}
                                                labelField="label"
                                                valueField="value"
                                                placeholder="Choose RAID Setup"
                                                value={item.configurations.raid}
                                                onChange={(selected) => updateProduct(item.id, "raid", selected.value, selected.price)}
                                            />

                                            <Dropdown
                                                 {...dropdownStyles}
                                                data={volumes}
                                                labelField="label"
                                                valueField="value"
                                                placeholder="Choose Volume"
                                                value={item.configurations.volume}
                                                onChange={(selected) => updateProduct(item.id, "volume", selected.value, selected.price)}
                                            />
                                        </>
                                    )}
                                    <TouchableOpacity onPress={() => removeProduct(item.id)} className="w-full mt-2  mb-2 p-2 bg-indigo rounded-lg shadow-md items-center">
                                        <Texts className="text-white text-center">Remove</Texts>
                                    </TouchableOpacity>
                                </View>
                            );
                        })}
                    </ScrollView>

                    <View className=" bg-gray-200 rounded-lg mb-1">
                        <Texts className="text-lg font-bold">Total: €{(getTotalPrice() || 0).toFixed(2)}</Texts>
                    </View>

                    <TouchableOpacity className="w-full mt-1  mb-1 p-4 bg-indigo rounded-lg shadow-md items-center">
                        <Texts className="text-white text-center">Make Order</Texts>
                    </TouchableOpacity>
                </>
            )}
        </View>
    );
}
