import useFetchData from "@/hooks/useFetchData";
import { getVideos } from "../services/getVideos";
import { useEffect, useState } from "react";
import { ResponseType } from "@/types/response";
import { ResponseStatus } from "@/enum/ResponseStatus";
import getAllVideoPosters from "../services/getAllVideoPosters";

const useGetVideosAndUsers = () => {
  const { response, refresher } = useFetchData(getVideos);

  const [inProcess, setInProcess] = useState(true);
  const [res, setRes] = useState<ResponseType>({
    status: ResponseStatus.LOADING,
    message: "Loading ...",
  });

  useEffect(() => {
    if (response?.status != ResponseStatus.LOADING) {
      setInProcess(false);
    }
  }, [response?.status]);

  if (!inProcess && response?.status == ResponseStatus.ERROR) return {response, refresher};

  const fetch = async () => {
    const resp = await getAllVideoPosters(response?.data);
    setRes(resp);
  };

  useEffect(() => {
    if (!inProcess && response?.status == ResponseStatus.SUCCESS) {
      fetch();
    }
  }, [inProcess, response?.status]);

  return { res, refresher };
};

export default useGetVideosAndUsers;
