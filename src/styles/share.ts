import { css } from "styled-components";

export const flex_center = css`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const flex_items_center = css`
    display: flex;
    align-items: center;
`;

export const directionText = css`
    text-align: ${(props) => (props.theme.lang === "EN" ? "left" : "right")};
`;
