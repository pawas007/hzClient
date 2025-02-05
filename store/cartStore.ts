import { create } from "zustand";
import {CartStore} from "@/types/products";

export const useCartStore = create<CartStore>((set, get) => ({
  products: [],

  addProduct: (product) =>
    set((state) => {
      const existingProduct = state.products.find((p) => p.id === product.id);

      if (existingProduct) {
        return {
          products: state.products.map((p) =>
            p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
          ),
        };
      } else {
        return {
          products: [
            ...state.products,
            {
              ...product,
              quantity: 1,
              configurations: {
                billingCycle: "Monthly",
                os: "Rocky Linux 9",
                raid: "Software RAID1 (Mirror)",
                volume: "10TB",
              },
              additionalPrices: {
                billingCycle: 0,
                raid: 15, // RAID1
                volume: 0, // 10TB безкоштовно
              },
            },
          ],
        };
      }
    }),

  updateProduct: (id, field, value, price) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.id === id
          ? {
              ...product,
              configurations: {
                ...product.configurations,
                [field]: value,
              },
              additionalPrices: {
                ...product.additionalPrices,
                [field]: price,
              },
            }
          : product
      ),
    })),

  updateQuantity: (id, quantity) =>
    set((state) => {
      if (quantity < 1) {
        return { products: state.products.filter((product) => product.id !== id) };
      }

      return {
        products: state.products.map((product) =>
          product.id === id ? { ...product, quantity } : product
        ),
      };
    }),

  removeProduct: (id) =>
    set((state) => ({
      products: state.products.filter((product) => product.id !== id),
    })),

  getTotalQuantity: () => {
    return get().products.reduce((total, product) => total + product.quantity, 0);
  },

  getTotalPrice: () => {
    return get().products.reduce((total, product) => {
      const basePrice = product.price?.eur || 0;
      const configPrice = Object.values(product.additionalPrices || {}).reduce((a, b) => a + (b || 0), 0);
      return total + (basePrice + configPrice) * product.quantity;
    }, 0);
  },
}));
