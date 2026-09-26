import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import type { IPost } from "../../interfaces/post.interface";

export const postApi = createApi({
    reducerPath: "PostAPI",
    baseQuery: fetchBaseQuery({ baseUrl: "https://gorest.co.in/public/v2/" }),
    tagTypes: ["Post"],
    endpoints: (build) => ({
        fetchPosts: build.query<IPost[], { page: number; per_page: number }>({
            query: ({ page, per_page }) => ({
                url: "posts",
                params: {
                    page,
                    per_page,
                },
            }),
        }),
        fetchPost: build.query<IPost, number>({
            query: (id: number) => ({
                url: `posts/${id}`,
            }),
        }),
    }),
});

export const { useFetchPostsQuery, useFetchPostQuery, usePrefetch } = postApi;
