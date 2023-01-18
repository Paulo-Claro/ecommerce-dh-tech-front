import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    .content-cart{
        padding-top: 60px;
        display: flex;
        justify-content: space-around;

    }
`;

export const ContentProducts = styled.div`
`;


export const LoadingPage = styled.div`
    width: 50%;
    height: 50%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: center;
    position: absolute;
    color: grey;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    a {
        background: var(--blue1);
        color: var(--white);
        border-radius: 5px;
        text-align: center;
        padding: 10px 15px;
        cursor: pointer;
    }
`;