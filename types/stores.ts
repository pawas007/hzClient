export interface Option {
  label: string;
  value: string;
}

export interface GlobalStore {
  countries: Option[];
  paymentMethods: Option[];
}
