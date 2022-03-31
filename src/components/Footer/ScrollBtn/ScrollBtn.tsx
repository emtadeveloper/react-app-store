//React

import { useState, FC } from "react";

// Styles

import { Button } from "./style.css.";

// Icons

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

// utils

import { checkScrollTop, scrollItem } from "../../../helper";

type isScroll = boolean;

const ScrollBtn: FC = () => {
    //
    const [showScroll, setShowScroll] = useState<isScroll>(false);

    window.addEventListener("scroll", () => checkScrollTop(showScroll, setShowScroll));

    return (
        <Button $hidden={!showScroll} className="hidden" onClick={() => scrollItem()}>
            <FontAwesomeIcon icon={faAngleUp as IconProp} size="1x" className="icon" />
        </Button>
    );
};
export default ScrollBtn;
