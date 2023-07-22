import { IPost } from "@interfaces/post.interface";
import { ISort } from "@interfaces/sort.interface";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { sortData } from "@helpers/sort";

const initialState: IPost[] = [];

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPostData: (state, action: PayloadAction<IPost[]>) => action.payload,
    setFilterPostData: (state, action: PayloadAction<ISort>) =>
      sortData(state, action.payload),
  },
});

export const { setPostData, setFilterPostData } = postsSlice.actions;
