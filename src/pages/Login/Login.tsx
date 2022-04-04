// react

import { FC, useState } from "react";

// router

import { useNavigate } from "react-router-dom";

// styles

import { Container } from "./style.css";

// icons

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

// types

import { ILogin } from "./../../types";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

// http

import { CircleSpinner } from "react-spinners-kit";
import { useAuthAction } from "../../hooks/useAuthAction";
import { ToastContainer, toast } from "react-toastify";

const Login: FC<ILogin> = ({ back, btn, login, toastMessage }) => {
    //
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const { SetToken } = useAuthAction();

    const Login = (e: React.SyntheticEvent) => {
        e.preventDefault();
        setLoading(true);
        fetch("https://fakestoreapi.com/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: "mor_2314",
                password: "83r5^_",
            }),
        })
            .then((res) => res.json())
            .then((res) => {
                setLoading(false);
                SetToken(res.token);
                navigate("/dashboard", { replace: true });
            })
            .catch(() => {
                setLoading(false);
                return toast.error(toastMessage, { position: "top-right", autoClose: 1000, hideProgressBar: false, theme: "colored" });
            });
    };

    return (
        <Container>
            <form>
                <span className="back" onClick={() => navigate("/")}>
                    <FontAwesomeIcon icon={faArrowRight as IconProp} className="icon" />
                    {back}
                </span>
                <FontAwesomeIcon className="gap_icon" icon={faGraduationCap as IconProp} size="6x" />
                <h2>{login}</h2>
                <input defaultValue="mor_2314" />
                <input defaultValue="83r5^_" />
                <button className="btn" onClick={Login}>
                    {loading ? <CircleSpinner size={15} color="white" /> : btn}
                </button>
            </form>
            <ToastContainer />
        </Container>
    );
};
export default Login;
