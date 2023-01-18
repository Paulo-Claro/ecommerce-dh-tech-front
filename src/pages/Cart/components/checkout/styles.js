import styled from "styled-components";

export const Container = styled.div`
    width: 388px;
    height: 670px;
    left: 708px;
    top: 50px;
    border: 1px solid #FFFFFF;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    gap: 15px;
    padding-top: 20px;
    background: var(--blue1);
    color: var(--white);

    .confirm {
        display: flex;
        flex-direction: column;
        align-items: center;

        .confirming {
            display: flex;
            justify-content: center;
            align-items: center;

            p {
                color: white;
                margin-right: 2px;
                padding-bottom: 5px;
            }
        }
    }

    .card-type {
        display: flex;
        gap: 20px;
        img {
            border: 1px solid transparent;
            cursor: pointer;
        }

        img:hover {
            border: 1px solid yellow;
            border-radius: 5px;
        }
    }

    button {
        width: 350px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 24px;

        background: transparent;
        font-weight: bold;
        border: 1px solid #FFFF;
        border-radius: 12px;
        color: white;

        span {
            display: flex;
            align-items: center;
        }

        svg{
            margin-left:10px;
            font-size: 25px;
        }

        &:hover{
            background: #ffffff6b;
            transition: 0.6s;
        }
    }

    .total {
        width: 100%;
    }
`;


export const Box = styled.div`
    height: 57px;
    width: 77px;
    border-radius: 5px;
    border: 1px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #072f8bb5;
    cursor: pointer;

    svg {
        font-size: 1.5rem;
    }
    &:hover {
        border: 2px solid yellow;
    }
`

export const Info = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 20px;
    margin: 5px 0;
`;
