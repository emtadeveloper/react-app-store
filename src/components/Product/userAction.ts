import { IUserAction } from "./types";

const useAction: IUserAction = (state, action) => {
    switch (action.type) {
        case "get-products-success":
            return { ...state, Filter: "all", recentData: action.recentData, data: action.data, isLoading: false };
        case "get-products-category":
            return { ...state, Filter: action.Filter, recentData: action.recentData, isLoading: false };
        case "post-product":
            return { ...state, isLoading: true };
        case "search":
            return { ...state, recentData: action.recentData, isLoading: false };
        default:
            return state;
    }
};

export default useAction;
