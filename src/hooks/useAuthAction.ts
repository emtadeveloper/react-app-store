import { AuthType } from "../types";
import useSetAuthContext from "./useSetAuthContext";

export const useAuthAction = () => {
    const SetAuth = useSetAuthContext();
    const SetToken = (token: AuthType["Token"]) => {
        localStorage.setItem("token", JSON.stringify(token));
        SetAuth(token);
    };
    return { SetToken };
};
