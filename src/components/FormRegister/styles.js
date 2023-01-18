import styled from "styled-components";

export const Container = styled.form`
    height: 75%;
    border: 1px solid var(--blue1);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 340px;
    border-radius: 10px;

    button {
        width: 300px;
        border-radius: 10px;
        height: 45px;
        font-size: 1rem;
        font-weight: bold;
        background: var(--blue1);
        color: var(--white);
        display: flex;
        align-items: center;
        justify-content: center;

    }

    a {
        color: var(--blue1);
    }
`;