import {NavigationProp} from "@react-navigation/native";

export type ContactParams = {
  contact: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    country: string;
    city: string;
    address1: string;
    address2?: string;
    state: string;
    postcode: string;
  };
};

export interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  city: string;
  address1: string;
  state: string;
  postcode: string;
  address2?: string;
  country: string;
}

export type RootStackParamList = {
  "contact-add": undefined;
  "contact-show": { contact: Contact };
  "contact-edit": { contact: Contact };
};

export type NavigationProps = NavigationProp<RootStackParamList>;