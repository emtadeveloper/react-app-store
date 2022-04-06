import styled from "styled-components";
import { box } from "../../styles/mixin";
import { flex_center } from "../../styles/share";

export const About = styled.div`
    width: 100%;
    margin: 7vw 0;
    color: ${(props) => props.theme.main.secoundryColor};
    ${flex_center};
    > h5 {
        margin: 4rem 2rem;
    }
    > span {
        display: block;
        background-color: ${(props) => props.theme.fix.green};
        ${box({ width: "10vw", height: "0.5rem" })}
    }
`;
