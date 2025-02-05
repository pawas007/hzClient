import { create } from "zustand";

export interface InvoiceItem {
    description: string;
    amount: number;
}

export interface ClientInfo {
    name: string;
    address: string;
    city: string;
    zip: string;
    country: string;
}

export interface PayToInfo {
    company: string;
    vat: string;
    address: string;
}

export interface Invoice {
    id: number;
    invoiceNumber: string;
    date: string;
    dueDate: string;
    total: number;
    status: "Paid" | "Unpaid" | "Cancelled";
    paymentMethod: string;
    client: ClientInfo;
    payTo: PayToInfo;
    items: InvoiceItem[];
}

export interface InvoicesStore {
    invoices: Invoice[];
}

export const useInvoicesStore = create<InvoicesStore>(() => ({
    invoices: Array.from({ length: 20 }, (_, i) => ({
        id: i + 1,
        invoiceNumber: `INV100${i + 1}`,
        date: `27-01-2025`,
        dueDate: `29-01-2025`,
        total: 14.60,
        status: "Cancelled",
        paymentMethod: "Stripe (Credit Cards)",
        client: {
            name: "Ostap Trush",
            address: "Музики 34",
            city: "Львів",
            zip: "79458",
            country: "Ukraine",
        },
        payTo: {
            company: "HZ HOSTING LTD",
            vat: "BG203391232",
            address: "59 Iztochen blvd., Kamenica Park, Plovdiv, 4000 Bulgaria",
        },
        items: [
            {
                description: `KVM-SSD 512 - srv77643.yourbestnetwork.net (27/01/2025 - 26/04/2025)`,
                amount: 14.10,
            },
            { description: "Transaction fee", amount: 0.50 },
        ],
    })),
}));
