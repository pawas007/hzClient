import React, {useState} from "react";
import {View, TextInput, ScrollView, TouchableOpacity, useColorScheme} from "react-native";
import {useProductsStore} from "@/store/productsStore";
import {useCartStore} from "@/store/cartStore";
import Texts from "@/components/Texts";
import {Dropdown} from "react-native-element-dropdown";
import {useToast} from "@/hooks/useToast";
import {CartProduct, Product} from "@/types/stores";

export default function ProductListScreen() {
    const {showToast} = useToast();
    const [query, setQuery] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");
    const isDarkMode = useColorScheme() === "dark";
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
  testID="sorting-dropdown" // Унікальний ідентифікатор для тестування
  style={{
    height: 45,
    borderColor: "rgba(208, 205, 221, 1)",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: isDarkMode ? "rgba(25, 25, 53, 1)" : "rgba(244, 243, 249, 1)",
  }}
  placeholderStyle={{
    fontSize: 14,
    color: isDarkMode ? "rgba(196, 196, 196, 1)" : "rgba(25, 25, 53, 1)",
  }}
  selectedTextStyle={{
    fontSize: 14,
    fontWeight: "600",
    color: isDarkMode ? "rgba(244, 243, 249, 1)" : "rgba(25, 25, 53, 1)",
  }}
  containerStyle={{
    backgroundColor: isDarkMode ? "rgba(25, 25, 53, 1)" : "rgba(244, 243, 249, 1)", // Фон меню
    borderRadius: 10,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  }}
  itemTextStyle={{
    fontSize: 14,
    color: isDarkMode ? "rgba(244, 243, 249, 1)" : "rgba(25, 25, 53, 1)",
  }}
  itemContainerStyle={{
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "rgba(208, 205, 221, 0.5)",
  }}
  modalStyle={{
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Затемнення заднього фону при відкритті
  }}
  search={true} // Додаємо можливість пошуку
  searchPlaceholder="Search sorting option..."
  inputSearchStyle={{
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: isDarkMode ? "rgba(38, 38, 79, 1)" : "white",
    color: isDarkMode ? "white" : "black",
  }}
  showsVerticalScrollIndicator={false} // Ховаємо скролбар
  dropdownPosition="auto" // Автоматичне позиціонування випадаючого списку
  flatListProps={{
    keyboardShouldPersistTaps: "handled", // Виправлення закриття випадаючого списку при тапі
  }}
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
  renderLeftIcon={() => (
    <Icon name="sort" size={18} color={isDarkMode ? "white" : "gray"} style={{ marginRight: 10 }} />
  )}
/>
}}
            />

            <ScrollView className="mt-3">
                {handleSearch().map((item) => (
                    <View key={item.id} className="p-4 rounded-lg bg-primary-100 dark:bg-primary-900 shadow-sm mb-4">
                        <Texts className="text-lg font-bold">{item.name}</Texts>
                        <Texts className="text-sm">Price: €{item.price.eur} / ${item.price.usd} /
                            £{item.price.gbp}</Texts>
                        <Texts className="text-sm">Location: {item.country}</Texts>
                        <TouchableOpacity
                            onPress={() => addToCart(item)}
                            className="mt-3 bg-green-500 p-2 rounded"
                        >
                            <Texts className="text-white text-center">Add to Cart</Texts>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}
