// react

import { FC } from "react";

// styles

import { Container } from "./style.css";

// icons

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// types

import { IFaq } from "./types";

const Faq: FC<IFaq> = ({ name, desc, icon }) => {
    //
    return (
        <Container>
            <h6 className="title">
                {name} <FontAwesomeIcon icon={icon} className="icon" />
            </h6>
            <p>{desc}</p>
        </Container>
    );
};
export default Faq;
