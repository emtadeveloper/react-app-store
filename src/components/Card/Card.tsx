// react

import { FC, useState } from "react";

// styles

import { Container, Division } from "./style.css";

// icons

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

// icons

import { ICard } from "./types";
import ModalCard from "../ModalCard";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const Card: FC<ICard> = ({ back, addCard, ...item }) => {
    //
    const [state, setState] = useState(false);
    const setModal = (visible: boolean) => setState(visible);
    const Item = { setModal, back, addCard, ...item };

    return (
        <>
            <Container>
                <div>
                    <figure>
                        <img src={item.image} alt={item.price.toString()} loading="lazy" />
                    </figure>
                    <Division>
                        <h5 className="price"> {item.price} </h5>
                        <FontAwesomeIcon icon={faShoppingCart as IconProp} className="icon" onClick={() => setModal(true)} />
                    </Division>
                    <div className="shadow">
                        <h6>{item.title}</h6>
                    </div>
                </div>
            </Container>
            {state && <ModalCard {...Item} />}
        </>
    );
};

export default Card;
