import { ResponseStatus } from "@/enum/ResponseStatus";
import { auth } from "@/libs/firebaseConfig";
import { ResponseType } from "@/types/response";
import { UserType } from "@/types/user";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { signInWithEmailAndPassword } from "firebase/auth";

const signInUser = async (
  email: string,
  password: string
): Promise<ResponseType> => {
  console.log("called");
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    console.log("login successfull", response);
    await AsyncStorage.setItem("user", JSON.stringify(response.user));
    return {
      status: ResponseStatus.SUCCESS,
      message: "Sign in success",
      user: response.user as unknown as UserType,
    };
  } catch (e) {
    console.log("an error occured", e);
    return {
      status: ResponseStatus.ERROR,
      message: `email or password incorrect`,
    };
  }
};

export { signInUser };
