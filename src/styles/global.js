import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root{
        --background-principal: #F2F3F4;
        --text-grey: #42464D;
        --text-grey-mid: #565C69;
        --text-grey-weak: #7F858D;
        --filter-text: #3F3B3B;
        --orange: #ff650000;
        --orange-strong: #E35214;
        --orange-text: #FC6B0F;
        --orange-weak: #FF6500;
        --white: #FFFFFF;
        --white-weak: #F5F5F5;
        --blue: #0060b1;
        --green: #2DC26E;
        --green-text: #1F9050;
        --red: #E72626;
        --grey-trash-icon: #B6BBC2;
        --grey-line: #DEE0E4;
        --disabled: #404e6e;
        --blue1: #073db8;
        --blue2: #052c85;
    }

    *{
        margin:0;
        padding: 0;
        border: 0;
        list-style: none;
        box-sizing: border-box;
        text-decoration: none;
        outline: none;
        font-family: Poppins, sans-serif;
    }
    
    button:hover{
        cursor: pointer;
    }

`
