export type ModeType = { theme: "dark" | "light"; lang: "EN" | "فا" };

export type SetModeType = { theme: (theme: "dark" | "light") => void; lang: (lang: "فا" | "EN") => void };
