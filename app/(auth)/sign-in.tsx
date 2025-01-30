import CustomButton from "@/components/common/CustomButton";
import InputComponent from "@/components/common/InputComponent";
import LogoComponent from "@/components/common/LogoComponent";
import { ResponseStatus } from "@/enum/ResponseStatus";
import { signInUser } from "@/services/signIn";
import { FormErrorType } from "@/types/formComponent";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
  const [values, setValues] = React.useState({
    email: "",
    password: "",
  });

  const [formError, setFormError] = useState<FormErrorType>({
    isEmailOk: null,
    isPasswordOk: null,
    errorMessage: {
      email: null,
      password: null,
    },
  });

  const checkInputs = () => {
    switch (true) {
      case values.email === "":
        return {
          ...formError,
          isEmailOk: false,
          errorMessage: { email: "Email is required", password: null },
        };
      case values.password === "":
        return {
          ...formError,
          isPasswordOk: false,
          errorMessage: { email: null, password: "Password is required" },
        };
      case values.email.includes("@") === false:
        return {
          ...formError,
          isEmailOk: false,
          errorMessage: { email: "Email is not valid", password: null },
        };
      case values.password.length < 6:
        return {
          ...formError,
          isPasswordOk: false,
          errorMessage: {
            email: null,
            password: "Password must be at least 4 characters",
          },
        };
      default:
        return {
          ...formError,
          isEmailOk: true,
          isPasswordOk: true,
          errorMessage: { email: null, password: null },
        };
    }
  };

  const [response, setResponse] = useState<{
    status: ResponseStatus | null;
    message: string;
  }>({
    status: null,
    message: "",
  });

  const handleSubmitButton = async () => {
    const error: FormErrorType = checkInputs();
    setFormError(error);
    if (error.isEmailOk && error.isPasswordOk) {
      setResponse({ status: ResponseStatus.LOADING, message: "Loading..." });
      const { status, message, user } = await signInUser(
        values.email,
        values.password
      );
      setResponse({ status, message });
      if (status === ResponseStatus.SUCCESS){
        router.replace("/home");
      }
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="h-full w-full gap-4 p-4">
          <LogoComponent />
          <Text className="text-2xl text-white font-psemibold mb-3">
            Log in to Aora
          </Text>
          <View className="gap-2">
            <InputComponent
              title="Email"
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e })}
              placeholder="Enter your email"
              keyboardType="email-address"
              customStyle={
                formError.isEmailOk || formError.isEmailOk == null
                  ? "border-black-200"
                  : "border-red-500"
              }
            />
            {formError.errorMessage.email && (
              <Text className="text-red-500">
                {formError.errorMessage.email}
              </Text>
            )}
          </View>
          <View className="gap-2">
            <InputComponent
              title="Password"
              value={values.password}
              onChange={(e) => setValues({ ...values, password: e })}
              placeholder="Enter your password"
              keyboardType="visible-password"
              isPassword
              customStyle={
                formError.isPasswordOk || formError.isPasswordOk == null
                  ? "border-black-200"
                  : "border-red-500"
              }
            />
            {formError.errorMessage.password && (
              <Text className="text-red-500">
                {formError.errorMessage.password}
              </Text>
            )}
          </View>

          <CustomButton
            title="Sign In"
            onPress={handleSubmitButton}
            customStyle="mt-5"
            isLoading={response.status === ResponseStatus.LOADING}
          />
          {response.status &&(<Text
            className={`text-lg text-center ${
              response.status == ResponseStatus.SUCCESS
                ? "text-green-400"
                : response.status == ResponseStatus.ERROR
                ? "text-red-500"
                : "text-white"
            }`}
          >
            {response.message}
          </Text>)}
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
