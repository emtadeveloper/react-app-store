import styled from "styled-components";

export const Container = styled.div`
    direction: rtl;

    span {
        display: inline-block;
        margin: 3rem 0;
        cursor: pointer;
        color: ${(props) => props.theme.main.secoundryColor};
        .iconBack {
            margin: 0 1rem;
        }
    }
`;
export const Divison = styled.div`
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-template-rows: 50vh;
    grid-gap: 2rem;
    @media screen and (max-width: 670px) {
        grid-template-columns: 1fr;
    }
    .user {
        display: flex;
        padding: 2rem;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        border-radius: 1.5rem;
        background-color: ${(props) => props.theme.main.secoundryColor};
        .icon {
            color: ${(props) => props.theme.main.primaryColor};
        }
        h2 {
            margin: 2rem 0;
            text-align: center;
            color: ${(props) => props.theme.main.primaryColor};
        }
    }
    .userBox {
        flex-grow: 1;
        display: grid;
        padding: 2rem;
        align-items: center;
        border-radius: 1.5rem;
        justify-content: center;
        background-color: ${(props) => props.theme.main.secoundryColor};
        h3 {
            color: ${(props) => props.theme.main.primaryColor};
            font-size: 2rem;
        }
    }
`;
