import axios from "axios";

const HttpClient = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL
})


export default HttpClient;