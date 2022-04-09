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
import { useSelector } from "react-redux";
import Card from "./Card";

const Dashboard: FC<IDash> = ({ back, empty, total, logout }) => {
    //
    const Navigate = useNavigate();

    const Logout = () => {
        localStorage.removeItem("token");
        Navigate("/");
    };

    const state: any = useSelector((state) => state);
    const card = state.shopReducer.entities;

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
                        {card.length === 0 ? (
                            <div className="emptyCard">
                                <h3> {empty} </h3>
                            </div>
                        ) : (
                            card.map((item: any) => {
                                return <Card {...item} />;
                            })
                        )}
                        <div className="footerBox"></div>
                    </section>
                </div>
            </Division>
        </Container>
    );
};
export default Dashboard;
