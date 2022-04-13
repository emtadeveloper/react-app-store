import styled, { css } from "styled-components";
import { position, box } from "../../../styles/mixin";

export const Container = styled.div`
    display: flex;
    padding: 2rem;
    justify-content: space-between;
    .square {
        z-index: -1;
        border-radius: 0.2rem;
        transform: rotate(45deg);
        ${box({ height: "2.5rem", width: "2.5rem" })};
        ${position({ position: "absolute", top: "-.25rem" })};
        ${(props) =>
            props.theme.lang === "EN"
                ? css`
                      right: 2rem;
                  `
                : css`
                      left: 1rem;
                  `}
        background-color: ${(props) => props.theme.fix.white};
    }
    .title {
        line-height: 100%;
        height: 2rem;
        font-size: 1.2rem;
        line-height: 2rem;
        overflow: hidden;
        padding: 0 1rem;
        width: 70%;
        text-overflow: ellipsis;
        text-align: center;
    }
    .price,
    .number {
        width: 10%;
        padding: 0 1rem;
        font-size: 1.2rem;
    }
    .icon {
        color: red;
        width: 10%;
        cursor: pointer;
        opacity: 70%;
    }
    img {
        width: 2rem;
        height: 2rem;
    }
`;
