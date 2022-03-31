// react

import { FC } from "react";

// styles

import { Check, Hambur } from "./style.css";
//
const Hamburger: FC = () => {
    return (
        <>
            <Check type="checkbox" id="check" />
            <Hambur htmlFor="check">
                <span className="top"></span>
                <span className="middle"></span>
                <span className="bottom"></span>
            </Hambur>
        </>
    );
};
export default Hamburger;
