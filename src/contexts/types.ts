export type Theme = "dark" | "light";

export type Lang = "فا" | "EN";

export interface IContext {
    theme: Theme;
    lang: Lang;
    themeChange: (color: string) => void;
    langChange: (lang: string) => void;
}
