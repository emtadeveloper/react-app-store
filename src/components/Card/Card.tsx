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

const Card: FC<ICard> = ({ image, price, title, back, addCard }) => {
    //
    const [state, setState] = useState(false);
    const setModal = (visible: boolean) => setState(visible);
    const Item = { setModal, image, price, title, back, addCard };

    return (
        <>
            <Container>
                <div>
                    <figure>
                        <img src={image} alt={price.toString()} loading="lazy" />
                    </figure>
                    <Division>
                        <h5 className="price"> {price} </h5>
                        <FontAwesomeIcon icon={faShoppingCart as IconProp} className="icon" onClick={() => setModal(true)} />
                    </Division>
                    <div className="shadow">
                        <h6>{title}</h6>
                    </div>
                </div>
            </Container>
            {state && <ModalCard {...Item} />}
        </>
    );
};

export default Card;
