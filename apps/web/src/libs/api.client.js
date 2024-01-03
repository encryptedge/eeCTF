import axios from 'axios';

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
})

export default {
    get: apiClient.get,
    post: apiClient.post,
    put: apiClient.put,
}
