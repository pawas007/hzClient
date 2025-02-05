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
    { label: "Bank Transfer", value: "banktransfer", icon: "banktransfer" },
    { label: "Paxum", value: "paxum", icon: "paxum" },
    { label: "PayPal", value: "paypal", icon: "paypal" },
    { label: "Stripe (Credit Cards)", value: "stripe", icon: "stripe" },
    { label: "CoinGate (Crypto)", value: "coingate", icon: "coingate" },
    {
      label: "CoinPayments (Crypto)",
      value: "coinpayments",
      icon: "coinpayments",
    },
    { label: "Google Pay", value: "googlepay", icon: "googlepay" },
    { label: "Apple Pay", value: "applepay", icon: "applepay" },
  ],
}));
