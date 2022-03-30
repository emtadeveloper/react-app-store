// react

import { FC } from "react";

// components

import Footer from "../Footer";
import Header from "../Header";

// types

import { ILayout } from "./types";

const Layout: FC<ILayout> = ({ footer, children }) => {
    return (
        <>
            <Header bage={1} />
            {children}
            <Footer {...footer} />
        </>
    );
};

export default Layout;
