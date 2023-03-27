import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/articleReducer";
const store = configureStore({
  reducer: {
    articles: articleReducer,
  },
});
export default store;
