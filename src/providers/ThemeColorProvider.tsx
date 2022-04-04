import React, { FC } from "react";

//context

import { ThemeContext } from "../contexts/ThemeContext";
import { SetThemeContext } from "../contexts/SetThemeContext";
import { ModeType } from "../contexts/types";

const ThemeColorProvider: FC = ({ children }) => {
    //
    const [theme, setTheme] = React.useState<ModeType["theme"]>("light");

    return (
        <ThemeContext.Provider value={theme}>
            <SetThemeContext.Provider value={setTheme}>{children}</SetThemeContext.Provider>
        </ThemeContext.Provider>
    );
};
export default ThemeColorProvider;
