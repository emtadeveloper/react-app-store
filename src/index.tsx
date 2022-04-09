// react

import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

// router

import { BrowserRouter } from "react-router-dom";

// provider

import ReduxProvider from "./providers/ReduxProvider";
import LangProvider from "./providers/LangProvider";
import ThemeColorProvider from "./providers/ThemeColorProvider";
import AuthProvider from "./providers/AuthProvider";
// component

import App from "./App";
import Compose from "./components/compose";

import "react-toastify/dist/ReactToastify.css";
import "./fonts/fonts.css";
import { fetchproduct } from "./redux/action";
import store from "./redux/store";

store.dispatch(fetchproduct);

ReactDOM.render(
    <Compose components={[React.StrictMode, AuthProvider, ReduxProvider, LangProvider, ThemeColorProvider, BrowserRouter]}>
        <App />
    </Compose>,
    document.getElementById("root")
);

reportWebVitals();
