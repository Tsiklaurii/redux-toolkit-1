import axios from "axios";

export const usersAxios = axios.create({
    baseURL: import.meta.env.VITE_USERS_API_URL,
});
