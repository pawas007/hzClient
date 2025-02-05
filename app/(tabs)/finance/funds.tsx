import React, { useState } from "react";
import { View, ScrollView, TouchableOpacity, Modal, ActivityIndicator } from "react-native";

import { useRouter } from "expo-router";
import Texts from "@/components/Texts";
import FormField from "@/components/FormField";
import {useGlobalStore} from "@/store/globalStore";

export default function AddFundsScreen() {
    const { paymentMethods } = useGlobalStore();
    const router = useRouter();
    const [selectedPayment, setSelectedPayment] = useState<string | null>(null);
    const [amount, setAmount] = useState("10");
    const [isProcessing, setIsProcessing] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const MIN_DEPOSIT = 4.84;
    const MAX_DEPOSIT = 96759.0;
    const MAX_BALANCE = 96759.0;

    const handleConfirmPayment = () => {
        const amountValue = parseFloat(amount);
        if (isNaN(amountValue) || amountValue < MIN_DEPOSIT || amountValue > MAX_DEPOSIT) {
            alert(`Amount must be between €${MIN_DEPOSIT} and €${MAX_DEPOSIT}`);
            return;
        }
        if (!selectedPayment) {
            alert("Please select a payment method");
            return;
        }

        setIsProcessing(true);

        setTimeout(() => {
            setIsProcessing(false);
            setIsSuccess(true);

            setTimeout(() => {
                setIsSuccess(false);
                setAmount("10");
                setSelectedPayment(null);
                router.push("/finance/funds");
            }, 2000);
        }, 3000);
    };

    return (
        <View className="flex-1 p-4">
            <ScrollView className="mb-5">
                <View className="p-4 mb-2 rounded-lg bg-primary-100 dark:bg-primary-900 shadow-sm">
                    <Texts className="text-sm">Minimum Deposit: <Texts className="font-bold">€{MIN_DEPOSIT.toFixed(2)} Euro</Texts></Texts>
                    <Texts className="text-sm">Maximum Deposit: <Texts className="font-bold">€{MAX_DEPOSIT.toFixed(2)} Euro</Texts></Texts>
                    <Texts className="text-sm">Maximum Balance: <Texts className="font-bold">€{MAX_BALANCE.toFixed(2)} Euro</Texts></Texts>
                </View>

                <Texts className="text-lg font-bold mb-2">Amount to Add:</Texts>
                <FormField
                    label="Amount (€)"
                    value={amount}
                    onChange={setAmount}
                    error={parseFloat(amount) < MIN_DEPOSIT || parseFloat(amount) > MAX_DEPOSIT ? "Invalid amount" : ""}
                    touched={true}
                />

                <Texts className="text-lg font-bold mb-2">Select Payment Method</Texts>
                <View className="flex-row flex-wrap justify-around">
                    {paymentMethods.map((method) => (
                        <TouchableOpacity
                            key={method.value}
                            className={`mb-3 p-3 rounded-lg border border-border items-center w-[48%] ${
                                selectedPayment === method.value ? "bg-indigo" : "dark:bg-primary-900"
                            }`}
                            onPress={() => setSelectedPayment(method.value)}
                        >
                            <Texts className={`${selectedPayment === method.value ? "text-white" : "dark:text-white"}`}>
                                {method.label}
                            </Texts>
                        </TouchableOpacity>
                    ))}
                </View>

                {selectedPayment && (
                    <TouchableOpacity
                        onPress={handleConfirmPayment}
                        className="w-full mt-2 mb-4 p-4 bg-indigo rounded-lg shadow-md items-center"
                    >
                        <Texts className="text-white text-center">Add Funds</Texts>
                    </TouchableOpacity>
                )}
            </ScrollView>

            {/* Модальне вікно для обробки платежу */}
            <Modal visible={isProcessing} transparent animationType="fade">
                <View className="flex-1 items-center justify-center bg-black bg-opacity-50">
                    <View className="p-5 bg-white rounded-lg items-center">
                        <ActivityIndicator size="large" color="#4F46E5" />
                        <Texts className="mt-3 dark:text-black">Processing Payment...</Texts>
                    </View>
                </View>
            </Modal>

            {/* Модальне вікно успішного поповнення балансу */}
            <Modal visible={isSuccess} transparent animationType="fade">
                <View className="flex-1 items-center justify-center bg-black bg-opacity-50">
                    <View className="p-5 bg-white rounded-lg items-center">
                        <Texts className="text-lg font-bold dark:text-black">Payment Successful!</Texts>
                    </View>
                </View>
            </Modal>
        </View>
    );
}
