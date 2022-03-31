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

const Login: FC<ILogin> = ({ back, btn, login }) => {
    //
    const Navigate = useNavigate();

    return (
        <Container>
            <form>
                <span className="back" onClick={() => Navigate("/")}>
                    <FontAwesomeIcon icon={faArrowRight as IconProp} className="icon" />
                    {back}
                </span>
                <FontAwesomeIcon className="gap_icon" icon={faGraduationCap as IconProp} size="6x" />
                <h2>{login}</h2>
                <input placeholder="ایمیل شما" />
                <input placeholder="رمز عبور شما" />
                <input value={btn} type="submit" className="btn" onClick={() => Navigate("/Dashboard")} />
            </form>
        </Container>
    );
};
export default Login;
