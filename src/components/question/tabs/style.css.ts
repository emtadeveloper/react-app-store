import styled, { css } from "styled-components";
import { grid } from "../../../styles/mixin";
export const Container = styled.section`
    color: white;
    cursor: pointer;
    ${grid({ align: "center", justify: "space-between", column: "98% 2%" })}
    .Icon {
        font-size: 1.8rem;
        ${(props) =>
            props.theme.lang === "EN"
                ? css`
                      transform: rotate(180deg);
                  `
                : css`
                      transform: rotate(0deg);
                  `};
        @media only screen and (max-width: 1200px) {
            font-size: 1.4rem;
        }
    }
    .tab-content {
        display: none;
        padding: 1rem;
        background-color: white;
        color: ${(props) => props.theme.fix.green};
        margin-bottom: 0.5rem;
        font-size: 1.6rem;
        margin-bottom: 0.5rem;
        @media only screen and (max-width: 768px) {
            font-size: 1.2rem;
        }
        @media only screen and (max-width: 481px) {
            font-size: 1rem;
        }
    }
    .visible {
        display: block;
    }
    .rotate {
        transition: all 0.5s;
        transform: rotate(90deg);
    }
`;
