import produce from "immer";
import { EShop } from "../types/enum";
import { ActionType, response } from "../types";
import { stateShop, Action } from "./type";

const initState: stateShop = { entities: [] };

export const shopReducer = produce((state: stateShop, action: ActionType<Action>) => {
    switch (action.type) {
        case EShop.shopAddCard:
            const value = action.payload as response;
            state.entities = [...state.entities, value];
            break;
        case EShop.shopRemoveCard:
            const id = action.payload as number;
            state.entities = state.entities.filter((item: response) => {
                return item.id !== id;
            });
            break;
    }
}, initState);
