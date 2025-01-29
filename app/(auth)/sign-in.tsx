import CustomButton from "@/components/common/CustomButton";
import InputComponent from "@/components/common/InputComponent";
import LogoComponent from "@/components/common/LogoComponent";
import { Link } from "expo-router";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
  const [values, setValues] = React.useState({
    email: "",
    password: "",
  });
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="h-full w-full gap-4 p-4">
          <LogoComponent />
          <Text className="text-2xl text-white font-psemibold mb-3">
            Log in to Aora
          </Text>
          <InputComponent
            title="Email"
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e })}
            placeholder="Enter your email"
            keyboardType="email-address"
          />
          <InputComponent
            title="Password"
            value={values.password}
            onChange={(e) => setValues({ ...values, password: e })}
            placeholder="Enter your password"
            keyboardType="visible-password"
            isPassword
          />
          <CustomButton title="Sign In" onPress={() => {}} customStyle="mt-5" />
          <View className="w-full items-center flex-row justify-center mt-3">
            <Text className="text-lg text-gray-100">Don't have account? </Text>
            <Link
              href={"/(auth)/sign-up"}
              className="text-secondary font-psemibold"
            >
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
