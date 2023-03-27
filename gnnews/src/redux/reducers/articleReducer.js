import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: true,
};
export const articleSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setList: (state) => {
      state.value = true;
    },
    setTiles: (state) => {
      state.value -= false;
    },
  },
});

export const { setList, setTiles } = counterSlice.actions;
export default articleSlice.reducer;
