import React from "react";
import { View, ScrollView, Alert, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { Switch } from "react-native-switch";
import Texts from "@/components/Texts";
import FormField from "@/components/FormField";
import { useColorScheme } from "react-native";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  ccTicketReplies: Yup.string(),
  skype: Yup.string(),
  imJabber: Yup.string(),
});

export default function NotificationsSettings() {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <Formik
      initialValues={{
        email: "",
        ccTicketReplies: "",
        skype: "",
        imJabber: "",
        newsletterOptOut: false,
      }}
      validationSchema={validationSchema}
      onSubmit={(values) =>
        Alert.alert("Message", "Notification settings updated")
      }
    >
      {({
        handleChange,
        handleSubmit,
        values,
        setFieldValue,
        errors,
        touched,
      }) => (
        <ScrollView className="p-5">
          {/* Email */}
          <FormField
            label="Email"
            value={values.email}
            onChange={handleChange("email")}
            error={errors.email}
            touched={touched.email}
          />

          <FormField
            label="CC Ticket Replies"
            value={values.ccTicketReplies}
            onChange={handleChange("ccTicketReplies")}
            error={errors.ccTicketReplies}
            touched={touched.ccTicketReplies}
          />

          <FormField
            label="Skype"
            value={values.skype}
            onChange={handleChange("skype")}
            error={errors.skype}
            touched={touched.skype}
          />

          <FormField
            label="IM/Jabber"
            value={values.imJabber}
            onChange={handleChange("imJabber")}
            error={errors.imJabber}
            touched={touched.imJabber}
          />

          <View className="flex-row justify-between items-center mt-6">
            <Texts className="text-primary-700 dark:text-white">
              Newsletter Opt-out
            </Texts>
            <Switch
              value={values.newsletterOptOut}
              onValueChange={() =>
                setFieldValue("newsletterOptOut", !values.newsletterOptOut)
              }
              circleSize={24}
              barHeight={30}
              backgroundActive={"rgba(76, 120, 253, 1)"}
              backgroundInactive={"rgba(164, 159, 185, 1)"}
              circleActiveColor={"rgba(130, 150, 255, 1)"}
              circleInActiveColor={"rgba(38, 38, 79, 1)"}
              renderInActiveText={false}
              renderActiveText={false}
            />
          </View>
          <TouchableOpacity
            onPress={() =>
              Alert.alert("Telegram", "Activating Telegram Bot...")
            }
            className="w-full mt-6 p-4 bg-indigo rounded-lg shadow-md items-center"
          >
            <Texts className="text-white text-lg">Activate Telegram</Texts>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleSubmit()}
            className="w-full mt-4 p-4 bg-indigo rounded-lg shadow-md items-center"
          >
            <Texts className="text-white text-lg">Save Changes</Texts>
          </TouchableOpacity>
        </ScrollView>
      )}
    </Formik>
  );
}
