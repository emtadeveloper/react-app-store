// react

import { FC } from "react";

// components

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Nav from "../../components/Nav";

// types

import { IHome } from "./types";

const Home: FC<IHome> = ({ footer, navBar }) => {
    return (
        <>
            <Header bage={1} />
            <Nav {...navBar} />
            <Footer {...footer} />
        </>
    );
};
export default Home;
