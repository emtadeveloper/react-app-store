import useSetThemeContext from "./useSetThemeContext";

export const useThemeAction = () => {
    const seTheme = useSetThemeContext();
    const changeTheme = () => {
        const localLang = window.localStorage.getItem("theme");
        if (localLang === "dark") {
            seTheme("light");
            window.localStorage.setItem("theme", "light");
        } else {
            seTheme("dark");
            window.localStorage.setItem("theme", "dark");
        }
    };
    return { changeTheme };
};
