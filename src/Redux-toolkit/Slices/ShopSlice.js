import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../configuration";

export const fetchProduct = createAsyncThunk("fetchProduct", async () => {
  try {
    const response = await axios.get(`${baseUrl}/shop`);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
});

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const shopSlicevalue = shopSlice.reducer;
