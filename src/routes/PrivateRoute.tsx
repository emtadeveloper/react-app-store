// react

import { FC } from "react";

// router

import { Navigate } from "react-router-dom";

// types

import { IPrivate } from "./types";

const PrivateRoute: FC<IPrivate> = ({ component: Component, props }) => {
    return localStorage.getItem("token") ? <Component {...props} /> : <Navigate replace to="/" />;
};

export default PrivateRoute;
