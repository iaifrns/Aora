import { ResponseStatus } from "@/enum/ResponseStatus";
import currentUser from "@/services/currentUser";
import { GlobalContextType } from "@/types/globalContextType";
import { UserType } from "@/types/user";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Alert } from "react-native";

const GlobalContext = createContext<GlobalContextType>({
  user: null,
  setUser: () => {},
  isLoading: false,
  isAuth: false,
  setIsAuth: () => {},
});

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuth, setIsAuth] = useState<boolean>(false);

  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true);
      const { user } = await currentUser();
      if (user) {
        setUser(user);
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
      setIsLoading(false);
    };
    fetchUser();
  }, []);

  return (
    <GlobalContext.Provider
      value={{ user, setUser, isLoading, isAuth, setIsAuth }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
