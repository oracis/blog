import axios from "axios";

const instance = axios.create({
    timeout: 60000
});

instance.interceptors.request.use((config) => {
    const { method } = config;
    if (method === "post") {
        const { token } = window.localStorage;
        token && (config.headers.token = token);
    }
    return config;
});

instance.interceptors.response.use((response) => {
    return response?.data;
});

export default instance;