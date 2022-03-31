// react

import { FC } from "react";

// types

import { IDashboard } from "./types";

// router

import { useNavigate } from "react-router-dom";

// styles

import { Container, Divison } from "./style.css";

// icons

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGraduate, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const Dashboard: FC<IDashboard> = ({ back, btn, empty, total }) => {
    //
    const Navigate = useNavigate();
    return (
        <Container>
            <span className="back" onClick={() => Navigate("/")}>
                <FontAwesomeIcon icon={faArrowRight as IconProp} className="iconBack" />
                {back}
            </span>
            <Divison>
                <aside className="user">
                    <FontAwesomeIcon icon={faUserGraduate as IconProp} size="10x" className="icon" />
                    <h2> عماد تقی پور</h2>
                </aside>
                <div className="userBox">
                    <section className="shop">
                        <h3> {empty}</h3>
                        <div className="footerBox"></div>
                    </section>
                </div>
            </Divison>
        </Container>
    );
};
export default Dashboard;
