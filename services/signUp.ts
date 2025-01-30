import { ResponseStatus } from "@/enum/ResponseStatus";
import { auth } from "@/libs/firebaseConfig";
import { ResponseType } from "@/types/response";
import { createUserWithEmailAndPassword } from "firebase/auth";

const registerUSer = async (
  email: string,
  password: string
): Promise<ResponseType> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log(user);
    return {
      status: ResponseStatus.SUCCESS,
      message: "User created successfully",
      user: {
        id: user.uid,
        email: user?.email ?? email,
      },
    };
  } catch (err: unknown) {
    const e = err as { code: string; message: string };
    console.log(e.code, e.message);
    return { status: ResponseStatus.ERROR, message: e.message };
  }
};

export { registerUSer };

