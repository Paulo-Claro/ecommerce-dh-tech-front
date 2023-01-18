import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2rem;
    justify-content: space-evenly;

    img {
        height: 390px;
        width: 306px;
    }


    @media (min-width: 720px) {
        & {
            border: 1px solid red;
            flex-direction: row;
        }
    }
`;


export const Content = styled.div`
    width: 100%;
    height: 13rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .content-name {
        display: flex;
        width: 85%;
        justify-content: space-between;
    }

    .description {
        font-size: 12px;
        width: 85%;
        color: grey;
    }

    .content-evaluation {
        width: 85%;
        display: flex;
        justify-content: space-between;
    }

    .stars {
        display: flex;
        align-items: center;
        justify-content: center;
        
        .total-evaluation {
            color: gray;
            font-size: 12px;
            margin-left: 5px;
        }
    }
    
    button {
        width: 85%;
        height: 48px;
        border-radius: 10px;
    }

    @media (min-width: 720px) { 
        & {
            border: 1px solid;
            width: 40%;
        }

        .content-name {
            border: 1px solid red;
        }

        .content-evaluation {}
    }
`


export const Loader = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: grey;

`