// react

import { FC } from "react";

// react router

import { Routes, Route } from "react-router-dom";

// Components Pages

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import NotFoundPage from "./pages/NotFoundPage";

// styles

import "./fonts/fonts.css";
import GlobalCSS from "./styles/global";
import Theme from "./themes/palette";

// theme

import { ThemeProvider } from "styled-components";
import { faHome, faLogin, faDash, faNotFound } from "./lang/fa";
import { enHome, enLogin, enDash, enNotFound } from "./lang/en";

// hooks

import useThemeMode from "./hooks/useThemeMode";
import { Context } from "./contexts";

const App: FC = () => {
    //
    const { state, themeChange, langChange } = useThemeMode();
    const themeMode = state.theme === "light" ? Theme.light : Theme.dark;
    const langModeHome = state.lang === "فا" ? faHome : enHome;
    const langModeLogin = state.lang === "فا" ? faLogin : enLogin;
    const langModeDash = state.lang === "فا" ? faDash : enDash;
    const langModeNotFound = state.lang === "فا" ? faNotFound : enNotFound;
    const theme = { ...themeMode, lang: state.lang };

    return (
        <Context.Provider value={{ theme: state.theme, lang: state.lang, langChange, themeChange }}>
            <ThemeProvider theme={theme}>
                <GlobalCSS />
                <Routes>
                    <Route path="/" element={<Home {...langModeHome} />} />
                    <Route path="/Login" element={<Login {...langModeLogin} />} />
                    <Route path="/Dashboard" element={<Dashboard {...langModeDash} />} />
                    <Route path="*" element={<NotFoundPage {...langModeNotFound} />} />
                </Routes>
            </ThemeProvider>
        </Context.Provider>
    );
};

export default App;
