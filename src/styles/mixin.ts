// styles

import { css } from "styled-components";

// types

import { IAbsolute, IBox, IMarginPadding, IGrid } from "./types";

export const box = ({ height, width, minHeight, minWidth }: IBox) => css`
    height: ${height};
    width: ${width};
    min-height: ${minHeight};
    min-width: ${minWidth};
`;

export const position = ({ position, top, right, left, bottom }: IAbsolute) => css`
    position: ${position};
    top: ${top};
    right: ${right};
    left: ${left};
    bottom: ${bottom};
`;

export const marginPadding = ({ margin, padding }: IMarginPadding) => css`
    margin: ${margin};
    padding: ${padding};
`;

export const grid = ({ gap, column, row, align, justify }: IGrid) => css`
    display: grid;
    grid-gap: ${gap};
    grid-template-columns: ${column};
    grid-template-rows: ${row};
    align-items: ${align};
    justify-content: ${justify};
`;
