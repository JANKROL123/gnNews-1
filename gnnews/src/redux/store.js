import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "./reducers/articleReducer";
const store = configureStore({
  reducer: {
    articles: articleReducer,
  },
});
export default store;
