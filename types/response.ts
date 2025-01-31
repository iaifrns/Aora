import { ResponseStatus } from "@/enum/ResponseStatus";
import { UserType } from "./user";
import { VideoType } from "./video";

export interface ResponseType {
  status: ResponseStatus | null;
  message: string;
  user?: UserType | null;
  videos?: VideoType[] | null;
  data ?: any;
}
