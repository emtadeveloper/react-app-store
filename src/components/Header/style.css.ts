import styled, { css, keyframes } from "styled-components";
import { flex_center_between } from "../../theme/share";

// animation

const rotateSun = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const rotateMoon = keyframes`
  0% {
    transform: rotate(15deg);
  }

  50% {
    transform: rotate(-15deg);
  }

  100%{
    transform: rotate(15deg);
  }
`;

// styles

export const Container = styled.header`
    margin: 0 2rem;
    position: relative;
    ${flex_center_between}
`;

export const Divison = styled.div`
    .icon {
        cursor: pointer;
        position: relative;
        font-size: 2.75em;
        color: ${(props) => props.theme.main.secoundryColor};
        margin: ${(props) => (props.theme.lang === "EN" ? "0 0 0 2rem" : "0 2rem 0 0")};
        @media only screen and (max-width: 768px) {
            font-size: 2rem;
        }
    }
    .theme {
        cursor: pointer;
        font-size: 3rem;
        user-select: none;
        color: ${(props) => props.theme.main.secoundryColor};
        @media only screen and (max-width: 768px) {
            font-size: 2rem;
        }
    }
    .lang {
        display: inline-block;
        vertical-align: 0.225rem;
        margin: ${(props) => (props.theme.lang === "EN" ? "0 2rem 0 0" : "0 0 0 2rem")};
    }
    .animationSun {
        &:hover {
            animation: ${rotateSun} 1s linear infinite;
        }
    }
    .animationMoon {
        &:hover {
            animation: ${rotateMoon} 1s linear infinite;
        }
    }
`;

interface BageProps {
    bage: number;
}

export const Bage = styled.span<BageProps>`
    ${(props) =>
        props.theme.lang === "EN"
            ? css`
                  right: -1rem;
              `
            : css`
                  left: 1rem;
              `}
    position: absolute;
    cursor: pointer;
    user-select: none;
    font-size: 1.2rem;
    border-radius: 1.3rem;
    padding: 0.25rem 0.75rem;
    color: ${(props) => props.theme.fix.white};
    background-color: ${(props) => props.theme.fix.red};
    display: ${(props) => (props.bage > 0 ? "inline-block" : "none")};
    @media only screen and (max-width: 768px) {
        font-size: 1rem;
    }
`;
