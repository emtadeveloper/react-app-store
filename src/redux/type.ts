import { response } from "../types";

export interface stateShop {
    entities: response[];
}
export type Action = response | number | boolean;
