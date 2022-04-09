import { get } from "../services";
import { ActionCreator } from "redux";
import { ActionOnlyType, ActionType } from "../types";
import { EProduct, EShop } from "../types/enum";
import { response } from "../types";

export const productLoadingStarted: ActionCreator<ActionOnlyType> = () => ({
    type: EProduct.productLoadingStarted,
});

export const productLoadedSuccess: ActionCreator<ActionType<{ entities: response[] }>> = (entities) => ({
    type: EProduct.productLoadedSuccess,
    payload: entities,
});

export const productFilterCategories: ActionCreator<ActionType<{ categories: string; entities: response[] }>> = (categories, entities) => ({
    type: EProduct.productFilterCategories,
    payload: { categories, entities },
});

export const productSearch: ActionCreator<ActionType<{ value: string; entities: response[] }>> = (value, entities) => ({
    type: EProduct.productSearch,
    payload: { value, entities },
});

export const productLoadedFailes: ActionCreator<ActionOnlyType> = () => ({
    type: EProduct.productLoadedFailes,
});

export const fetchproduct: any = (dispatch: Function) => {
    dispatch(productLoadingStarted());
    get("products")
        .then((res: any) => {
            dispatch(productLoadedSuccess(res.data));
        })
        .catch(() => dispatch(productLoadedFailes()));
};

export const shopAddCard: ActionCreator<ActionType<response>> = (item) => ({
    type: EShop.shopAddCard,
    payload: item,
});

export const shopRemoveCard: ActionCreator<ActionType<number>> = (id) => ({
    type: EShop.shopRemoveCard,
    payload: id,
});
