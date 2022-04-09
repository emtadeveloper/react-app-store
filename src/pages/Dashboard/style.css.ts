import styled from "styled-components";
import { flex_center } from "../../styles/share";
import { position, grid, box } from "../../styles/mixin";

export const Container = styled.div`
    width: 80%;
    direction: rtl;
    height: auto;
    margin-bottom: 5rem;
    transform: translate(-50%, -50%);
    ${position({ position: "absolute", top: "50%", left: "50%" })};
    span {
        display: inline-block;
        margin: 3rem 0;
        cursor: pointer;
        color: ${(props) => props.theme.main.secoundryColor};
        .iconBack {
            margin: 0 1rem;
        }
    }
`;

export const Division = styled.div`
    ${grid({ gap: "2rem", row: "50vh", column: "1fr 4fr" })}
    @media screen and (max-width: 1050px) {
        grid-template-columns: 1fr 2fr;
    }
    @media screen and (max-width: 670px) {
        grid-template-columns: 1fr;
    }
    .user {
        border-radius: 1.5rem;
        background-color: ${(props) => props.theme.main.box};
        .parent-icon {
            ${flex_center}
            height: 85%;
        }
        .icon {
            opacity: 80%;
            padding: 2.5rem;
            border-radius: 50%;
            color: ${(props) => props.theme.main.secoundryColor};
            border: 0.5rem solid ${(props) => props.theme.main.secoundryColor};
        }
        .logout {
            padding: 1rem 0;
            border-radius: 0 0 1.5rem 1.5rem;
            ${box({ height: "15%", width: "100%" })}
        }
    }
    .userBox {
        position: relative;
        border-radius: 1.5rem;
        background-color: white;
        .emptyCard {
            height: 50vh;
            border-radius: 1.5rem;
            ${flex_center}
            h3 {
                font-size: 1.8rem;
                padding: 1rem 0;
                text-align: center;
                border-radius: 1.5rem;
                color: ${(props) => props.theme.fix.black};
            }
        }
        .shop {
            border-radius: 1.5rem;
            background-color: white;
        }
    }
`;
