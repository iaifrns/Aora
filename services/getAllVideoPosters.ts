import { ResponseStatus } from "@/enum/ResponseStatus";
import { UserType } from "@/types/user";
import { VideoType } from "@/types/video";
import getUser from "./getUser";
import { ResponseType } from "@/types/response";

const getAllVideoPosters = async (
  videos: VideoType[]
): Promise<ResponseType> => {
  const usersGroup: Record<string, UserType> = {};
  console.log(usersGroup)
  const res = await Promise.all(
    videos.map(async (video) => {
      console.log(video.uid)
      const res = await getUser(video.uid!);
      if (res.status == ResponseStatus.SUCCESS) {
        const user = res.data as UserType
        if(!usersGroup[user.id]){
          usersGroup[user.id] = user
        }
      }
      return res;
    })
  );
  let response: ResponseType;
  if (res.every((r) => r.status == ResponseStatus.SUCCESS)) {
    const users = Object.values(usersGroup)
    response = {
      status: ResponseStatus.SUCCESS,
      message: "success ...",
      videos: videos,
      users: [...users],
    };
  } else {
    response = {
      status: ResponseStatus.ERROR,
      message: "something went roung",
    };
  }
  return response;
};

export default getAllVideoPosters;
