// react

import { FC } from "react";

// types

import { IDash } from "./../../types";

// router

import { useNavigate } from "react-router-dom";

// styles

import { Container, Division } from "./style.css";

// icons

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGraduate, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const Dashboard: FC<IDash> = ({ back, empty, total, logout }) => {
    //
    const Navigate = useNavigate();

    const Logout = () => {
        localStorage.removeItem("token");
        Navigate("/");
    };
    return (
        <Container>
            <span className="back" onClick={() => Navigate("/")}>
                <FontAwesomeIcon icon={faArrowRight as IconProp} className="iconBack" />
                {back}
            </span>
            <Division>
                <aside className="user">
                    <div className="parent-icon">
                        <FontAwesomeIcon icon={faUserGraduate as IconProp} size="8x" className="icon" />
                    </div>
                    <button className="logout" onClick={Logout}>
                        {logout}
                    </button>
                </aside>
                <div className="userBox">
                    <section className="shop">
                        <h3> {empty} </h3>
                        <div className="footerBox"></div>
                    </section>
                </div>
            </Division>
        </Container>
    );
};
export default Dashboard;
