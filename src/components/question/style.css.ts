import styled from "styled-components";
import { grid } from "../../styles/mixin";
export const Container = styled.div`
    padding: 4rem;
    border-radius: 1.5rem;
    background-color: ${(props) => props.theme.main.box};
`;
export const Division = styled.div`
    ${grid({ gap: "2rem", column: " 1fr 1fr" })};
    @media only screen and (max-width: 670px) {
        grid-template-columns: 1fr;
    }
    .tabs {
        padding: 2rem;
        border-radius: 1.5rem;
        ${grid({ gap: "2rem", align: "center" })};
        background-color: ${(props) => props.theme.fix.green};
    }
    .faq {
        padding: 2rem;
        border-radius: 1.5rem;
        ${grid({ gap: "2rem", align: "center" })};
        background-color: ${(props) => props.theme.fix.green};
    }
    .tabs label input:checked ~ .faq {
        background-color: red;
    }
`;
