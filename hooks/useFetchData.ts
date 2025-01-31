import { ResponseStatus } from "@/enum/ResponseStatus";
import { ResponseType } from "@/types/response";
import { useEffect, useState } from "react";

const useFetchData = (fc: () => Promise<ResponseType>) => {
    const [response, setResponse] = useState<ResponseType>()

    const fetchData = async () => {
        setResponse({status: ResponseStatus.LOADING, message: "Loading ..."})
        const res = await fc()
        setResponse(res)
    }
    useEffect(()=>{
        fetchData()
    },[])

    const refresher = () => fetchData()

    return { response, refresher }
}

export default useFetchData