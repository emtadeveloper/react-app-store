// react

import { FC } from "react";

// styles

import { Container, Division } from "./style.css";

// components

import Card from "../Card";
import FilterProduct from "../FilterProduct";
import SearchProduct from "../SearchProduct/SearchProduct";

// types

import { IProduct } from "./types";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { productFilterCategories, productSearch } from "../../redux/action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { fetchproduct } from "../../redux/action";

const Product: FC<IProduct | null> = ({ filterProduct, isLoading, search, sorrySearch, modal, error }) => {
    //
    const product: any = useSelector((state: any) => state.productReducer, shallowEqual);
    const dispatch = useDispatch();

    const filterFunc = (event: string) => dispatch(productSearch(event, product.entities));

    const refreshNet = () => dispatch(fetchproduct);

    const getCategoriesFunc = (namecategories?: string) => dispatch(productFilterCategories(namecategories, product.entities));

    const CardLoading =
        product.status === "loading" ? (
            <h2 className="message">{isLoading} </h2>
        ) : product.status === "error" ? (
            <section className="containerError">
                <h2 className="message">{error} </h2>
                <FontAwesomeIcon onClick={refreshNet} icon={faArrowsRotate as IconProp} size="5x" />
            </section>
        ) : Object.keys(product.showEntities).length === 0 ? (
            <h2 className="message"> {sorrySearch} </h2>
        ) : (
            Object.keys(product.showEntities).map((item) => {
                const Item = { ...product.showEntities[item], ...modal };
                return <Card key={item} {...Item} />;
            })
        );
    return (
        <Container>
            <SearchProduct search={search} Filter={filterFunc} />
            <FilterProduct {...filterProduct} getCategories={getCategoriesFunc} Filter={product.filter} />
            <Division>{CardLoading}</Division>
        </Container>
    );
};

export default Product;
