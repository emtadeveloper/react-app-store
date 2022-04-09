import styled from "styled-components";
import { grid } from "../../styles/mixin";
import { flex_center } from "../../styles/share";

export const Container = styled.div`
    border-radius: 1.5rem;
    margin: 4% auto 10% auto;
    background-color: ${(props) => props.theme.main.box};
    div {
        padding: 4rem;
        align-items: center;
        justify-content: space-evenly;
        ${grid({ gap: "4rem", column: "1fr  1fr" })};
        @media only screen and (max-width: 670px) {
            ${grid({ column: "1fr" })}
        }
        figure {
            ${flex_center};
            flex-wrap: wrap;
            img {
                margin: 1rem;
                cursor: pointer;
                width: clamp(8rem, 40%, 20rem);
                &:hover {
                    outline: 0.5rem solid ${(props) => props.theme.fix.green};
                }
            }
        }
        section {
            @media only screen and (max-width: 670px) {
                p,
                h2 {
                    text-align: center;
                }
            }
        }
    }
`;
