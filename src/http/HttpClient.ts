import axios, { AxiosHeaders } from "axios";

const HttpClient = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': "*"
    }
})


export default HttpClient;