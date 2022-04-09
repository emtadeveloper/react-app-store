// react

import { FC } from "react";

// styles

import { Division, Container } from "./style.css";

// components

import ListItem from "./Faq";
import Tabel from "./Tabs/Tabs";

// types

import { IQuestion } from "./types";

const Question: FC<IQuestion> = ({ fag, tabs }) => {
    return (
        <>
            <Container>
                <Division>
                    <section className="tabs">
                        {tabs.map((item) => {
                            return <Tabel key={item.title} label={item.title} desc={item.description} />;
                        })}
                    </section>
                    <ul className="faq">
                        {fag.map((item) => {
                            return <ListItem key={item.title} name={item.title} desc={item.description} icon={item.icon} />;
                        })}
                    </ul>
                </Division>
            </Container>
        </>
    );
};
export default Question;
