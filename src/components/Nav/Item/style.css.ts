import styled from "styled-components";
import { position, box } from "../../../styles/mixin";
import { flex_center_start } from "../../../styles/share";

export const List = styled.ul`
    ${flex_center_start};
    li {
        cursor: pointer;
        margin: 0 2rem;
        color: ${(props) => props.theme.main.secoundryColor};
        &:hover {
            color: ${(props) => props.theme.fix.green};
        }
    }

    @media only screen and (max-width: 671px) {
        display: none;
        width: 100%;
        border-radius: 1.5rem;
        background-color: white;
        ${position({ position: "absolute", top: "250%", right: "0" })};
        box-shadow: 0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.3);
        span {
            z-index: -1;
            border-radius: 0.2rem;
            transform: rotate(45deg);
            ${box({ height: "2.5rem", width: "2.5rem" })};
            ${position({ position: "absolute", top: "-.5rem", right: "2.5rem" })};
            background-color: ${(props) => props.theme.fix.white};
        }
        li {
            margin: 0;
            padding: 1rem 0;
            text-align: center;
            color: ${(props) => props.theme.fix.black};
            &:hover {
                color: white;
                background-color: ${(props) => props.theme.fix.green};
            }
            &:first-child:hover {
                border-radius: 1.5rem 1.5rem 0 0;
            }
            &:first-child:hover ~ span {
                background-color: ${(props) => props.theme.fix.green};
            }
            &:last-of-type:hover {
                border-radius: 0 0 1.5rem 1.5rem;
            }
            &:first-child:hover ~ span {
                background-color: ${(props) => props.theme.fix.green};
            }
        }
    }
    @media only screen and (max-width: 375px) {
        top: 230%;
    }
`;
