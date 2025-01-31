import { videos } from "@/constants";
import { ResponseStatus } from "@/enum/ResponseStatus";
import { db } from "@/libs/firebaseConfig";
import { ResponseType } from "@/types/response";
import { addDoc, collection } from "firebase/firestore";

const addDummyVideoData = async (): Promise<ResponseType> => {
    try {
        const responses = await Promise.all(
            videos.map(video => addDoc(collection(db, 'video'), video))
        )
        if(responses.every(response => response != null)){
            return {status: ResponseStatus.SUCCESS, message: "well done"}
        }
        return {status:ResponseStatus.ERROR, message: "Something when roung"}
    }catch(e){
        return {status: ResponseStatus.ERROR, message: `error ${e}`}
    }
}

export {addDummyVideoData}