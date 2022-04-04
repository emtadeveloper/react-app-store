// react

import React, { FC } from "react";

//context

import { LangContext } from "../contexts/LangContext";
import { SetLangContext } from "../contexts/SetLangContext";

// types

import { ModeType } from "../types";

const LangProvider: FC<React.ReactNode> = ({ children }) => {
    //
    const [lang, setLang] = React.useState<ModeType["lang"]>("فا");

    return (
        <LangContext.Provider value={lang}>
            <SetLangContext.Provider value={setLang}>{children}</SetLangContext.Provider>
        </LangContext.Provider>
    );
};
export default LangProvider;
