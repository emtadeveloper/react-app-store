// icons

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

// package

import { toast } from "react-toastify";

// types

import { ITheme, IScroll, ICheckScroll, IFilter, IGetCategories, Res } from "./types";
import { ModeType } from "../types";
import { get } from "../services";

export const classTheme: ITheme<ModeType["theme"], string> = (theme) => {
    return theme === "light" ? "theme animationMoon" : " theme  animationSun";
};

export const iconTheme: ITheme<ModeType["theme"], IconProp> = (theme) => {
    return theme === "dark" ? (faSun as IconProp) : (faMoon as IconProp);
};

export const langText: ITheme<ModeType["lang"], ModeType["lang"]> = (lang) => {
    return lang === "فا" ? "EN" : "فا";
};

export const initLang: () => ModeType["lang"] = () => {
    if (!!localStorage.getItem("lang")) {
        return localStorage.getItem("lang") as ModeType["lang"];
    }
    localStorage.setItem("lang", "فا");
    return "فا";
};

export const initTheme: () => ModeType["theme"] = () => {
    if (!!localStorage.getItem("theme")) {
        return localStorage.getItem("theme") as ModeType["theme"];
    }
    localStorage.setItem("theme", "light");
    return "light";
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

export const getCategories: IGetCategories = (state, dispatch, namecategories) => {
    dispatch({ type: "post-product", recentData: state.recentData });
    namecategories === undefined
        ? get(`products`).then((res: any) => {
              dispatch({ type: "get-products-success", recentData: res.data });
          })
        : get(`products/category/${namecategories}`).then((res: any) => {
              dispatch({ type: "get-products-category", recentData: res.data, Filter: namecategories });
          });
};

export const Filter: IFilter = (state, dispatch, event) => {
    if (state.data !== undefined) {
        const newData = state.data.filter((item) => {
            return item.title.toUpperCase().includes(event.toUpperCase());
        });
        dispatch({ type: "search", recentData: newData });
    }
};

export const scrollItem: IScroll = (scroll = 0) => window.scrollTo({ top: scroll, behavior: "smooth" });
