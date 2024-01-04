import customhost from "deployer-url"
import axios from 'axios';

export let url;

if (import.meta.env.VITE_CL_MODE == "client") {
    url = customhost;
} else {
    url = import.meta.env.VITE_API_URL;
}

const apiClient = axios.create({
    baseURL: url,
})

export default {
    get: apiClient.get,
    post: apiClient.post,
    put: apiClient.put,
}
