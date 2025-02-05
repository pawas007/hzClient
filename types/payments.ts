export interface PaymentMethod {
    number: string;
    expiry: string;
    cvc: string;
    name: string;
    type: string;
}

export interface PaymentsStore {
    paymentMethods: PaymentMethod[];
    addPaymentMethod: (method: PaymentMethod) => void;
    removePaymentMethod: (number: string) => void;
}