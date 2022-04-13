import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { shopRemoveCard } from "../../../redux/action";
import { Container } from "./style.css";
import { IBageCard } from "./type";
const BageCard: FC<IBageCard> = ({ image, title, id, price, number }) => {
    const dispatch = useDispatch();

    return (
        <>
            <Container>
                <span className="square"></span>
                <img src={image} alt={title} />
                <h6 className="title">{title}</h6>
                <h6 className="number">{number}</h6>
                <span className="price">{price}</span>
                <FontAwesomeIcon
                    onClick={() => {
                        dispatch(shopRemoveCard(id));
                    }}
                    icon={faClose as IconProp}
                    size="2x"
                    className="icon"
                />
            </Container>
        </>
    );
};
export default BageCard;
