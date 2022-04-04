import React, { FC } from "react";

// react router

import { Routes, Route } from "react-router-dom";

// Components Pages

import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import NotFoundPage from "../pages/NotFoundPage";

// hooks

import { Lang } from "../hooks/useLangContext";

const Router: FC = () => {
    const { LangDash, LangHome, LangLogin, LangNotFound } = Lang();

    return (
        <Routes>
            <Route path="/" element={<Home {...LangHome} />} />
            <Route path="/Login" element={<Login {...LangLogin} />} />
            <Route path="/Dashboard" element={<Dashboard {...LangDash} />} />
            <Route path="*" element={<NotFoundPage {...LangNotFound} />} />
        </Routes>
    );
};
export default Router;
