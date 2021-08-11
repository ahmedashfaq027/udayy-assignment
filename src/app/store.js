import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import urlReducer from "../features/urlSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    urls: urlReducer,
  },
});
