import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    padding: 2rem;
    align-items: center;
    justify-content: space-between;
    h6 {
        color: ${(props) => props.theme.main.secoundryColor};
        line-height: 100%;
        height: 2rem;
        line-height: 2rem;
        overflow: hidden;
        padding: 0 2rem;
        text-overflow: ellipsis;
        text-align: center;
    }
    .icon {
        color: red;
        cursor: pointer;
        opacity: 50%;
    }
    img {
        width: 5rem;
        height: 5rem;
    }
`;
