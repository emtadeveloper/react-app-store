// react

import { FC } from "react";

// syles

import { Button } from "./style.css";

// types

import { IAnboard } from "./types";

const BtnAnboard: FC<IAnboard> = ({ btn, scrollItem }) => {
    return <Button onClick={() => scrollItem(1400)}>{btn}</Button>;
};
export default BtnAnboard;
