import styled from "styled-components";

export const Container = styled.div`
    width: 1000px;
    height: 122px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    box-shadow: 15px 6px 15px -7px rgba(0,0,0,0.21);
    background: #f5f5f5;
    margin: 20px 0;

    p {
        font-weight: 700;
        text-align: #42464D;
    }

    .title, .content {
        display: flex;

        p {
            width: 300px;
            text-align: center;
        }
    }

    .status, .total {
        color: #2DC26E;
    }

    .id, .payment {
        font-weight: 400;
    }

`;