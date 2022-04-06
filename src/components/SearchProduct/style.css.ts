import styled from "styled-components";
import { box, position } from "../../styles/mixin";
import { flex_center } from "../../styles/share";

const Container = styled.div`
    ${flex_center};
    position: relative;
    border-radius: 10rem;
    margin-bottom: 6rem;
    ${box({ width: "60%" })}
    background-color: ${(props) => props.theme.text.thirdy};
    .icon {
        padding: 0 2rem;
        font-size: 2.8rem;
        color: ${(props) => props.theme.fix.black};
        ${position({ position: "absolute", left: "1rem" })};
        background-color: ${(props) => props.theme.text.thirdy};
        @media only screen and (max-width: 1050px) {
            font-size: 1.8rem;
        }
        @media only screen and (max-width: 670px) {
            font-size: 1.6rem;
        }
    }
    input {
        width: 80%;
        padding: 1.5rem;
        text-align: center;
        font-size: 1.6rem;
        background-color: transparent;
        @media only screen and (max-width: 750px) {
            font-size: 1.4rem;
        }
        @media only screen and (max-width: 481px) {
            font-size: 1.2rem;
        }
    }
    @media screen and (max-width: 750px) {
        ${box({ width: "100%" })}
    }
`;

export { Container };
