import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .search {
        border-radius: 10px;        
        width: 300px;
        display: flex;
        border: 2px solid var(--grey-line);

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