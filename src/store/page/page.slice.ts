import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = 1;

export const activePageSlice = createSlice({
  name: "activePage",
  initialState,
  reducers: {
    setActivePage: (state, action: PayloadAction<number>) => action.payload,
  },
});

export const { setActivePage } = activePageSlice.actions;
