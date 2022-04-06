// react

import { FC } from "react";

// components

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Title from "../../components/Title";

// types

import { IHome } from "./../../types";

const Home: FC<IHome> = ({ footer, navBar, title_product }) => {
    return (
        <>
            <Header bage={1} />
            <Nav {...navBar} />
            <Title title={title_product} />
            <Footer {...footer} />
        </>
    );
};
export default Home;
