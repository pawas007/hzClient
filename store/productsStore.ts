import { create } from "zustand";
import { Product } from "@/types/products";

interface ProductsStore {
  products: Product[];
  searchProducts: (query: string) => Product[];
  sortProducts: (order: "asc" | "desc") => void;
}

export const useProductsStore = create<ProductsStore>((set, get) => ({
  products: [
    {
      id: 1,
      name: "2 Xeon Cores, 512MB RAM, 10GB SSD",
      price: { eur: 4.2, usd: 4.5, gbp: 3.8 },
      country: "Germany",
    },
    {
      id: 2,
      name: "3 Xeon Cores, 1GB RAM, 20GB SSD",
      price: { eur: 5.4, usd: 5.8, gbp: 4.9 },
      country: "France",
    },
    {
      id: 3,
      name: "4 Xeon Cores, 2GB RAM, 30GB SSD",
      price: { eur: 6.75, usd: 7.2, gbp: 6.1 },
      country: "Netherlands",
    },
    {
      id: 4,
      name: "4 Xeon Cores, 4GB RAM, 50GB SSD",
      price: { eur: 13.05, usd: 14.0, gbp: 11.8 },
      country: "United Kingdom",
    },
    {
      id: 5,
      name: "6 Xeon Cores, 8GB RAM, 100GB SSD",
      price: { eur: 21.15, usd: 22.5, gbp: 19.3 },
      country: "Germany",
    },
    {
      id: 6,
      name: "6 Xeon Cores, 16GB RAM, 150GB SSD",
      price: { eur: 42.3, usd: 45.1, gbp: 38.7 },
      country: "France",
    },
    {
      id: 7,
      name: "8 Xeon Cores, 32GB RAM, 200GB SSD",
      price: { eur: 76.5, usd: 81.5, gbp: 70.2 },
      country: "Netherlands",
    },
    {
      id: 8,
      name: "10 Xeon Cores, 64GB RAM, 300GB SSD",
      price: { eur: 150, usd: 160, gbp: 138 },
      country: "United Kingdom",
    },
    {
      id: 9,
      name: "12 Xeon Cores, 128GB RAM, 500GB SSD",
      price: { eur: 250, usd: 265, gbp: 228 },
      country: "Germany",
    },
    {
      id: 10,
      name: "16 Xeon Cores, 256GB RAM, 1TB SSD",
      price: { eur: 420, usd: 445, gbp: 380 },
      country: "France",
    },
    {
      id: 11,
      name: "24 Xeon Cores, 512GB RAM, 2TB SSD",
      price: { eur: 780, usd: 820, gbp: 720 },
      country: "Netherlands",
    },
    {
      id: 12,
      name: "32 Xeon Cores, 1TB RAM, 4TB SSD",
      price: { eur: 1200, usd: 1260, gbp: 1100 },
      country: "United Kingdom",
    },
    {
      id: 13,
      name: "2 AMD EPYC Cores, 4GB RAM, 50GB NVMe",
      price: { eur: 15.0, usd: 16.0, gbp: 13.8 },
      country: "Germany",
    },
    {
      id: 14,
      name: "4 AMD EPYC Cores, 8GB RAM, 100GB NVMe",
      price: { eur: 30.5, usd: 32.5, gbp: 28.0 },
      country: "France",
    },
    {
      id: 15,
      name: "6 AMD EPYC Cores, 16GB RAM, 200GB NVMe",
      price: { eur: 60.0, usd: 63.5, gbp: 55.2 },
      country: "Netherlands",
    },
    {
      id: 16,
      name: "8 AMD EPYC Cores, 32GB RAM, 400GB NVMe",
      price: { eur: 110.0, usd: 115.0, gbp: 100.0 },
      country: "United Kingdom",
    },
    {
      id: 17,
      name: "12 AMD EPYC Cores, 64GB RAM, 600GB NVMe",
      price: { eur: 180.0, usd: 190.0, gbp: 165.0 },
      country: "Germany",
    },
    {
      id: 18,
      name: "16 AMD EPYC Cores, 128GB RAM, 1TB NVMe",
      price: { eur: 300.0, usd: 315.0, gbp: 275.0 },
      country: "France",
    },
    {
      id: 19,
      name: "24 AMD EPYC Cores, 256GB RAM, 2TB NVMe",
      price: { eur: 600.0, usd: 630.0, gbp: 550.0 },
      country: "Netherlands",
    },
    {
      id: 20,
      name: "32 AMD EPYC Cores, 512GB RAM, 4TB NVMe",
      price: { eur: 1000.0, usd: 1050.0, gbp: 920.0 },
      country: "United Kingdom",
    },
  ],

  searchProducts: (query) => {
    const lowerQuery = query.toLowerCase();
    return get().products.filter((product) =>
      product.name.toLowerCase().includes(lowerQuery),
    );
  },

  sortProducts: (order) => {
    set((state) => ({
      products: [...state.products].sort((a, b) =>
        order === "asc" ? a.price.eur - b.price.eur : b.price.eur - a.price.eur,
      ),
    }));
  },
}));
