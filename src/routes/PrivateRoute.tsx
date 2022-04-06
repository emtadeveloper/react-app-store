// react

import { FC } from "react";

// router

import { Navigate } from "react-router-dom";

// types

import { IPrivate } from "./types";

// context

import { useAuthContext } from "../hooks/useAuthContext";

const PrivateRoute: FC<IPrivate> = ({ component: Component, props }) => {
    const token = useAuthContext();
    return token ? <Component {...props} /> : <Navigate replace to="/" />;
};

export default PrivateRoute;
