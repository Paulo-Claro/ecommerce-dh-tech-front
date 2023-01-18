import styled from "styled-components";

export const Container = styled.div`
    width: 608px;
    border: 1px solid #FFFFFF;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 12px 0;
    padding: 0 10px;
    img {
        width: 80px;
        height: 82px;
        border-radius: 8px;
    }

    .content {
        align-items: flex-start;
        padding-left: 18px;
        flex: 1;
        .name {
            font-weight: 500;
            font-size: 18px;
            line-height: 27px;
        }
    
        .description {
            font-size: 14px;
            line-height: 19px;
            font-weight: 500;
        }
    }

    .quantity, .price, .trash {
        padding: 10px;
        
    }
    .quantity {
        display: flex;
        flex-direction: column;
        align-items: center;

        svg{
            color: var(--blue1);
            cursor: pointer;
        }
    }

    .price {
        //border: 1px solid;
    }

    .trash {
        //border: 1px solid;
        cursor: pointer;
    }
    
`