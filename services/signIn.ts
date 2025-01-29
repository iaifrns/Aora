import { ResponseStatus } from "@/enum/ResponseStatus";
import { auth } from "@/libs/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

const SignInUser = async (email: string, password: string) => {
    console.log("called")
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    console.log("login successfull", response);
    return { status: ResponseStatus.SUCCESS, message: "Sign in success", user: response.user };
  } catch (e) {
    console.log("an error occured", e);
    return { status: ResponseStatus.ERROR, message: `email or password incorrect` };
  }
};

export { SignInUser };

