import styled from "styled-components";
import { flex_center } from "../../styles/share";

export const Container = styled.div`
    ${flex_center};
    position: relative;
    margin: 0 0 5rem 0;
    flex-direction: column;
`;

export const Division = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: flex-end;
    .isLoading {
        width: 100%;
        margin-top: 5rem;
        text-align: center;
        color: ${(props) => props.theme.text.primary};
    }
`;
