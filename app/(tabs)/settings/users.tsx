import React, {useState} from "react";
import {View, ScrollView, Alert, TouchableOpacity} from "react-native";
import {Formik} from "formik";
import * as Yup from "yup";
import Texts from "@/components/Texts";
import FormField from "@/components/FormField";
import {useColorScheme} from "react-native";

const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
});

export default function UserManagement() {
    const isDarkMode = useColorScheme() === "dark";

    const [users, setUsers] = useState([
        {
            id: 1,
            email: "ostap.t@hostzealot.com",
            role: "Owner",
            lastLogin: "1 second ago",
        },
    ]);
// @ts-ignore
    const handleInvite = (values, {resetForm}) => {
        Alert.alert("Success", `Invitation sent to ${values.email}`);
        resetForm();
    };

    return (
        <ScrollView className="p-5">
            {/* User Management Section */}
            <View className="mb-6">
                <Texts className="text-xl font-bold text-primary-900 dark:text-white mb-2">
                    User Management
                </Texts>
                <Texts className="text-gray-500 dark:text-white">
                    {users.length} Users Found
                </Texts>

                <View className="my-4 border border-border dark:border-gray-600 rounded-lg p-4">
                    {users.map((user) => (
                        <View key={user.id} className="mb-4">
                            <Texts className="text-lg text-primary-700 dark:text-white">
                                {user.email} <Texts className="text-sm text-indigo-500">({user.role})</Texts>
                            </Texts>
                            <Texts className="text-gray-500 dark:text-white text-sm">
                                Last Login: {user.lastLogin}
                            </Texts>

                            <View className="flex-row mt-2">
                                <TouchableOpacity
                                    className="bg-gray-400 p-2 rounded-lg mr-2 opacity-50"
                                    disabled
                                >
                                    <Texts className="text-white">Manage Permissions</Texts>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    className="bg-red-500 p-2 rounded-lg opacity-50"
                                    disabled
                                >
                                    <Texts className="text-white">Remove Access</Texts>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}
                </View>

                <Texts className="text-sm text-gray-500 dark:text-white">
                    * Account owners always have full permissions over a client account.
                </Texts>
            </View>

            {/* Invite New User Section */}
            <View className="mb-6">
                <Texts className="text-xl font-bold text-primary-900 dark:text-white mb-2">
                    Invite New User
                </Texts>
                <Texts className="text-gray-500 dark:text-white mb-2">
                    Inviting a new user allows them to access your account. If they don't have an account,
                    they will be able to create one.
                </Texts>

                <Formik
                    initialValues={{email: ""}}
                    validationSchema={validationSchema}
                    onSubmit={handleInvite}
                >
                    {({handleChange, handleSubmit, values, errors, touched}) => (
                        <>
                            <FormField
                                label="Email Address"
                                value={values.email}
                                onChange={handleChange("email")}
                                error={errors.email}
                                touched={touched.email}

                            />

                            <TouchableOpacity
                                onPress={() => handleSubmit}
                                className="w-full mt-4 p-4 bg-indigo rounded-lg shadow-md items-center"
                            >
                                <Texts className="text-white text-lg">Send Invite</Texts>
                            </TouchableOpacity>
                        </>
                    )}
                </Formik>
            </View>
        </ScrollView>
    );
}
