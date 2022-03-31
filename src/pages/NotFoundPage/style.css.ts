import styled from "styled-components";
import { position } from "../../styles/mixin";
import { flex_coulmn_center } from "../../styles/share";

export const Container = styled.div`
    transform: translate(-50%, -50%);
    ${position({ position: "absolute", top: "50%", left: "50%" })}
    main {
        font-size: 6rem;
        ${flex_coulmn_center};
        color: ${(props) => props.theme.main.secoundryColor};
        @media only screen and (max-width: 1050px) {
            font-size: 4rem;
        }
        @media only screen and (max-width: 670px) {
            font-size: 2rem;
        }
        button {
            margin-top: 4rem;
            padding: 1rem 2rem;
        }
    }
`;
