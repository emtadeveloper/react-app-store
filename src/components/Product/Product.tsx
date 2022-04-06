// react

import { FC, useEffect, useReducer } from "react";

// axios

import { get } from "../../services/HttpClient";

// styles

import { Container, Division } from "./style.css";

// components

import Card from "../../components/Card";
import FilterProduct from "../FilterProduct";
import useAction from "./userAction";
import SearchProduct from "../SearchProduct";

// utils

import { getCategories, Filter } from "../../helper";

// types

import { IProduct, Data } from "./types";

const Product: FC<IProduct | null> = ({ filterProduct, isLoading, search, sorrySearch, modal }) => {
    //
    const initState = { type: "", Filter: "", data: [], recentData: [], isLoading: true };

    const [state, dispatch] = useReducer(useAction, initState);

    useEffect(() => {
        get("products").then((res: any) => {
            dispatch({ type: "get-products-success", recentData: res.data, data: res.data });
        });
    }, []);

    const filterFunc = (event: string) => Filter(state, dispatch, event);

    const getCategoriesFunc = (namecategories?: string) => getCategories(state, dispatch, namecategories);

    const CardLoading = state.isLoading ? (
        <h2 className="isLoading">{isLoading} </h2>
    ) : state.recentData.length === 0 ? (
        <h2 className="isLoading"> {sorrySearch} </h2>
    ) : (
        state.recentData.map((item) => {
            const Item = { ...item, ...modal };
            return <Card key={item.id} {...Item} />;
        })
    );

    return (
        <Container>
            <SearchProduct search={search} Filter={filterFunc} />
            <FilterProduct {...filterProduct} getCategories={getCategoriesFunc} Filter={state.Filter} />
            <Division>{CardLoading}</Division>
        </Container>
    );
};

export default Product;
