export interface ITheme<U, T> {
    (arg: U): T;
}

export interface IScroll {
    (scroll?: number): void;
}

export interface ICheckScroll {
    (showScroll: boolean, setShowScroll: Function): void;
}

export type Data = Array<{ image: string; price: number; title: string; description: string; id: number }>;

export type Res = {
    data: Array<{ image: string; price: number; title: string; description: string; id: number }>;
};

export interface IGetCategories {
    (state: { recentData: Data }, dispatch: Function, namecategories?: string): void;
}

export interface IBox {
    (id: number, box: Array<{ id: number; title: string; description: string }>, setBox: Function): Object | void;
}

export interface IFilter {
    (state: { data?: Data }, dispatch: Function, event: string): void;
}
