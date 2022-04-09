import styled from "styled-components";

export const Container = styled.li`
    color: white;
    text-align: ${(props) => (props.theme.lang === "EN" ? "left" : "right")};
    .icon {
        color: white;
        font-size: 3.8rem;
        vertical-align: -5px;
        margin: ${(props) => (props.theme.lang === "EN" ? "0.75rem 0 0" : "0 0 0 0.75rem")};
        @media only screen and (max-width: 1280px) {
            font-size: 2.8rem;
        }
        @media only screen and (max-width: 950px) {
            font-size: 2.4rem;
        }
        @media only screen and (max-width: 768px) {
            font-size: 1.8rem;
        }
    }
    p {
        margin: 0;
        color: white;
        font-size: 1.4rem;
        @media only screen and (max-width: 1280px) {
            font-size: 1.4rem;
        }
        @media only screen and (max-width: 950px) {
            font-size: 1.2rem;
        }
        @media only screen and (max-width: 768px) {
            font-size: 1rem;
        }
        @media only screen and (max-width: 375px) {
            font-size: 0.6rem;
        }
    }
`;
