import { configureStore } from "@reduxjs/toolkit";
import listDisplayReducer from "./listDisplaySlice";
import articlesReducer from "./articlesSlice";
export default configureStore({
  reducer: {
    listDisplay: listDisplayReducer,
    articles: articlesReducer,
  },
});
