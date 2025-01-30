import { ResponseStatus } from "@/enum/ResponseStatus"
import { db } from "@/libs/firebaseConfig"
import { ResponseType } from "@/types/response"
import { UserSimpleType } from "@/types/user"
import { addDoc, collection } from "firebase/firestore"

const createUser = async (user: UserSimpleType): Promise<ResponseType> => {
    try{
        const response = addDoc(collection(db, "user"), user)
        console.log("User created successfully", response)
        return {status: ResponseStatus.SUCCESS, message: "User created successfully", user: user}
    }catch(e){
        console.log(e)
        return {status: ResponseStatus.ERROR, message: "Something when roung please try again later"}
    }
}

export { createUser }
