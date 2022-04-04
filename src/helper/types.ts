export interface ITheme<U, T> {
    (arg: U): T;
}

export interface IHandle<U, T> {
    (arg1: U, arg2: Function): T;
}

export interface IScroll {
    (scroll?: number): void;
}

export interface ICheckScroll {
    (showScroll: boolean, setShowScroll: Function): void;
}
