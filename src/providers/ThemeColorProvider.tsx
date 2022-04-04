// react

import React, { FC } from "react";

//context

import { ThemeContext } from "../contexts/ThemeContext";
import { SetThemeContext } from "../contexts/SetThemeContext";

// types

import { ModeType } from "../types";

const ThemeColorProvider: FC<React.ReactNode> = ({ children }) => {
    //
    const [theme, setTheme] = React.useState<ModeType["theme"]>("light");

    return (
        <ThemeContext.Provider value={theme}>
            <SetThemeContext.Provider value={setTheme}>{children}</SetThemeContext.Provider>
        </ThemeContext.Provider>
    );
};
export default ThemeColorProvider;
