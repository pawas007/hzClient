import React from "react";
import { View, TouchableOpacity } from "react-native";
import { useRoute, useNavigation, RouteProp } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Texts from "@/components/Texts";
import {ContactParams} from "@/types/contacts";

type ContactRouteProp = RouteProp<{ ContactViewScreen: ContactParams }, "ContactViewScreen">;

export default function ContactViewScreen() {
  const route = useRoute<ContactRouteProp>();
  const navigation = useNavigation();
  const { contact } = route.params;

  return (
    <View className="p-3">
      <View className="flex-row justify-between items-center mb-4">
        <Texts className="text-xl font-bold">Contact Details</Texts>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={24} color="#d0cddd" />
        </TouchableOpacity>
      </View>
      <View className="bg-gray-100 p-4 rounded-lg shadow-md">
        <Texts className="mb-2">
          <Texts className="font-bold">First Name:</Texts> {contact.firstName}
        </Texts>
        <Texts className="mb-2">
          <Texts className="font-bold">Last Name:</Texts> {contact.lastName}
        </Texts>
        <Texts className="mb-2">
          <Texts className="font-bold">Email:</Texts> {contact.email}
        </Texts>
        <Texts className="mb-2">
          <Texts className="font-bold">Phone Number:</Texts> {contact.phoneNumber}
        </Texts>
        <Texts className="mb-2">
          <Texts className="font-bold">Country:</Texts> {contact.country}
        </Texts>
        <Texts className="mb-2">
          <Texts className="font-bold">City:</Texts> {contact.city}
        </Texts>
        <Texts className="mb-2">
          <Texts className="font-bold">Address 1:</Texts> {contact.address1}
        </Texts>
        {contact.address2 && (
          <Texts className="mb-2">
            <Texts className="font-bold">Address 2:</Texts> {contact.address2}
          </Texts>
        )}
        <Texts className="mb-2">
          <Texts className="font-bold">State/Region:</Texts> {contact.state}
        </Texts>
        <Texts className="mb-2">
          <Texts className="font-bold">Zip Code:</Texts> {contact.postcode}
        </Texts>
      </View>
    </View>
  );
}
