import { combineReducers } from "redux";
import { productReducer } from "../components/Product/productSlice";
import { shopReducer } from "./shopSlice";

const rootReducer = combineReducers({ productReducer, shopReducer });

export default rootReducer;
