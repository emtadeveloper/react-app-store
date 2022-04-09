// react

import { FC, useState } from "react";

// styles

import { Container } from "./style.css";

// icons

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

// types

import { ITabel } from "./types";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

// utils

const Tabel: FC<ITabel> = ({ label, desc }) => {
    //
    const [state, setState] = useState(false);
    return (
        <>
            <Container>
                <h6 onClick={() => setState(!state)}>{label}</h6>
                <FontAwesomeIcon icon={faAngleRight as IconProp} className={state ? "Icon rotate " : "Icon"} />
                <div onClick={() => setState(!state)} className={state ? "tab-content  visible " : "tab-content "}>
                    {desc}
                </div>
            </Container>
        </>
    );
};
export default Tabel;
