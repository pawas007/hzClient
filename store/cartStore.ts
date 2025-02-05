import { create } from "zustand";
import { CartStore } from "@/types/stores";

export const useCartStore = create<CartStore>((set, get) => ({ // ✅ Оновлена назва (було useCardStore)
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
                    products: [...state.products, { ...product, quantity: 1 }], // ✅ quantity: 1 при додаванні
                };
            }
        }),

    updateProduct: (updatedProduct) =>
        set((state) => ({
            products: state.products.map((product) =>
                product.id === updatedProduct.id ? updatedProduct : product
            ),
        })),

    removeProduct: (id) =>
        set((state) => ({
            products: state.products.filter((product) => product.id !== id),
        })),

    getTotalQuantity: () => {
        const { products } = get();
        return products.reduce((total, product) => total + product.quantity, 0);
    },

    getTotalPrice: () => {
        const { products } = get();
        return products.reduce((total, product) => total + product.price.eur * product.quantity, 0);
    },
}));
