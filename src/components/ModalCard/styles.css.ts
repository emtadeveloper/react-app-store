import styled from "styled-components";
import { position, grid, marginPadding } from "../../styles/mixin";
import { flex_center } from "../../styles/share";

export const Container = styled.div`
    z-index: 3;
    width: 50%;
    direction: ltr;
    padding: 2rem;
    border-radius: 1.5rem;
    background-color: white;
    ${grid({ column: "50% 50%" })};
    transform: translate(-50%, -50%);
    box-shadow: 1rem 1rem 1rem rgba(0, 0, 0, 0.2);
    ${position({ position: "fixed", top: "50%", left: "50%" })};
    @media only screen and (max-width: 780px) {
        width: 70%;
        grid-template-columns: 1fr;
        grid-template-row: 1fr 1fr;
    }
    .img-wrapper {
        ${flex_center}
        min-height: 35vh;
        ${marginPadding({ margin: "2rem", padding: "2rem" })};
    }
    .wrapper-cart {
        ${grid({ align: "flex-end", gap: "2rem" })};
        color: ${(props) => props.theme.fix.black};
        .back {
            cursor: pointer;
            ${position({ position: "absolute", top: "2rem", right: "1rem" })};
            @media only screen and (max-width: 768px) {
                font-size: 1.4rem;
            }
            .icon {
                margin: 0 1rem;
                vertical-align: -5px;
            }
        }
        .title {
            text-align: center;
            color: ${(props) => props.theme.fix.black};
        }
    }
`;
export const AddCart = styled.div`
    .wrapper-price {
        display: flex;
        justify-content: space-between;
        .price {
            margin: 0 1rem;
            user-select: none;
            align-self: center;
            font-family: ${(props) => (props.theme.lang === "EN" ? "IRANSans" : "Yekan")};
        }
        .wrapper-number {
            margin: 0 1rem;
            ${flex_center}
            .number {
                padding: 1rem;
                user-select: none;
                font-size: 1.6rem;
            }
            .icon {
                font-size: 1.6rem;
                cursor: pointer;
                padding: 0.75rem;
                vertical-align: -10px;
                border-radius: 1.5rem;
                border: 2px solid rgba(0, 0, 0, 0.25);
                @media only screen and (max-width: 780px) {
                    border-radius: 1rem;
                    font-size: 0.8rem;
                }
            }
        }
    }
    .btn {
        width: 100%;
        user-select: none;
        transition: all 0.5s;
        ${marginPadding({ margin: "2rem 0 0 0", padding: "1rem 0 1rem 0" })};
        :hover {
            transform: scale(0.9);
        }
    }
`;
