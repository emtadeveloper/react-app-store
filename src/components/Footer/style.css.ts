import styled from "styled-components";
import { flex_center, directionText } from "../../styles/share";
import { grid } from "../../styles/mixin";

export const Container = styled.footer`
    ${flex_center};
    flex-direction: column;
    background-color: ${(props) => props.theme.main.box};
    padding: 4rem 0;
    border-radius: 1.5rem;
    margin-top: 2rem;
    p {
        width: 90%;
        text-align: center;
        text-align-last: center;
        color: ${(props) => props.theme.text.primary};
    }
    h4 {
        width: 86%;
        text-align: center;
        color: ${(props) => props.theme.text.primary};
        padding: 2rem 0;
    }
    .icon {
        color: ${(props) => props.theme.fix.green};
    }
`;

export const Division = styled.div`
    margin: 4rem;
    ${grid({ gap: "4rem", column: "auto auto" })};
    span {
        ${grid({ align: "center", column: "auto auto", justify: "flex-end" })};
        color: ${(props) => props.theme.text.primary};
    }
    .gap_icon {
        margin: ${(props) => (props.theme.lang === "EN" ? "0 2rem 0 0" : "0 0 0 2rem")};
        color: ${(props) => props.theme.fix.green};
    }

    @media only screen and (max-width: 670px) {
        grid-template-columns: auto;
        .concat {
            span {
                justify-content: center;
            }
        }
    }
`;

export const News = styled.div`
    width: 50%;
    overflow: hidden;
    border-radius: 1.5rem;
    background-color: #ffff;
    ${grid({ column: "1fr 4fr" })};
    .email {
        width: 90%;
        ${directionText};
        font-size: 1.4rem;
        padding: 1.25rem;
        @media screen and (max-width: 950px) {
            font-size: 1.2rem;
        }
        @media only screen and (max-width: 768px) {
            padding: 1rem;
            font-size: 1.2rem;
        }
        @media only screen and (max-width: 375px) {
            padding: 1rem;
            font-size: 1rem;
        }
    }
    .send {
        color: white;
        cursor: pointer;
        padding: 1rem 2rem;
        background-color: ${(props) => props.theme.fix.green};
        &:hover {
            transition: all 0.5s;
            background-color: #209151;
        }
        font-size: 2rem;
        @media screen and (max-width: 950px) {
            font-size: 1.2rem;
        }
        @media only screen and (max-width: 768px) {
            font-size: 1.4rem;
        }
        @media only screen and (max-width: 375px) {
            font-size: 1.2rem;
        }
    }
    @media only screen and (max-width: 768px) {
        width: 80%;
    }
    @media only screen and (max-width: 375px) {
        width: 90%;
    }
`;
