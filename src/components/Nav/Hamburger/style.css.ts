import styled from "styled-components";
import { box } from "../../../styles/mixin";
export const Check = styled.input`
    display: none;
    position: absolute;
    @media only screen and (max-width: 671px) {
        &:checked ~ ul {
            display: block;
        }
        &:checked ~ label > .top {
            transform: translateY(9px) rotate(45deg);
        }
        &:checked ~ label > .bottom {
            transform: translateY(-7px) rotate(-45deg);
            @media only screen and (max-width: 320px) {
                transform: translateY(-6px) rotate(-45deg);
            }
        }
        &:checked ~ label > .middle {
            opacity: 0;
        }
    }
`;

export const Hambur = styled.label`
    @media only screen and (max-width: 671px) {
        cursor: pointer;
        > span {
            position: relative;
            display: block;
            transition: all 0.5s;
            border-radius: 20px;
            margin: 0.5rem 2rem;
            ${box({ width: "4vh", height: ".36vh" })};
            background-color: ${(props) => props.theme.main.secoundryColor};
        }
    }
    @media only screen and (max-width: 320px) {
        > span {
            width: 5vh;
        }
    }
`;
