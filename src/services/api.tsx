import axios from "axios";

export const apigit = axios.create({
    baseURL: "https://api.github.com",

});

export const apimks = axios.create({
    baseURL: "https://mks-frontend-challenge-api.herokuapp.com/api",

});

