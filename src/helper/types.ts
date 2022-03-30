export type Theme = "dark" | "light";

export type Lang = "EN" | "فا";

export interface ITheme<U, T> {
    (arg: U): T;
}

export interface IHandle<U, T> {
    (arg1: U, arg2: Function): T;
}

export interface IBox {
    (id: number, box: Array<{ id: number; title: string; description: string }>, setBox: Function): Object | void;
}

export interface IScroll {
    (scroll?: number): void;
}

export interface ICheckScroll {
    (showScroll: boolean, setShowScroll: Function): void;
}

export type Data = Array<{ image: string; price: number; title: string; description: string; id: number }>;
