import styled from "styled-components";
import { position, box } from "../../styles/mixin";
import { flex_center, flex_center_between } from "../../styles/share";

export const Container = styled.div`
    direction: rtl;
    ${flex_center};
    transform: translate(-50%, -50%);
    ${box({ width: "100%", height: "100%" })}
    ${position({ position: "absolute", top: "50%", left: "50%" })};
    form {
        padding: 1.5rem;
        border-radius: 1.5rem;
        flex-direction: column;
        ${flex_center_between};
        background-color: white;
        border: 1px solid rgba(0, 0, 0, 0.2);
        box-shadow: 1rem 1rem 1rem rgba(0, 0, 0, 0.2);
        .back {
            align-self: flex-start;
        }
        .icon {
            color: ${(props) => props.theme.fix.black};
        }
        .gap_icon {
            margin: 2rem;
            color: ${(props) => props.theme.fix.blue};
        }
        h2 {
            text-align: center;
            margin-bottom: 2rem;
        }
        span {
            cursor: pointer;
            @media only screen and (max-width: 768px) {
                font-size: 1.4rem;
            }
            .icon {
                vertical-align: -5px;
                margin: 0 1rem;
            }
        }
        input {
            width: 100%;
            padding: 1rem 0;
            text-align: center;
            font-size: 1.4rem;
            border-radius: 1.5rem;
            margin: 1rem 4rem;
            background-color: #f7f2f9;
        }
        .btn {
            color: white;
            width: 100%;
            padding: 1rem 0;
            font-size: 1.4rem;
            margin-top: 4rem;
            background-color: ${(props) => props.theme.fix.green};
            &:hover {
                transition: all 0.5s;
                background-color: #209151;
            }
        }
    }
`;
