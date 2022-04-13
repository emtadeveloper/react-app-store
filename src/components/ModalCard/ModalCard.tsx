// react

import { FC, useState } from "react";

// types

import { IModalCard } from "./types";

// styles

import { Container, AddCart } from "./styles.css";

// icons

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useDispatch } from "react-redux";
import { shopAddCard } from "../../redux/action";

// package

import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

const ModalCard: FC<IModalCard> = ({ setModal, back, addCard, ...item }) => {
    const [state, setState] = useState(item.number);
    const dispatch = useDispatch();
    const AddCard = () => {
        toast.success(addCard, { position: "top-right", autoClose: 1000, hideProgressBar: false, theme: "colored" });
        dispatch(shopAddCard({ ...item, number: state }));
    };
    const increment = () => setState((s) => s + 1);
    const decrement = () => (state === 1 ? "" : setState((s) => s - 1));

    return (
        <>
            <Container>
                <figure className="img-wrapper">
                    <img src={item.image} alt={item.title} />
                </figure>
                <section className="wrapper-cart">
                    <span className="back" onClick={() => setModal(false)}>
                        {back}
                        <FontAwesomeIcon icon={faArrowRight as IconProp} className="icon" />
                    </span>
                    <h3 className="title">{item.title}</h3>
                    <AddCart>
                        <section className="wrapper-price">
                            <h5 className="price">{Math.floor(state * item.price)} </h5>
                            <div className="wrapper-number">
                                <FontAwesomeIcon icon={faPlus as IconProp} className="icon" onClick={increment} />
                                <span className="number">{state}</span>
                                <FontAwesomeIcon icon={faMinus as IconProp} className="icon" onClick={decrement} />
                            </div>
                        </section>
                        <button className="btn" onClick={AddCard}>
                            {addCard}
                        </button>
                    </AddCart>
                </section>
            </Container>
            <ToastContainer />
        </>
    );
};
export default ModalCard;
