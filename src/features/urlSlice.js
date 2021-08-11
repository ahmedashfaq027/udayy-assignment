import { createSlice } from "@reduxjs/toolkit";

export const urlSlice = createSlice({
  name: "urls",
  initialState: {
    url1: "",
    url2: "",
  },
  reducers: {
    setUrl1: (state, action) => {
      state.url1 = action.payload.url1;
    },
    setUrl2: (state, action) => {
      state.url2 = action.payload.url2;
    },
  },
});

export const { setUrl1, setUrl2 } = urlSlice.actions;

export const selectUrl1 = (state) => state.urls.url1;
export const selectUrl2 = (state) => state.urls.url2;

export default urlSlice.reducer;
