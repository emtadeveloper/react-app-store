export interface IProduct {
    search: string;
    filterProduct: { all: string; womens: string; mens: string; electronics: string; jewelery: string };
    modal: { back: string; addCard: string };
    isLoading: string;
    sorrySearch: string;
}

export interface Data {
    data: Array<{ image: string; price: number; title: string; description: string; id: number }>;
}

export interface IAction {
    type?: string;
    Filter?: string;
    data?: Array<{ image: string; price: number; title: string; description: string; id: number }>;
    recentData: Array<{ image: string; price: number; title: string; description: string; id: number }>;
    isLoading?: boolean;
}

export interface IUserAction {
    (arg1: IAction, arg2: IAction): IAction;
}
