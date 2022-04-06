//react

import { FC } from "react";

// styles

import { About } from "./style.css";

type TitleProp = {
    title: string;
};

const Title: FC<TitleProp> = ({ title }) => {
    return (
        <About>
            <span></span>
            <h5> {title}</h5>
            <span></span>
        </About>
    );
};
export default Title;
