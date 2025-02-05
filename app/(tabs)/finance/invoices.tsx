import React, { useState } from "react";
import { View, ScrollView, TouchableOpacity, Modal } from "react-native";
import {Invoice, useInvoicesStore} from "@/store/invoicesStore";
import Texts from "@/components/Texts";

export default function InvoicesScreen() {
    const { invoices } = useInvoicesStore();
    const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);
    const [isModalVisible, setModalVisible] = useState(false);

    const openInvoice = (invoice: Invoice) => {
        setSelectedInvoice(invoice);
        setModalVisible(true);
    };

    const closeInvoice = () => {
        setSelectedInvoice(null);
        setModalVisible(false);
    };

    return (
        <View className="flex-1 p-4">
            <ScrollView >
                {invoices.map((invoice) => (
                    <TouchableOpacity
                        key={invoice.id}
                        className="p-4 mb-2 rounded-lg bg-primary-100 dark:bg-primary-900 shadow-sm"
                        onPress={() => openInvoice(invoice)}
                    >
                        <Texts className="text-lg font-bold">Invoice #{invoice.invoiceNumber}</Texts>
                        <Texts className="text-sm">Date: {invoice.date}</Texts>
                        <Texts className="text-sm">Due: {invoice.dueDate}</Texts>
                        <Texts className="text-sm">Total: €{invoice.total.toFixed(2)}</Texts>
                        <Texts className={`text-sm ${invoice.status === "Paid" ? "text-green-500" : "text-red-500"}`}>
                            {invoice.status}
                        </Texts>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <Modal visible={isModalVisible} transparent animationType="slide">
                <View className="flex-1 items-center justify-center bg-black ">
                    <View className="p-5 bg-black border border-border rounded-lg w-[90%]">
                        {selectedInvoice && (
                            <>
                                <Texts className="text-lg font-bold mb-3">Proforma Invoice #{selectedInvoice.invoiceNumber}</Texts>
                                <Texts className="text-md">Status: {selectedInvoice.status}</Texts>

                                <Texts className="mt-3 text-md font-bold">Invoiced To:</Texts>
                                <Texts>{selectedInvoice.client.name}</Texts>
                                <Texts>{selectedInvoice.client.address}</Texts>
                                <Texts>{selectedInvoice.client.city}, {selectedInvoice.client.zip}</Texts>
                                <Texts>{selectedInvoice.client.country}</Texts>

                                <Texts className="mt-3 text-md font-bold">Pay To:</Texts>
                                <Texts>{selectedInvoice.payTo.company}</Texts>
                                <Texts>VAT: {selectedInvoice.payTo.vat}</Texts>
                                <Texts>{selectedInvoice.payTo.address}</Texts>

                                <Texts className="mt-3 text-md font-bold">Payment Method:</Texts>
                                <Texts>{selectedInvoice.paymentMethod}</Texts>

                                <Texts className="mt-3 text-md font-bold">Invoice Items:</Texts>
                                {selectedInvoice.items.map((item, index) => (
                                    <View key={index} className="mb-2">
                                        <Texts className="text-sm">{item.description}</Texts>
                                        <Texts className="text-sm text-right">€{item.amount.toFixed(2)}</Texts>
                                    </View>
                                ))}

                                <Texts className="mt-3 text-md font-bold">Total: €{selectedInvoice.total.toFixed(2)}</Texts>

                                <View className="flex-row justify-between mt-4">
                                    <TouchableOpacity
                                        onPress={closeInvoice}
                                        className="p-3 bg-gray-500 rounded-lg w-[45%] items-center"
                                    >
                                        <Texts className="text-white text-center">Close</Texts>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => alert("Downloading invoice...")}
                                        className="p-3 bg-green-500 rounded-lg w-[45%] items-center"
                                    >
                                        <Texts className="text-white text-center">Download</Texts>
                                    </TouchableOpacity>
                                </View>
                            </>
                        )}
                    </View>
                </View>
            </Modal>
        </View>
    );
}
