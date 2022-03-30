// react

import { useEffect, useState } from "react";

// types

import { ModeType, IUseThemeModeTypes } from "./types";

const useThemeMode: () => IUseThemeModeTypes = () => {
    //
    const [state, setState] = useState<ModeType>({ theme: "dark", lang: "EN" });

    const setMode: (mode: ModeType) => void = ({ theme, lang }) => {
        window.localStorage.setItem("theme", theme);
        window.localStorage.setItem("lang", lang);
        setState({ theme, lang });
    };

    const getMode: () => void = () => {
        const localTheme = window.localStorage.getItem("theme") as ModeType["theme"];
        const localLang = window.localStorage.getItem("lang") as ModeType["lang"];
        localTheme && localLang && setState({ lang: localLang, theme: localTheme });
    };

    const themeChange: () => void = () => (state.theme === "dark" ? setMode({ ...state, theme: "light" }) : setMode({ ...state, theme: "dark" }));

    const langChange: () => void = () => (state.lang === "EN" ? setMode({ ...state, lang: "فا" }) : setMode({ ...state, lang: "EN" }));

    useEffect(() => {
        getMode();
    }, []);

    return { state, themeChange, langChange };
};

export default useThemeMode;
