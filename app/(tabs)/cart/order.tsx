import React, { useState } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
  Text,
} from "react-native";
import { useCartStore } from "@/store/cartStore";
import { useRouter } from "expo-router";
import Texts from "@/components/Texts";
import { useGlobalStore } from "@/store/globalStore";

export default function OrderScreen() {
  const { products, getTotalPrice, clearCart } = useCartStore();
  const { paymentMethods } = useGlobalStore();
  const router = useRouter();
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleConfirmOrder = () => {
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);

      setTimeout(() => {
        clearCart();
        setIsSuccess(false);
        router.push("/");
      }, 2000);
    }, 3000);
  };

  return (
    <View className="flex-1 p-4">
      <Texts className="text-xl font-bold mb-3">Order Summary</Texts>

      <ScrollView className="mb-5">
        {products.map((item) => {
          const totalProductPrice =
            (item.price?.eur || 0) +
            Object.values(item.additionalPrices || {}).reduce(
              (a, b) => a + (b || 0),
              0,
            );

          return (
            <View
              key={item.id}
              className="p-4 mb-2 rounded-lg bg-primary-100 dark:bg-primary-900 shadow-sm"
            >
              <Texts className="text-lg font-bold">{item.name}</Texts>
              <Texts className="text-sm">
                Price: €{(totalProductPrice * item.quantity).toFixed(2)}
              </Texts>
            </View>
          );
        })}
      </ScrollView>

      <View className="bg-gray-200 rounded-lg mb-3">
        <Texts className="text-lg font-bold">
          Total: €{(getTotalPrice() || 0).toFixed(2)}
        </Texts>
      </View>

      <Texts className="text-lg font-bold mb-2">Select Payment Method</Texts>

      <View className="flex-row flex-wrap justify-around">
        {paymentMethods.map((method) => (
          <TouchableOpacity
            key={method.value}
            className={`mb-3 p-3 rounded-lg border border-border items-center w-[48%] ${
              selectedPayment === method.value
                ? "bg-indigo"
                : "dark:bg-primary-900"
            }`}
            onPress={() => setSelectedPayment(method.value)}
          >
            <Text
              className={`${
                selectedPayment === method.value
                  ? "text-white"
                  : "dark:text-white"
              }`}
            >
              {method.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {selectedPayment && (
        <TouchableOpacity
          onPress={handleConfirmOrder}
          className="w-full mt-2 mb-4 p-4 bg-indigo rounded-lg shadow-md items-center"
        >
          <Texts className="text-white text-center">Confirm Order</Texts>
        </TouchableOpacity>
      )}

      <Modal visible={isProcessing} transparent animationType="fade">
        <View className="flex-1 items-center justify-center bg-black bg-opacity-50">
          <View className="p-5 bg-white rounded-lg items-center">
            <ActivityIndicator size="large" color="#4F46E5" />
            <Texts className="mt-3 dark:text-black">
              Processing Payment...
            </Texts>
          </View>
        </View>
      </Modal>

      <Modal visible={isSuccess} transparent animationType="fade">
        <View className="flex-1 items-center justify-center bg-black bg-opacity-50">
          <View className="p-5 bg-white rounded-lg items-center">
            <Texts className="text-lg font-bold dark:text-black">
              Payment Successful!
            </Texts>
          </View>
        </View>
      </Modal>
    </View>
  );
}
