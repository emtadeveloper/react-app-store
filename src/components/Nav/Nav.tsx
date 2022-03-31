// react

import { FC } from "react";

// router

import { useNavigate } from "react-router-dom";

// styles

import { Container, Button } from "./style.css";

// component

import NavItem from "./Item";
import Hamburger from "./Hamburger";

// icons

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

// types

import { INav } from "./types";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const Nav: FC<INav> = ({ btn, ...props }) => {
    //
    const Navigate = useNavigate();

    return (
        <>
            <Container>
                <Hamburger />
                <Button onClick={() => Navigate("/Login")}>{btn}</Button>
                <NavItem {...props} />
                <FontAwesomeIcon className="gap_icon" icon={faGraduationCap as IconProp} />
            </Container>
        </>
    );
};
export default Nav;
