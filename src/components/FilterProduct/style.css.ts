import styled from "styled-components";
import { flex_center } from "../../styles/share";
import { marginPadding } from "../../styles/mixin";

export const Container = styled.div`
    ${flex_center}
    flex-wrap: wrap;
    margin-bottom: 5rem;
`;

interface isActiveprops {
    isActive: boolean;
}

export const Button = styled.button<isActiveprops>`
    border-radius: 0.5rem;
    min-width: 12rem;
    border: 2px solid ${(props) => props.theme.fix.green};
    ${marginPadding({ margin: "1rem", padding: "  1rem" })};
    color: ${(props) => (props.isActive ? "#ffff" : props.theme.text.primary)};
    background-color: ${(props) => (props.isActive ? props.theme.fix.green : props.theme.main.primaryColor)};
    &:hover {
        transition: all 0.5s;
        color: #ffff;
        background-color: ${(props) => props.theme.fix.green};
    }
`;
