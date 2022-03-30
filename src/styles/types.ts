export interface IBox {
    height?: string;
    width?: string;
    minHeight?: string;
    minWidth?: string;
}

export interface IAbsolute {
    position: string;
    top?: string;
    right?: string;
    left?: string;
    bottom?: string;
}

export interface IMarginPadding {
    margin?: string;
    padding?: string;
}

export interface IGrid {
    gap?: string;
    column?: string;
    row?: string;
    align?: string;
    justify?: string;
}

export interface IGlobal {
    lang: "EN" | "فا";
    main: { primaryColor: string; secoundryColor: string; box: string };
    text: { primary: string; secoundry: string; thirdy: string };
    fix: { green: string; red: string; white: string; black: string };
}
