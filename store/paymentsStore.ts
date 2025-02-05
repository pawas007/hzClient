import { create } from "zustand";
import {PaymentsStore} from "@/types/payments";

export const usePaymentsStore = create<PaymentsStore>((set) => ({
    paymentMethods: [
        {
            number: "4242424242424242",
            expiry: "12/25",
            cvc: "123",
            name: "John Doe",
            type: "visa",
        },
        {
            number: "5555555555554444",
            expiry: "08/24",
            cvc: "456",
            name: "Jane Smith",
            type: "master-card",
        },
    ],

    addPaymentMethod: (method) =>
        set((state) => ({ paymentMethods: [...state.paymentMethods, method] })),

    removePaymentMethod: (number) =>
        set((state) => ({
            paymentMethods: state.paymentMethods.filter((card) => card.number !== number),
        })),
}));
