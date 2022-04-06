// react

import { FC } from "react";

// components

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Title from "../../components/Title";
import Product from "../../components/Product";

// types

import { IHome } from "./../../types";

const Home: FC<IHome> = ({ footer, navBar, title_product, product }) => {
    return (
        <>
            <Header bage={1} />
            <Nav {...navBar} />
            <Title title={title_product} />
            <Product {...product} />
            <Footer {...footer} />
        </>
    );
};
export default Home;
