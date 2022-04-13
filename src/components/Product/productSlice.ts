import produce from "immer";
import { IProduct, response, stateType, ActionType, IState } from "../../types";
import { EStatus, EProduct } from "../../types/enum";
import { Action } from "./types";

const initState: IState["productReducer"] = { status: "idle", filter: "all", entities: {}, showEntities: {} };

export const productReducer = produce((state: stateType, action: ActionType<Action>) => {
    switch (action.type) {
        case EProduct.productLoadingStarted:
            state.status = EStatus.LOADING;
            break;
        case EProduct.productLoadedFailes:
            state.status = EStatus.ERROR;
            break;
        case EProduct.productLoadedSuccess:
            const product = action.payload as response[];
            const newEntities: IProduct = {};
            product.forEach((item: response) => {
                newEntities[item.id] = { ...item, number: 1 };
            });
            state.entities = newEntities;
            state.showEntities = newEntities;
            state.status = EStatus.IDLE;
            break;
        case EProduct.productFilterCategories:
            const { categories, entities: entitiesFilter } = action.payload as { categories: string; entities: response[] };
            const newFilterEntities: IProduct = {};
            Object.values(entitiesFilter)
                .filter((item: response) => {
                    return categories === "all" ? item : item.category === categories;
                })
                .forEach((item: response) => {
                    newFilterEntities[item.id] = item;
                });
            state.showEntities = newFilterEntities;

            state.filter = categories;
            break;
        case EProduct.productSearch:
            const { value, entities: entitiesSarch } = action.payload as { value: string; entities: response[] };
            const searchEntities: IProduct = {};
            Object.values(entitiesSarch)
                .filter((item: response) => {
                    return item.title.toUpperCase().includes(value.toUpperCase());
                })
                .forEach((item: response) => {
                    searchEntities[item.id] = item;
                });
            state.showEntities = searchEntities;
            break;
    }
}, initState);
