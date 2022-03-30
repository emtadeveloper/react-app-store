// icons

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

// package

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// types

import { IHandle, Lang, Theme, ITheme, IBox, IScroll, ICheckScroll } from "./types";

export const classTheme: ITheme<Theme, string> = (theme) => {
    return theme === "light" ? "theme animationMoon" : " theme  animationSun";
};

export const iconTheme: ITheme<Theme, IconProp> = (theme) => {
    return theme === "dark" ? (faSun as IconProp) : (faMoon as IconProp);
};

export const handleChangeTheme: IHandle<Theme, Object> = (theme, themeChange) => {
    return theme === "dark" ? themeChange("light") : themeChange("dark");
};

export const handleChangeLang: IHandle<Lang, Object> = (lang, langChange) => {
    return lang === "فا" ? langChange("EN") : langChange("فا");
};

export const langText: ITheme<Lang, Lang> = (lang) => {
    return lang === "فا" ? "EN" : "فا";
};

export const handelToggleButton: IBox = (id, box, setBox) => {
    box.filter((item) => {
        return item.id === id ? setBox(item) : null;
    });
};

export const scrollItem: IScroll = (scroll = 0) => {
    return window.scrollTo({ top: scroll, behavior: "smooth" });
};

export const checkScrollTop: ICheckScroll = (showScroll, setShowScroll) => {
    if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
    }
};

export const handleToast = (state: string) => {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (state.length === 0) {
        return null;
    } else if (state.match(validRegex)) {
        return toast.success("ایمیل شما ثبت شد", { position: "top-right", autoClose: 1000, hideProgressBar: false, theme: "colored" });
    } else {
        return toast.warning("ایمیل وارد شده صحیح نیست", { position: "top-right", autoClose: 1000, hideProgressBar: false, theme: "colored" });
    }
};
