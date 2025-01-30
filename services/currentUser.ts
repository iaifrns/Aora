import { ResponseStatus } from "@/enum/ResponseStatus";
import { ResponseType } from "@/types/response";
import AsyncStorage from "@react-native-async-storage/async-storage";

const currentUser = async (): Promise<ResponseType> => {
    try {
        const userR = await AsyncStorage.getItem("user");
        if (userR) {
            const user = JSON.parse(userR);
            console.log(user);
            return {
                status: ResponseStatus.SUCCESS,
                message: "User is logged in",
                user: {
                    email: user.email ?? "",
                    id: user.uid
                },
            };
        } else {
            return {
                status: ResponseStatus.ERROR,
                message: "User is not logged in",
            };
        }
    }catch (err) {
        console.log(err);
        return {
            status: ResponseStatus.ERROR,
            message: `${err}`,
        }
    }
}

export default currentUser;
