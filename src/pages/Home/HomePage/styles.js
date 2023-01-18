import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .search {
        //border: 1px solid gray;
        //border-top: 1px solid gray;
        border-radius: 10px;        
        width: 300px;
        display: flex;

        margin: 2rem 0;

        input, button {
            padding: 10px;
        }

        input {
            width: 100%;
            background: transparent;
        }

        button {
            font-weight: bold;
            font-size: 1erm;
            border-radius: 0 10px 10px 0;
            background: var(--blue1);
            color: var(--white);

        }
    }

    main {
        display: flex;
        align-items: center;
        align-content: flex-start;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }

    @media (min-width: 720px) {
        main {
            width: 90%;
            justify-content: center;
            gap: 25px;
        }
    }
`;


export const ProductNotFound = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--blue1);
    font-size: 8rem;
    width: 500px;
    height: 500px;

    .content{
        display: flex;
        width:100%;
        align-items: center;
        justify-content: space-evenly;


    }

    h3{
        font-size: 20px;
        font-weight: 400;
    }
`