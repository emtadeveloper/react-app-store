import styled, { css } from "styled-components";
import { flex_items_center } from "../../styles/share";
import { marginPadding, position } from "../../styles/mixin";

export const Container = styled.nav`
    z-index: 3;
    ${flex_items_center};
    justify-content: flex-end;
    border-radius: 1.5rem;
    ${position({ position: "sticky", top: "5rem" })}
    background-color: ${(props) => props.theme.main.box};
    ${marginPadding({ margin: " 2rem auto 0 auto", padding: "1rem" })};
    .gap_icon {
        width: 10rem;
        font-size: 6rem;
        color: ${(props) => props.theme.main.secoundryColor};
    }
    @media only screen and (max-width: 671px) {
        justify-content: space-between;
        .gap_icon {
            width: 5rem;
            font-size: 3rem;
        }
    }
`;

export const Button = styled.button`
    position: absolute;
    padding: 0.7rem 4em;
    margin: ${(props) => (props.theme.lang === "EN" ? "0 2rem 0 0" : "0 0 0 2rem")};
    ${(props) =>
        props.theme.lang === "EN"
            ? css`
                  right: 0;
              `
            : css`
                  left: 0;
              `}
    @media screen and (max-width: 1280px) {
        padding: 0.7rem 3em;
    }
    @media only screen and (max-width: 671px) {
        width: 100%;
        bottom: -6rem;
        ${marginPadding({ margin: " 0 auto", padding: "1.4rem" })};
    }
    @media only screen and (max-width: 375px) {
        bottom: -5.5rem;
    }
`;
