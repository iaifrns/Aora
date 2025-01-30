import CustomButton from "@/components/common/CustomButton";
import InputComponent from "@/components/common/InputComponent";
import LogoComponent from "@/components/common/LogoComponent";
import { ResponseStatus } from "@/enum/ResponseStatus";
import { createUser } from "@/services/createUser";
import { registerUSer } from "@/services/signUp";
import { FormErrorType } from "@/types/formComponent";
import { ResponseType } from "@/types/response";
import { UserSimpleType } from "@/types/user";
import { Link } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUp = () => {
  const [values, setValues] = React.useState({
    username: "",
    email: "",
    password: "",
  });

  const [response, setResponse] = useState<ResponseType>({
    status: null,
    message: "",
    user: null,
  });

  const [formError, setFormError] = useState<FormErrorType>({
    isEmailOk: null,
    isPasswordOk: null,
    isUsernameOk: null,
    errorMessage: {
      email: null,
      password: null,
      username: null,
    },
  });

  const checkFormInput = (): FormErrorType => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const error: FormErrorType = {
      isEmailOk: null,
      isPasswordOk: null,
      isUsernameOk: null,
      errorMessage: {
        email: null,
        password: null,
        username: null,
      },
    };
    switch (true) {
      case values.username.length < 4:
        return {
          ...error,
          isUsernameOk: false,
          errorMessage: {
            ...error.errorMessage,
            username: "Username must be at least 4 characters long",
          },
        };
      case !emailRegex.test(values.email):
        return {
          ...error,
          isEmailOk: false,
          errorMessage: {
            ...error.errorMessage,
            email: "Invalid email address",
          },
        };
      case values.password.length < 4:
        return {
          ...error,
          isPasswordOk: false,
          errorMessage: {
            ...error.errorMessage,
            password: "Password must be at least 4 characters long",
          },
        };
      default:
        return {
          ...error,
          isEmailOk: true,
          isPasswordOk: true,
          isUsernameOk: true,
          errorMessage: {
            email: null,
            password: null,
            username: null,
          },
        };
    }
  };

  const handleSubmitButton = async () => {
    setResponse({
      ...response,
      status: ResponseStatus.LOADING,
      message: "Loading...",
    });
    const error = checkFormInput();
    setFormError(error);
    if (error.isEmailOk && error.isPasswordOk && error.isUsernameOk) {
      console.log("form is ok");
      const res = await registerUSer(values.email, values.password);
      if (res.status === ResponseStatus.SUCCESS) {
        const user: UserSimpleType = {
          id: res.user?.id ?? "",
          email: res.user?.email ?? values.email,
          username: values.username,
        };
        const resp = await createUser(user);
        setResponse(resp);
        setValues({ username: "", email: "", password: "" });
      } else {
        setResponse(res);
      }
    } else {
      setResponse({ status: null, message: "" });
    }
  };

  return (
    <SafeAreaView className="h-full w-full bg-primary">
      <ScrollView>
        <View className="h-full w-full p-4 gap-4">
          <LogoComponent />
          <Text className="text-2xl text-white font-psemibold mb-3">
            Create an Account{" "}
          </Text>
          <View className="gap-2">
            <InputComponent
              title="Username"
              value={values.username}
              placeholder="Enter your username"
              onChange={(e) => setValues({ ...values, username: e })}
              customStyle={
                formError.isUsernameOk || formError.isUsernameOk == null
                  ? "border-black-200"
                  : "border-red-500"
              }
            />
            {formError.isUsernameOk === false && (
              <Text className="text-red-500">
                {formError.errorMessage.username}
              </Text>
            )}
          </View>
          <View className="gap-2">
            <InputComponent
              title="Email"
              value={values.email}
              placeholder="Enter your email"
              onChange={(e) => setValues({ ...values, email: e })}
              keyboardType="email-address"
              customStyle={
                formError.isEmailOk || formError.isEmailOk == null
                  ? "border-black-200"
                  : "border-red-500"
              }
            />
            {formError.isEmailOk === false && (
              <Text className="text-red-500">
                {formError.errorMessage.email}
              </Text>
            )}
          </View>
          <View className="gap-2">
            <InputComponent
              title="Password"
              value={values.password}
              placeholder="Enter your password"
              onChange={(e) => setValues({ ...values, password: e })}
              isPassword
              customStyle={
                formError.isPasswordOk || formError.isPasswordOk == null
                  ? "border-black-200"
                  : "border-red-500"
              }
            />
            {formError.isPasswordOk === false && (
              <Text className="text-red-500">
                {formError.errorMessage.password}
              </Text>
            )}
          </View>

          <CustomButton
            title="Create Account"
            onPress={handleSubmitButton}
            customStyle="mt-5"
          />
          {response.status && (
            <Text
              className={`text-center ${
                response.status === ResponseStatus.SUCCESS
                  ? "text-green-500"
                  : response.status == ResponseStatus.ERROR
                  ? "text-red-500"
                  : "text-white"
              }`}
            >
              {response.message}
            </Text>
          )}
          <View className="justify-center flex-row ">
            <Text className="text-gray-100 text-lg">
              You already have an account?{" "}
            </Text>
            <Link
              href={"/sign-in"}
              className="text-lg font-psemibold text-secondary"
            >
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
