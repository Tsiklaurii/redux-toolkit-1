import axios, { type AxiosRequestConfig } from "axios";
import type { BaseQueryFn } from "@reduxjs/toolkit/query";

export const postsAxios = axios.create({
    baseURL: import.meta.env.VITE_POSTS_API_URL,
});

export const postsBaseQuery: BaseQueryFn<
    AxiosRequestConfig,
    unknown,
    { status: number | string; data: unknown }
> = async (config, { signal }) => {
    try {
        const response = await postsAxios({ ...config, signal });
        return { data: response.data };
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return {
                error: {
                    status: error.response?.status ?? "NETWORK_ERROR",
                    data: error.response?.data ?? error.message,
                },
            };
        }
        return { error: { status: "UNKNOWN_ERROR", data: "Could not load posts" } };
    }
};
