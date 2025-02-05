import React, { useState } from "react";
import { View, TextInput, ScrollView, TouchableOpacity } from "react-native";
import { useProductsStore } from "@/store/productsStore";
import { useCartStore } from "@/store/cartStore";
import Texts from "@/components/Texts";
import { Dropdown } from "react-native-element-dropdown";
import { useToast } from "@/hooks/useToast";
import { Product } from "@/types/products";
import { useDropdownStyles } from "@/hooks/useDropdownStyles";

export default function ProductListScreen() {
  const dropdownStyles = useDropdownStyles();
  const { showToast } = useToast();
  const [query, setQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const products = useProductsStore((state) => state.products);
  const searchProducts = useProductsStore((state) => state.searchProducts);
  const sortProducts = useProductsStore((state) => state.sortProducts);
  const addToCart = (item: Product) => {
    showToast("success", `Product added: ${item.name}`);
    const addProduct = useCartStore.getState().addProduct;
    addProduct(item);
  };

  const handleSearch = () => {
    return query ? searchProducts(query) : products;
  };

  return (
    <View className="flex-1 p-3">
      <TextInput
        placeholder="Search products..."
        value={query}
        onChangeText={setQuery}
        className="w-full dark:text-white p-3 bg-gray-100 border border-border rounded-lg mb-3"
      />

      <Dropdown
        {...dropdownStyles}
        data={[
          { label: "Sort by Price (Low → High)", value: "asc" },
          { label: "Sort by Price (High → Low)", value: "desc" },
        ]}
        labelField="label"
        valueField="value"
        placeholder="Select sorting"
        value={sortOrder}
        onChange={(item) => {
          setSortOrder(item.value);
          sortProducts(item.value);
        }}
      />

      <ScrollView className="mt-3">
        {handleSearch().map((item) => (
          <View
            key={item.id}
            className="p-4 rounded-lg bg-primary-100 dark:bg-primary-900 shadow-sm mb-4"
          >
            <Texts className="text-lg font-bold">{item.name}</Texts>
            <Texts className="text-sm">
              Price: €{item.price.eur} / ${item.price.usd} / £{item.price.gbp}
            </Texts>
            <Texts className="text-sm">Location: {item.country}</Texts>
            <TouchableOpacity
              onPress={() => addToCart(item)}
              className="mt-3 bg-green-500 p-2 rounded"
            >
              <Texts className="text-center ">Add to Cart</Texts>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
