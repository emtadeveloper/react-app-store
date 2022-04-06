import styled from "styled-components";
import { flex_center } from "../../styles/share";
import { marginPadding, position, box } from "../../styles/mixin";

export const Container = styled.div`
    width: 25%;
    ${flex_center};
    div {
        ${flex_center};
        cursor: pointer;
        position: relative;
        border-radius: 1.5rem;
        background-color: white;
        ${box({ width: "90%", height: "90%" })}
        box-shadow: 1rem 1rem 1rem rgba(0, 0, 0, 0.1);
        &:hover .shadow {
            ${flex_center};
        }
        &:hover .price {
            color: #fff;
        }
        .shadow {
            display: none;
            position: absolute;
            background-color: rgba(0, 0, 0, 0.7);
            ${box({ width: "100%", height: "100%" })};
            h6 {
                width: 90%;
                color: white;
                text-align: center;
            }
        }
        figure {
            width: 70%;
            ${marginPadding({ padding: "2rem 0  8rem 0", margin: "2rem" })};
        }
    }

    @media only screen and (max-width: 768px) {
        width: 50%;
    }
`;

export const Division = styled.section`
    z-index: 1;
    direction: ltr;
    width: 100%;
    ${flex_center};
    justify-content: space-between;
    ${position({ position: "absolute", bottom: "0", right: "0" })};
    .icon {
        color: white;
        padding: 7%;
        font-size: 2rem;
        border-radius: 1.5rem 0 1.5rem 0;
        background-color: ${(props) => props.theme.fix.green};
        :hover {
            background-color: #209151;
        }
        @media only screen and (max-width: 481px) {
            font-size: 1.2rem;
        }
    }
    .price {
        margin: 0 2rem;
        color: ${(props) => props.theme.fix.black};
        font-family: ${(props) => (props.theme.lang === "EN" ? "IRANSans" : "Yekan")};
        @media only screen and (max-width: 768px) {
            font-size: 1.6rem;
        }
    }
`;
