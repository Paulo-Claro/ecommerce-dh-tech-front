import styled from "styled-components";

export const ContentInput = styled.div`
    display: flex;
    flex-direction: column;

    input {
        width: 350px;
        height: 40px;
        border: 1px solid #FFFFFF;
        border-radius: 6px;
        padding-left: 18px;
        color: #584c4c;
        font-weight: 700;
        &::placeholder{
            color: gray;
        }
        }
`;

export const ContentInputDate = styled.div`
    display: flex;
    align-items: center;
    div {
        display: flex;
        flex-direction: column;
    }

    div:nth-child(1){
        margin-right: 8px;
    }

    input {
        width: 171px;
        height: 40px;
        border: 1px solid #FFFFFF;
        border-radius: 6px;
        padding-left: 18px;
        color: #584c4c;
        font-weight: 700;
        &::placeholder{
            color: gray;
        }
    }
`;


export const Info = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 20px;
`;