// react

import { FC } from "react";

// types

import { IModalCard } from "./types";

// styles

import { Container } from "./styles.css";

// icons

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const ModalCard: FC<IModalCard> = ({ setModal, image, price, title, back, addCard }) => {
    return (
        <Container>
            <figure>
                <img src={image} alt={title} />
            </figure>
            <section>
                <span className="back" onClick={() => setModal(false)}>
                    {back}
                    <FontAwesomeIcon icon={faArrowRight as IconProp} className="icon" />
                </span>
                <h3 className="title">{title}</h3>
                <section className="addCard">
                    <h5 className="price">{price} </h5>
                    <button className="btn"> {addCard} </button>
                </section>
            </section>
        </Container>
    );
};
export default ModalCard;
