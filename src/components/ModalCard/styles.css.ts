import styled from "styled-components";
import { position, grid } from "../../styles/mixin";

export const Container = styled.div`
    z-index: 3;
    direction: ltr;
    padding: 2rem;
    width: 50%;
    border-radius: 1.5rem;
    background-color: white;
    ${grid({ column: "50% 50%" })};
    transform: translate(-50%, -50%);
    box-shadow: 1rem 1rem 1rem rgba(0, 0, 0, 0.2);
    ${position({ position: "fixed", top: "50%", left: "50%" })};
    section {
        display: grid;
        align-items: flex-end;
        flex-direction: column;
        justify-content: flex-end;
        color: ${(props) => props.theme.fix.black};
        span {
            position: absolute;
            top: 1rem;
            right: 0.5rem;
            cursor: pointer;
            @media only screen and (max-width: 768px) {
                font-size: 1.4rem;
            }
            .icon {
                vertical-align: -5px;
                margin: 0 1rem;
            }
        }
        .title {
            text-align: center;
            padding: 1rem;
            color: ${(props) => props.theme.fix.black};
        }
        .addCard {
            display: flex;
            flex-direction: row;
            .price {
                margin: 0 2rem;
                font-family: ${(props) => (props.theme.lang === "EN" ? "IRANSans" : "Yekan")};
                align-self: center;
            }
            .btn {
                padding: 1rem 1.5rem;
            }
        }
    }
    figure {
        padding: 2rem;
        margin: 2rem;
    }

    @media only screen and (max-width: 780px) {
        width: 70%;
        grid-template-columns: 1fr;
        grid-template-row: 1fr 1fr;
    }
`;
