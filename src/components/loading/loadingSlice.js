import { createSlice } from "@reduxjs/toolkit";

const initialState = true;
const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    setLoading(state, action) {
      state = action.payload;
      return state
    },
  },
})
export const { setLoading } = loaderSlice.actions
export const loading = loaderSlice.reducer