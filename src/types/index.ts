import { IconProp } from "@fortawesome/fontawesome-svg-core";

export type ModeType = { theme: "dark" | "light"; lang: "EN" | "فا" };

export type AuthType = { Token: String | null };

export interface IHome {
    header: { btnPayment: string; btnCart: string };
    navBar: { btnDash: string; btnLogin: string; home: string; product: string; aboutMe: string; finish: string };
    desc: Array<{ id: number; direction: boolean; image: string; title: string; description: string; btn?: string }>;
    boxes: { box: Array<{ id: number; title: string; description: string }>; box_image: Array<{ id: number; image: string; alt: string }>; activeBoxes: number };
    product: { error: string; sorrySearch: string; isLoading: string; search: string; filterProduct: { all: string; womens: string; mens: string; electronics: string; jewelery: string }; modal: { back: string; addCard: string } };
    footer: { news: { title: string; description: string; send: string; email: string }; description: string; number: string; email: string; copy: string; map: string };
    question: { fag: Array<{ title: string; description: string; icon: IconProp }>; tabs: Array<{ title: string; description: string }> };
    title_product: string;
    title_question: string;
    title_aboutUs: string;
}

export interface ILogin {
    toastMessage: string;
    back: string;
    btn: string;
    login: string;
}

export interface IDash {
    back: string;
    empty: string;
    total: string;
    logout: string;
}

export interface INotFound {
    NotFound: string;
    btn: string;
}

export interface response {
    image: string;
    category: string;
    price: number;
    title: string;
    description: string;
    id: number;
    number: number;
    rating: { count: number; rate: number };
}

export interface IProduct {
    [id: number]: response;
}

export type stateType = {
    status: string;
    filter: string;
    entities: IProduct;
    showEntities: IProduct;
};

export type ActionOnlyType = { type: string };

export type ActionType<T> = { type: string; payload: T };

export type IState = {
    productReducer: { status: string; filter: string; entities: IProduct; showEntities: IProduct };
    shopReducer: { entities: IProduct };
};
