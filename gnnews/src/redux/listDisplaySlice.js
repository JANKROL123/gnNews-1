import { createSlice } from "@reduxjs/toolkit";
export const listDisplaySlice = createSlice({
  name: "listDisplay",
  initialState: {
    isList: true,
  },
  reducers: {
    changeDisplay: (state) => {
      state.isList = !state.isList;
    },
  },
});
export const { changeDisplay } = listDisplaySlice.actions;
export default listDisplaySlice.reducer;
