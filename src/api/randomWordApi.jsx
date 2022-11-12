import axios from "axios";

export const randomWordApi = axios.create({
    baseURL: 'https://random-word-api.herokuapp.com/word'
});