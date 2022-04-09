import styled from "styled-components";
//
export const Button = styled.button`
    position: relative;
    padding: 0.6rem 2rem;
    justify-self: ${(props) => (props.theme.lang === "EN" ? "flex-start" : "flex-end")};
    :hover {
        transition: all 0.5s;
        background-color: #209151;
    }
    @media only screen and (max-width: 670px) {
        justify-self: center;
    }
`;
