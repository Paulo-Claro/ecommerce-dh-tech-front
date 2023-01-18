import styled from "styled-components";

export const Container = styled.div`
    padding: 25px;
    width: 100%;
    background: var(--blue1);

    display: flex;
    justify-content: space-between;

    .content, a, span {
        display: flex;
        align-items: center;
    }

    .content {
        width: 18%;
        justify-content: space-between;
    }

    a, span {
        cursor: pointer;
        color: var(--white);
        svg {
            margin-right: 5px;
        }
    }

    a:hover { 
        opacity: 0.5;
    }

    span:hover { 
        opacity: 0.5;
    }
    .total-items {
        display: flex;
        align-items: center;
        justify-content: center;
        background: red;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        position: relative;
        bottom: 10px;
        right: 2px;
        opacity: 0.8;
        font-size: 12px;
    }
`;