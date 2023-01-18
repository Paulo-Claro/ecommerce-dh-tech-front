import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    bottom: -20%;
  }
  100% {
    bottom: 0%;
  }
`


export const Container = styled.div`
    cursor: pointer;
    width: 180px;
    height: 270px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 4px;
    box-shadow: 6px 7px 38px -15px rgb(0 0 0 / 44%), 11px 12px 15px -10px rgb(0 0 0 / 9%);
    padding-top: 10px;
    margin-bottom: 1rem;
    position: relative;
    overflow: hidden;

    &:hover .hover-add-from-cart {
            bottom: 0%;
            animation: 1s ${fadeIn} ease;
    }

    .content-price {
        width: 90%;
        display: flex;
        justify-content: space-between;
        color: var(--blue1);
        margin: 5px 0 11px 0px;
        .stars {
            padding-top: 2px;
            color: var(--blue1);
        }

    }

    img{
        height: 6rem;
        width: 6.5rem
    }

    span {
        font-size: 0.75rem;
    }

    .price {
        font-weight: bold;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    .name, .description, span {
        font-size: 0.75rem;
        margin: 5px 0;
    }

    .description {
        color: grey;
        width: 90%;
        text-align: center;
    }

    .name {
        font-weight: bold;
    }

    
`;

export const HoverAddFromCart = styled.button`
    width: 100%;
    height: 50px;
    background-color: var(--blue1);
    color: var(--white);
    text-align: center;
    position: absolute;
    bottom: -20%;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
        font-size: 12px;
        padding-top: 5px;
        margin-right: 5px;
    }
    svg{
        font-size: 1.45rem;

    }

    &:hover{
        background: #375db3;
        transition: 0.5s;
    }
`;