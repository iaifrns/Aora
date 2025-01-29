import { ResponseStatus } from "@/enum/ResponseStatus";
import { db } from "@/libs/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

const useFirebaseConnection = () => {
  const [message, setMessage] = useState("Checking your connection ...");
  const [isConnected, setIsConnected] = useState<ResponseStatus>(ResponseStatus.LOADING);

  useEffect(() => {
    const testConnection = async () => {
      try {
        const querySelector = await getDocs(collection(db, "user"));
        if (querySelector) {
          setMessage("Connection stable");
          setIsConnected(ResponseStatus.SUCCESS);
        } else {
          setMessage("Please check your connection");
            setIsConnected(ResponseStatus.ERROR);
        }
      } catch (e) {
        setMessage(`${e}`);
        setIsConnected(ResponseStatus.ERROR);
      }
    };
    testConnection();
  }, []);

  return { message, isConnected };
};

export default useFirebaseConnection;
