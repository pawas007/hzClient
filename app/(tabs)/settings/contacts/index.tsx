import React, { useState } from "react";
import { View, FlatList, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Texts from "@/components/Texts";

const contactsData = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phoneNumber: "+380123456789",
    country: "UA",
    city: "Kyiv",
    address1: "Shevchenko St, 10",
    state: "Kyivska",
    postcode: "01001",
    address2: "Apt 5",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    phoneNumber: "+14085551234",
    country: "US",
    city: "New York",
    address1: "Broadway 5",
    state: "NY",
    postcode: "10001",
    address2: "",
  },
  {
    id: 3,
    firstName: "Alice",
    lastName: "Brown",
    email: "alice.brown@example.com",
    phoneNumber: "+4915123456789",
    country: "DE",
    city: "Berlin",
    address1: "Hauptstraße 7",
    state: "Berlin",
    postcode: "10117",
    address2: "Suite 200",
  },
  {
    id: 4,
    firstName: "Bob",
    lastName: "Johnson",
    email: "bob.johnson@example.com",
    phoneNumber: "+33612345678",
    country: "FR",
    city: "Paris",
    address1: "Champs-Élysées",
    state: "Île-de-France",
    postcode: "75008",
    address2: "",
  },
];

export default function ContactsScreen() {
  const [contacts, setContacts] = useState(contactsData);
  const navigation = useNavigation();

  const handleDelete = (id: number) => {
    Alert.alert(
      "Confirm Deletion",
      "Are you sure you want to delete this contact?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            setContacts((prevContacts) =>
              prevContacts.filter((contact) => contact.id !== id),
            );
          },
        },
      ],
    );
  };
  const handleRedirect = (contact: any, route: string) => {
    // @ts-ignore
    navigation.navigate(route, { contact });
  };

  const handleAddContact = () => {
    // @ts-ignore
    navigation.navigate("contact-add");
  };

  return (
    <View className="p-3">
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View className="flex flex-row justify-between items-center mb-4 p-4 rounded-lg bg-primary-100 dark:bg-primary-900 shadow-sm">
            <View>
              <Texts className="text-primary-700 dark:text-white font-bold">
                {item.firstName} {item.lastName}
              </Texts>
              <Texts className="text-gray-500 dark:text-white pt-1">
                {item.email}
              </Texts>
            </View>
            <View className="flex-row gap-3">
              <TouchableOpacity
                onPress={() => handleRedirect(item, "contact-show")}
              >
                <Ionicons name="eye" size={24} color="#d0cdde" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleRedirect(item, "contact-edit")}
              >
                <Ionicons name="create" size={24} color="#d0cddd" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDelete(item.id)}>
                <Ionicons name="trash" size={24} color="#d0cddd" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <TouchableOpacity
        onPress={() => handleAddContact()}
        className="w-full mt-6  mb-4 p-4 bg-indigo rounded-lg shadow-md items-center"
      >
        <Texts className="text-white text-lg">Add Contact</Texts>
      </TouchableOpacity>
    </View>
  );
}
