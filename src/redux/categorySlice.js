import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { build } from "vite";

const initialState = {
  categories: [],
};

export const getCategories = createAsyncThunk("category", async () => {
  const response = await fetch("https://fakestoreapi.com/products/categories");
  const data = response.json();
  return data;
});

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

export default categoriesSlice.reducer;
