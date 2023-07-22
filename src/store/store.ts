import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/api";
import { postsSlice } from "./posts/posts.slice";
import { activePageSlice } from "./page/page.slice";

export const store = configureStore({
  reducer: {
    posts: postsSlice.reducer,
    activePage: activePageSlice.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
