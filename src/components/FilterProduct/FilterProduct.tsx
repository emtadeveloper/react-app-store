// react

import { FC } from "react";

// styles

import { Button, Container } from "./style.css";

// types

import { IFilterProduct } from "./types";

const FilterProduct: FC<IFilterProduct> = ({ getCategories, Filter, all, jewelery, electronics, mens, womens }) => {
    return (
        <Container>
            <Button isActive={Filter === "electronics"} onClick={() => getCategories("electronics")}>
                {electronics}
            </Button>
            <Button isActive={Filter === "women's clothing"} onClick={() => getCategories("women's clothing")}>
                {womens}
            </Button>
            <Button isActive={Filter === "jewelery"} onClick={() => getCategories("jewelery")}>
                {jewelery}
            </Button>
            <Button isActive={Filter === "men's clothing"} onClick={() => getCategories("men's clothing")}>
                {mens}
            </Button>
            <Button isActive={Filter === "all"} onClick={() => getCategories()}>
                {all}
            </Button>
        </Container>
    );
};
export default FilterProduct;
