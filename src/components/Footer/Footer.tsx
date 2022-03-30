// react

import { FC, useState } from "react";

// styles

import { Container, Division, News } from "./style.css";

// icons

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneSquare, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

// types

import { IFooter, Event } from "./types";

// package

import { ToastContainer } from "react-toastify";

// utils

import { handleToast } from "../../utils";
import ScrollBtn from "./ScrollBtn";

const Footer: FC<IFooter> = ({ news, number, email, description }) => {
    //
    const [state, setState] = useState<string>("");
    return (
        <>
            <Container>
                <FontAwesomeIcon className="icon" icon={faGraduationCap} size="6x" />
                <p>{description}</p>
                <h4>{news.title}</h4>
                <News>
                    <input type="submit" onClick={() => handleToast(state)} value={news.send} className="send" />
                    <input placeholder={news.email} className="email" type="email" onChange={(event: Event) => setState(event.target.value)} />
                </News>
                <Division>
                    <span>
                        {email}
                        <FontAwesomeIcon className="gap_icon" icon={faEnvelope} size="2x" />
                    </span>
                    <span>
                        {number}
                        <FontAwesomeIcon className="gap_icon" icon={faPhoneSquare} size="2x" />
                    </span>
                </Division>
            </Container>
            <ToastContainer />
            <ScrollBtn />
        </>
    );
};
export default Footer;
