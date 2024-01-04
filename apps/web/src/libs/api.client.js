import ip from "deployer-url"
import axios from 'axios';

let url;

if (import.meta.env.MODE == "client") {
    url = ip;
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
