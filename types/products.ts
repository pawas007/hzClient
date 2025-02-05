export interface CartProduct {
  id: number;
  name: string;
  price: { eur: number; usd: number; gbp: number };
  quantity: number;
  configurations: {
    billingCycle: string;
    os: string;
    raid: string;
    volume: string;
  };
  additionalPrices: {
    billingCycle: number;
    raid: number;
    volume: number;
  };
}

export interface CartStore {
  products: CartProduct[];
  addProduct: (
    product: Omit<
      CartProduct,
      "quantity" | "configurations" | "additionalPrices"
    >,
  ) => void;
  updateProduct: (
    id: number,
    field: string,
    value: string,
    price: number,
  ) => void;
  updateQuantity: (id: number, quantity: number) => void;
  removeProduct: (id: number) => void;
  getTotalQuantity: () => number;
  getTotalPrice: () => number;
}

export interface Product {
  id: number;
  name: string;
  price: {
    eur: number;
    usd: number;
    gbp: number;
  };
  country: string;
}
