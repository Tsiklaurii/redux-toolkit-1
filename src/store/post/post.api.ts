import { createApi } from "@reduxjs/toolkit/query/react";
import { postsBaseQuery } from "../../api/posts.axios";
import type { IPost } from "../../interfaces/post.interface";

export const postApi = createApi({
    reducerPath: "PostAPI",
    baseQuery: postsBaseQuery,
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
