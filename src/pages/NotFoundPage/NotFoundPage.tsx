// react

import { FC } from "react";

// router

import { useNavigate } from "react-router-dom";

// styles

import { Container } from "./style.css";

// types

import { INotfound } from "./types";

const NotFoundPage: FC<INotfound> = ({ NotFound, btn }) => {
    //
    const Navigate = useNavigate();

    return (
        <Container>
            <main>
                <h1>404</h1>
                {NotFound}
                <button onClick={() => Navigate("/")}>{btn}</button>
            </main>
        </Container>
    );
};
export default NotFoundPage;
