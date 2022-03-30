// styles

import { css } from "styled-components";

export const flex_center = css`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const flex_coulmn_center = css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const flex_center_between = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const flex_center_end = css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const flex_center_start = css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const directionText = css`
    text-align: ${(props) => (props.theme.lang === "EN" ? "left" : "right")};
`;
