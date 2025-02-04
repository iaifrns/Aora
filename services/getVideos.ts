import { dbInfo } from "@/constants";
import { ResponseStatus } from "@/enum/ResponseStatus";
import { db } from "@/libs/firebaseConfig";
import { ResponseType } from "@/types/response";
import { VideoType } from "@/types/video";
import { collection, getDocs } from "firebase/firestore";

const getVideos = async (): Promise<ResponseType> => {
  try {
    const videos: VideoType[] = [];
    const response = await getDocs(collection(db, dbInfo.videoCollection));
    if (response) {
      response.forEach((doc) => {
        videos.push({
          id: doc.id,
          ...(doc.data() as VideoType),
        });
      });
      return {
        status: ResponseStatus.SUCCESS,
        message: "data collected",
        data: videos,
      };
    }
    return { status: ResponseStatus.ERROR, message: "Please Try again" };
  } catch (err) {
    console.log("Error geting data: ", err);
    return {
      status: ResponseStatus.ERROR,
      message: `An Error occured check your connection`,
    };
  }
};

export { getVideos };
