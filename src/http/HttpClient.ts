import axios from "axios";

const HttpClient = axios.create({
    baseURL: process.env.BASE_URL
})


export default HttpClient;