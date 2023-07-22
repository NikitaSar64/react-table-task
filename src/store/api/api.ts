import { IPost } from "@interfaces/post.interface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LIMIT, BASE_URL } from "@constants/constants";
import { setPostData } from "@store/posts/posts.slice";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (page: number) => `/posts?_page=${page}&_limit=${LIMIT}`,
      transformResponse(posts: IPost[], meta) {
        return {
          posts,
          pageCount:
            Number(meta?.response?.headers.get("X-Total-Count")) / LIMIT,
        };
      },
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setPostData(data.posts));
        } catch (error) {
          console.error("posts api error", error);
        }
      },
    }),
  }),
});

export const { useGetPostsQuery } = api;
