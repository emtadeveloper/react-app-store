// react

import { FC } from "react";

// components

import Footer from "../../components/footer";
import Header from "../../components/header";
import Nav from "../../components/nav";
import Title from "../../components/title";
import Product from "../../components/product";

// types

import { IHome } from "./../../types";

const Home: FC<IHome> = ({ header, footer, navBar, title_product, product }) => {
    return (
        <>
            <Header {...header} />
            <Nav {...navBar} />
            <Title title={title_product} />
            <Product {...product} />
            <Footer {...footer} />
        </>
    );
};
export default Home;
