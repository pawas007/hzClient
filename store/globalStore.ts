import { create } from "zustand";
import { GlobalStore } from "@/types/stores";

export const useGlobalStore = create<GlobalStore>(() => ({
  countries: [
    { label: "Ukraine (Україна)", value: "ua" },
    { label: "United States", value: "us" },
    { label: "Canada", value: "ca" },
    { label: "Germany", value: "de" },
    { label: "France", value: "fr" },
    { label: "United Kingdom", value: "gb" },
    { label: "Italy", value: "it" },
    { label: "Spain", value: "es" },
    { label: "Netherlands", value: "nl" },
    { label: "Sweden", value: "se" },
  ],
  paymentMethods: [
    { label: "Bank Transfer", value: "banktransfer" },
    { label: "Paxum", value: "paxum" },
    { label: "PayPal", value: "paypal" },
    { label: "Stripe (Credit Cards)", value: "stripe" },
    { label: "CoinGate (Crypto)", value: "coingate" },
  ],
}));
