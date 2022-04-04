import useSetLangContext from "./useSetLangContext";

export const useLangAction = () => {
    const setLang = useSetLangContext();
    const changeLang = () => {
        const localLang = window.localStorage.getItem("lang");
        if (localLang === "EN") {
            setLang("فا");
            window.localStorage.setItem("lang", "فا");
        } else {
            setLang("EN");
            window.localStorage.setItem("lang", "EN");
        }
    };
    return { changeLang };
};
