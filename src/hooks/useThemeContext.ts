import React from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import Theme from "../themes/palette";

export const useThemeContext = () => React.useContext(ThemeContext);

export const ThemePallete = () => {
    return useThemeContext() === "light" ? Theme.light : Theme.dark;
};
