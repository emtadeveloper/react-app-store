export type ModeType = {
    theme: "dark" | "light";
    lang: "EN" | "فا";
};

export interface IUseThemeModeTypes {
    state: ModeType;
    themeChange: () => void;
    langChange: () => void;
}
