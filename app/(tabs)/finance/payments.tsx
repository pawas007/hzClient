import React, {useState} from "react";
import {View, ScrollView, TouchableOpacity, Modal} from "react-native";
import {PaymentMethod, usePaymentsStore} from "@/store/paymentsStore";
import Texts from "@/components/Texts";
import {CreditCardInput} from "react-native-credit-card-input";

export default function PaymentsScreen() {
    const {paymentMethods, addPaymentMethod, removePaymentMethod} = usePaymentsStore();
    const [isAddModalVisible, setAddModalVisible] = useState(false);
    const [isViewModalVisible, setViewModalVisible] = useState(false);
    const [selectedCard, setSelectedCard] = useState<PaymentMethod | null>(null);
    const [newCard, setNewCard] = useState({
        number: "",
        expiry: "",
        cvc: "",
        name: "",
        type: "",
    });

    const handleAddCard = () => {
        if (!newCard.number || !newCard.expiry || !newCard.cvc) {
            alert("Please fill all card details");
            return;
        }
        addPaymentMethod(newCard);
        setNewCard({number: "", expiry: "", cvc: "", name: "", type: ""});
        setAddModalVisible(false);
    };

    const handleCloseViewModal = () => {
        setSelectedCard(null);
        setViewModalVisible(false);
    };

    return (
        <View className="flex-1 p-4">
            <Texts className="text-xl font-bold mb-3">Payment Methods</Texts>
            <Texts className="mb-3">An overview of your payment methods and settings.</Texts>

            <TouchableOpacity
                onPress={() => setAddModalVisible(true)}
                className="mb-3 p-4 bg-indigo rounded-lg shadow-md items-center"
            >
                <Texts className="text-white text-center">Add New Credit Card</Texts>
            </TouchableOpacity>

            <ScrollView className="mb-5">
                {paymentMethods.length === 0 ? (
                    <Texts className="text-center text-gray-500">No payment methods available</Texts>
                ) : (
                    paymentMethods.map((method, index) => (
                        <TouchableOpacity
                            key={index}
                            className="p-4 mb-2 rounded-lg bg-primary-100 dark:bg-primary-900 shadow-sm"
                            onPress={() => {
                                setSelectedCard(method);
                                setViewModalVisible(true);
                            }}
                        >
                            <Texts className="text-lg font-bold">{method.type} - **** {method.number.slice(-4)}</Texts>
                            <Texts className="text-sm">Expires: {method.expiry}</Texts>
                            <TouchableOpacity
                                onPress={() => removePaymentMethod(method.number)}
                                className="mt-2 bg-red-500 px-3 py-1 rounded"
                            >
                                <Texts className="text-black dark:text-white text-center">Remove</Texts>
                            </TouchableOpacity>
                        </TouchableOpacity>
                    ))
                )}
            </ScrollView>


            <Modal visible={isAddModalVisible} transparent animationType="slide">
                <View className="flex-1 items-center justify-center bg-black bg-opacity-50">
                    <View className="p-5 bg-white rounded-lg w-[90%]">
                        <Texts className="text-lg font-bold mb-3">Add New Card</Texts>
                        <CreditCardInput
                            onChange={(form) =>
                                setNewCard({
                                    number: form.values.number || "",
                                    expiry: form.values.expiry || "",
                                    cvc: form.values.cvc || "",
                                    name: newCard.name || "",
                                    type: form.values.type || "Unknown",
                                })
                            }
                        />
                        <View className="flex-row justify-between mt-4">
                            <TouchableOpacity
                                onPress={() => setAddModalVisible(false)}
                                className="p-3 bg-gray-500 rounded-lg w-[45%] items-center"
                            >
                                <Texts className="text-black text-center dark:text-black">Cancel</Texts>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={handleAddCard}
                                className="p-3 bg-green-500 rounded-lg w-[45%] items-center"
                            >
                                <Texts className="text-black text-center dark:text-black">Save</Texts>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            <Modal visible={isViewModalVisible} transparent animationType="slide">
                <View className="flex-1 items-center justify-center bg-black bg-opacity-50">
                    <View className="p-5 bg-white rounded-lg w-[90%] ">
                        <Texts className="text-lg font-bold mb-3 dark:text-black">Card Details</Texts>
                        {selectedCard ? (
                            <>
                                <Texts className="text-lg dark:text-black">{selectedCard.type}</Texts>
                                <Texts className="text-md dark:text-black">Number: **** ****
                                    **** {selectedCard.number.slice(-4)}</Texts>
                                <Texts className="text-md dark:text-black">Expiry: {selectedCard.expiry}</Texts>
                                <Texts className="text-md dark:text-black">Cardholder: {selectedCard.name}</Texts>
                            </>
                        ) : (
                            <Texts className="text-md text-center">No card selected</Texts>
                        )}
                        <TouchableOpacity
                            onPress={handleCloseViewModal}
                            className="mt-4 p-3 bg-gray-500 rounded-lg items-center"
                        >
                            <Texts className="text-black text-center dark:text-black">Close</Texts>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}
