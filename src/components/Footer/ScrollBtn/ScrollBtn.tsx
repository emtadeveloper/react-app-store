//React

import { useState, FC } from "react";

// Styles

import { Button } from "./style.css.";

// Icons

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

// utils

import { checkScrollTop, scrollItem } from "../../../utils";

type isScroll = boolean;

const ScrollBtn: FC = () => {
    //
    const [showScroll, setShowScroll] = useState<isScroll>(false);

    window.addEventListener("scroll", () => checkScrollTop(showScroll, setShowScroll));

    return (
        <Button $hidden={!showScroll} className="hidden" onClick={() => scrollItem()}>
            <FontAwesomeIcon icon={faAngleUp} size="1x" className="icon" />
        </Button>
    );
};
export default ScrollBtn;
