import useFetchData from "@/hooks/useFetchData";
import { UserType } from "@/types/user";
import { VideoType } from "@/types/video";
import getUser from "./getUser";
import { ResponseStatus } from "@/enum/ResponseStatus";

const getAllVideoPosters = async (
  videos: VideoType[],
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
): Promise<UserType[]> => {
  const users: UserType[] = [];
  await Promise.all(
    videos.map(async (video) => {
      const res = await getUser(video.id!);
      if (res.status == ResponseStatus.SUCCESS) {
        users.push(res.data);
      }
    })
  );
  setLoading(false);
  return users;
};

export default getAllVideoPosters;
