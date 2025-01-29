import CustomButton from "@/components/common/CustomButton";
import InputComponent from "@/components/common/InputComponent";
import LogoComponent from "@/components/common/LogoComponent";
import { Link } from "expo-router";
import React, { Component } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUp = () => {
  const [values, setValues] = React.useState({
    username: "",
    email: "",
    password: "",
  });
  return (
    <SafeAreaView className="h-full w-full bg-primary">
      <ScrollView>
        <View className="h-full w-full p-4 gap-4">
          <LogoComponent />
          <Text className="text-2xl text-white font-psemibold mb-3">
            Create an Account{" "}
          </Text>
          <InputComponent
            title="Username"
            value={values.username}
            placeholder="Enter your username"
            onChange={(e) => setValues({ ...values, username: e })}
          />
          <InputComponent
            title="Email"
            value={values.email}
            placeholder="Enter your email"
            onChange={(e) => setValues({ ...values, email: e })}
            keyboardType="email-address"
          />
          <InputComponent
            title="Password"
            value={values.password}
            placeholder="Enter your password"
            onChange={(e) => setValues({ ...values, password: e })}
            isPassword
          />
          <CustomButton title="Create Account" onPress={() => {}} customStyle="mt-5" />
<View className="justify-center flex-row ">
  <Text className="text-gray-100 text-lg">You already have an account? </Text>
  <Link href={'/sign-in'} className="text-lg font-psemibold text-secondary">Sign In</Link>
</View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
