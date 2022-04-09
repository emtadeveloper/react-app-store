// react

import { FC } from "react";

// styles

import { Container } from "./style.css";

// icons

import { IDescription } from "./types";

const Description: FC<IDescription> = ({ image, title, description, direction, children }) => {
    return (
        <Container $direction={direction}>
            <div>
                <figure>
                    <img src={image} alt={image} loading="lazy" />
                </figure>
                <figcaption>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    {children}
                </figcaption>
            </div>
        </Container>
    );
};
export default Description;
