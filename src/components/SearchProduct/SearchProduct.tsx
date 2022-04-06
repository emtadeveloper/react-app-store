// react

import { FC } from "react";

// styles

import { Container } from "./style.css";

// icons

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

// types

import { ISearchProduct } from "./types";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const SearchProduct: FC<ISearchProduct> = ({ search, Filter }) => {
    return (
        <Container>
            <FontAwesomeIcon icon={faSearch as IconProp} className="icon" />
            <input onChange={(event) => Filter(event.target.value)} placeholder={search} />
        </Container>
    );
};
export default SearchProduct;
