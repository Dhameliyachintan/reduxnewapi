import axios from 'axios'
import { BASE_URL } from "../../Share/baseurl";


const axiosinstance = axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
});

const sendRequest = (config) => {
    return axiosinstance.request(config)
}


export const getRequest = (path) => {
    return sendRequest({
        url: path,
        method: 'GET',
    })
}