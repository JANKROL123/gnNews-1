import { createSlice } from "@reduxjs/toolkit";
export const articlesSlice = createSlice({
  name: "articles",
  initialState: {
    myArticles: [],
  },
  reducers: {
    addArticles: (state, action) => {
      state.myArticles = [...state.myArticles, ...action.payload];
    },
  },
});
export const { addArticles } = articlesSlice.actions;
export default articlesSlice.reducer;
