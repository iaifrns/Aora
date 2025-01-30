import { ResponseStatus } from "@/enum/ResponseStatus";
import { UserType } from "./user";

export interface GlobalContextType {
    user: UserType | null;
    setUser: (user: UserType | null) => void;
    isLoading: boolean;
    isAuth: boolean;
    setIsAuth: (isAuth: boolean) => void;
}