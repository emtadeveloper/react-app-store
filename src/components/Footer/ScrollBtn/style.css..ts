import styled, { css } from "styled-components";
import { box, position } from "../../../styles/mixin";
interface hiddenProps {
    readonly $hidden: boolean;
}

export const Button = styled.button<hiddenProps>`
    z-index: 9;
    transition: all.1s;
    border-radius: 1rem;
    ${box({ width: "4.5rem", height: "4.5rem" })};
    ${position({ position: "fixed", right: "2rem", bottom: "2rem" })};
    @media only screen and (max-width: 768px) {
        ${box({ width: "4rem", height: "4rem" })};
    }
    @media only screen and (max-width: 375px) {
        ${box({ width: "3rem", height: "3rem" })};
    }
    background-color: ${(props) => props.theme.fix.red};
    ${(props) =>
        props.$hidden
            ? css`
                  opacity: 0;
                  transform: scale(0);
              `
            : css`
                  opacity: 100;
                  transform: scale(1);
              `};
    &:hover {
        background-color: #dc686a;
    }
`;
