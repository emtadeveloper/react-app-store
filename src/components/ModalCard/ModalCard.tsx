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
import { useDispatch } from "react-redux";
import { shopAddCard } from "../../redux/action";

// package

import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

const ModalCard: FC<IModalCard> = ({ setModal, back, addCard, ...item }) => {
    const dispatch = useDispatch();
    const AddCard = () => {
        toast.success(addCard, { position: "top-right", autoClose: 1000, hideProgressBar: false, theme: "colored" });
        dispatch(shopAddCard(item));
    };

    return (
        <>
            <Container>
                <figure>
                    <img src={item.image} alt={item.title} />
                </figure>
                <section>
                    <span className="back" onClick={() => setModal(false)}>
                        {back}
                        <FontAwesomeIcon icon={faArrowRight as IconProp} className="icon" />
                    </span>
                    <h3 className="title">{item.title}</h3>
                    <section className="addCard">
                        <h5 className="price">{item.price} </h5>
                        <button className="btn" onClick={AddCard}>
                            {addCard}
                        </button>
                    </section>
                </section>
            </Container>
            <ToastContainer />
        </>
    );
};
export default ModalCard;
