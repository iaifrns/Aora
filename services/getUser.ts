import { dbInfo } from "@/constants";
import { ResponseStatus } from "@/enum/ResponseStatus";
import { db } from "@/libs/firebaseConfig";
import { ResponseType } from "@/types/response";
import { UserType } from "@/types/user";
import { doc, getDoc } from "firebase/firestore";

const getUser = async (id: string): Promise<ResponseType> => {
  try {
    const res = await getDoc(doc(db, dbInfo.userCollection, id));
    if (res) {
      return {
        status: ResponseStatus.SUCCESS,
        message: "Success",
        data: res.data() as UserType,
      };
    }
    return {
      status: ResponseStatus.ERROR,
      message: "Something went Roung Try again",
    };
  } catch (e) {
    console.log("Error: ", e);
    return { status: ResponseStatus.ERROR, message: `Error ${e}` };
  }
};

export default getUser;
