import React from "react";
import { View, TextInput, TouchableOpacity, Dimensions } from "react-native";
import { useRouter } from "expo-router";
import Animated, {
  Easing,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Formik } from "formik";
import * as Yup from "yup";
import LogoDark from "@/assets/images/logo-dark";
import Texts from "@/components/Texts";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function SignIn() {
  const router = useRouter();
  const { height } = Dimensions.get("window");
  const logoTranslateY = useSharedValue(0);
  const logoScale = useSharedValue(1);
  const formOpacity = useSharedValue(1);

  return (
    <View className="flex-1 justify-center items-center bg-white dark:bg-black px-10">
      <Animated.View
        style={{
          transform: [{ translateY: logoTranslateY }, { scale: logoScale }],
        }}
        className="mb-10"
      >
        <LogoDark />
      </Animated.View>

      <Formik
        initialValues={{ email: "client@email.com", password: "password" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          if (
            values.email !== "client@email.com" ||
            values.password !== "password"
          ) {
            setSubmitting(false);
          } else {
            logoTranslateY.value = withTiming(110, {
              duration: 1000,
              easing: Easing.ease,
            });
            logoScale.value = withTiming(1.5, {
              duration: 1000,
              easing: Easing.ease,
            });
            formOpacity.value = withTiming(0, {
              duration: 500,
              easing: Easing.ease,
            });

            setTimeout(() => router.push("/"), 2000);
          }
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <Animated.View
            style={{ opacity: formOpacity, width: "100%" }}
            className="w-full"
          >
            <Texts className="text-primary-700 dark:text-white mb-1">
              Email
            </Texts>
            <TextInput
              value={values.email}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              className="w-full p-3 bg-gray-100 border border-border dark:bg-gray-800 text-primary-700 dark:text-white rounded-lg"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            {errors.email && touched.email && (
              <Texts className="text-[rgba(197,49,49,0.7)] mt-2">
                {errors.email}
              </Texts>
            )}

            <Texts className="text-primary-700 dark:text-white mt-4 mb-1">
              Password
            </Texts>
            <TextInput
              value={values.password}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              secureTextEntry
              className="w-full p-3 bg-gray-100 border border-border dark:bg-gray-800 text-primary-700 dark:text-white rounded-lg"
            />
            {errors.password && touched.password && (
              <Texts className="text-[rgba(197,49,49,0.7)] mt-2">
                {errors.password}
              </Texts>
            )}

            <TouchableOpacity
              onPress={() => handleSubmit()}
              className="w-full mt-6 p-4 bg-indigo rounded-lg shadow-md items-center"
            >
              <Texts className="text-white text-lg">Login</Texts>
            </TouchableOpacity>
          </Animated.View>
        )}
      </Formik>
    </View>
  );
}
