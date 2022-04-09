// react

import { FC, useState } from "react";

//styles

import { Container } from "./style.css";

// helper

import { handelToggleButton } from "../../helper";

// types

import { IBoxs, IModeBox } from "./types";

const Box: FC<IBoxs> = ({ box, box_image }) => {
    //
    const [Box, setBox] = useState<IModeBox>(box[0]);

    const Image = box_image.map((item) => {
        return <img key={item.id} onClick={() => handelToggleButton(item.id, box, setBox)} src={item.image} alt={item.alt} loading="lazy" />;
    });

    return (
        <Container>
            <div>
                <figure>{Image}</figure>
                <figcaption>
                    <h2>{Box.title}</h2>
                    <p>{Box.description}</p>
                </figcaption>
            </div>
        </Container>
    );
};
export default Box;
