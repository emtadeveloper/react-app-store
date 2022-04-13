import produce from "immer";
import { EShop } from "../types/enum";
import { ActionType, response, IProduct, IState } from "../types";
import { Action } from "./type";

const initState: IState["shopReducer"] = { entities: {} };

export const shopReducer = produce((state: IState["shopReducer"], action: ActionType<Action>) => {
    switch (action.type) {
        case EShop.shopAddCard:
            const value = action.payload as response;
            const newEntities: IProduct = {};
            newEntities[value.id] = value;
            state.entities = { ...state.entities, ...newEntities };
            break;
        case EShop.shopRemoveCard:
            const id = action.payload as number;
            delete state.entities[id];
            break;
    }
}, initState);
