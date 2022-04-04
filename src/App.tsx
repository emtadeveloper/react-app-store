// react

import { FC } from "react";

// Components Pages

import Router from "./routes/Router";

// styles

import "./fonts/fonts.css";
import GlobalCSS from "./styles/global";

// theme

import { ThemeProvider } from "styled-components";

// hooks

import { ThemePallete } from "./hooks/useThemeContext";
import { useLangContext } from "./hooks/useLangContext";

const App: FC = () => {
    //
    const ThemePalete = ThemePallete();
    const LangContext = useLangContext();
    const theme = { ...ThemePalete, lang: LangContext };

    return (
        <ThemeProvider theme={theme}>
            <GlobalCSS />
            <Router />
        </ThemeProvider>
    );
};

export default App;
