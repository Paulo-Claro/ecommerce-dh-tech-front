import styled from "styled-components";

export const Container = styled.div`
    span {
        color: rgb(231, 38, 38);
        margin-top: 0.5rem;
        font-size: 0.75rem;
        padding-left: 10px;


        svg {
            font-size: 1rem;
            margin-right: 3px;
            position: relative;
            top: 3px;
        }

    }
`;


export const Content = styled.div`
    border: 1px solid ${({ errors }) => errors ? "red" : "var(--blue1)"};
    transition: 0.5s ease-in;
    width: 300px;
    border-radius:10px ;
    padding: 2px;
    display: flex;
    align-items: center;
    padding-left: 5px;

    svg {
        font-size: 1.2rem;
        color: ${({ errors }) => errors ? "red" : "var(--blue1)"};

    }
    input {
        width: 100%;
        height: 100%;
        padding: 10px;
        background: transparent;
    }

    input::placeholder{
        color: ${({ errors }) => errors ? "red" : "grey"};
        transition: 0.5s ease-in;

    }
    input:focus{
        background: transparent;
    }

`