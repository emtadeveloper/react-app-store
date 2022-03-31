// react

import { FC } from "react";

// styles

import { List } from "./style.css";

// helper

import { scrollItem } from "../../../helper";

// types

import { IItem } from "./types";

const Item: FC<IItem> = ({ home, product, aboutMe, finish }) => {
    //

    return (
        <List className="List">
            <li onClick={() => scrollItem(10000)}>{finish}</li>
            <li onClick={() => scrollItem(4000)}>{aboutMe}</li>
            <li onClick={() => scrollItem(2000)}>{product}</li>
            <li onClick={() => scrollItem(0)}>{home}</li>
            <span></span>
        </List>
    );
};

export default Item;
