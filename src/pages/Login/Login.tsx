// react

import { FC } from "react";

// router

import { useNavigate } from "react-router-dom";

// styles

import { Container } from "./style.css";

// icons

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

// types

import { ILogin } from "./types";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

// http

import { post } from "../../services";

const Login: FC<ILogin> = ({ back, btn, login }) => {
    //
    const Navigate = useNavigate();

    const Login = (e: any) => {
        e.preventDefault();
        fetch("https://fakestoreapi.com/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: "mor_2314",
                password: "83r5^_",
            }),
        })
            .then((res) => res.json())
            .then((json) => console.log(json));
    };

    return (
        <Container>
            <form>
                <span className="back" onClick={() => Navigate("/")}>
                    <FontAwesomeIcon icon={faArrowRight as IconProp} className="icon" />
                    {back}
                </span>
                <FontAwesomeIcon className="gap_icon" icon={faGraduationCap as IconProp} size="6x" />
                <h2>{login}</h2>
                <input placeholder="ایمیل شما" defaultValue="mor_2314" />
                <input placeholder="رمز عبور شما" defaultValue="83r5^_" />
                <button className="btn" onClick={(e) => Login(e)}>
                    {btn}
                </button>
            </form>
        </Container>
    );
};
export default Login;
