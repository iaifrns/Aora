import { ResponseStatus } from "@/enum/ResponseStatus";
import { UserType } from "./user";

export interface ResponseType {
    status: ResponseStatus | null;
    message: string;
    user?: UserType | null;
}