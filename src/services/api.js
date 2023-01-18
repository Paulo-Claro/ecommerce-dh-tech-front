import axios from "axios";

export const api = axios.create({
    baseURL: 'https://ecomerce-back-end-dh.herokuapp.com',
})