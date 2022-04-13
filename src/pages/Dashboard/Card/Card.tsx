import { FC } from "react";
import { Container } from "./style.css";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { shopRemoveCard } from "../../../redux/action";
import { faClose } from "@fortawesome/free-solid-svg-icons";

export interface ICard {
    image: string;
    title: string;
    id: number;
    number: number;
}
const Card: FC<ICard> = ({ image, title, id, number }) => {
    const dispatch = useDispatch();

    return (
        <Container>
            <img src={image} alt={title} />
            <h6>{title}</h6>
            <h6 className="number"> {number}</h6>
            <FontAwesomeIcon
                onClick={() => {
                    dispatch(shopRemoveCard(id));
                }}
                icon={faClose as IconProp}
                size="2x"
                className="icon"
            />
        </Container>
    );
};
export default Card;
