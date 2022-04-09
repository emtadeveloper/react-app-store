import styled from "styled-components";
import { grid } from "../../styles/mixin";

interface directionProps {
    readonly $direction: boolean;
}

export const Container = styled.div<directionProps>`
    border-radius: 1.5rem;
    margin: 4% auto 10% auto;
    direction: ${(props) => (props.$direction ? "ltr" : "rtl")};
    background-color: ${(props) => props.theme.main.box};
    div {
        padding: 4rem;
        align-items: center;
        ${grid({ gap: "5rem", column: "1fr 1fr" })}
        @media only screen and (max-width: 670px) {
            ${grid({ gap: "4rem", column: "auto", row: "auto auto" })}
        }
    }
    figcaption {
        display: grid;
        @media only screen and (max-width: 670px) {
            p,
            h2 {
                text-align: center;
            }
        }
    }
`;
