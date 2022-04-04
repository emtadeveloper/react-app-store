import React from "react";
import { LangContext } from "../contexts/LangContext";
import { faHome, faLogin, faDash, faNotFound } from "./../lang/fa";
import { enHome, enLogin, enDash, enNotFound } from "./../lang/en";

export const useLangContext = () => React.useContext(LangContext);

export const Lang = () => {
    let LangHome, LangLogin, LangDash, LangNotFound;
    if (useLangContext() === "فا") {
        LangHome = faHome;
        LangLogin = faLogin;
        LangDash = faDash;
        LangNotFound = faNotFound;
    } else {
        LangHome = enHome;
        LangLogin = enLogin;
        LangDash = enDash;
        LangNotFound = enNotFound;
    }
    return { LangHome, LangLogin, LangDash, LangNotFound };
};
