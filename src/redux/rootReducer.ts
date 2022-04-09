import { combineReducers } from "redux";
import { productReducer } from "../components/product/productSlice";
import { shopReducer } from "./shopSlice";

const rootReducer = combineReducers({ productReducer, shopReducer });

export default rootReducer;
