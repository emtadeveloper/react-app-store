import { response } from "../../types/index";

export interface IProduct {
    search: string;
    error: string;
    filterProduct: { all: string; womens: string; mens: string; electronics: string; jewelery: string };
    modal: { back: string; addCard: string };
    isLoading: string;
    sorrySearch: string;
}

export type Action = response[] | number | { categories: string; entities: response[] } | response | { value: string; entities: response[] };
