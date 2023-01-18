import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;

    h2 {
        margin-bottom: 3rem;
    }
    
    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }

    @media (min-width:  720px) {
        & {
            display: flex;
        }

        .content {
            background: white;
            width: 50%;
        }
        
        
    }
`


export const Background = styled.div`
    display: none;

    @media (min-width:  720px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        background: var(--blue1);
    }
    
`;