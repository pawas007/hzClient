export interface CartProduct {
  id: number;
  name: string;
  price: {
    eur: number;
    usd: number;
    gbp: number;
  };
  quantity: number;
}

export interface CartStore {
  products: CartProduct[];
  addProduct: (product: Omit<CartProduct, "quantity">) => void;
  updateProduct: (product: CartProduct) => void;
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
