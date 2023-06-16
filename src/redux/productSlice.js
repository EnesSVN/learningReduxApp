import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";

const initialState = {
  products: [],
  productStatus: STATUS.IDLE,
  productDetail: [],
  productDetailStatus: STATUS.IDLE,
};

export const getPrdocts = createAsyncThunk("getProducts", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
});

export const getDetailProduct = createAsyncThunk(
  "getDetailProduct",
  async (id) => {
    const response = await fetch("https://fakestoreapi.com/products" + id);
    const data = await response.json();
    return data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPrdocts.pending, (state, action) => {
        state.productStatus = STATUS.LOADING;
      })
      .addCase(getPrdocts.fulfilled, (state, action) => {
        state.productStatus = STATUS.SUCCEEDED;
        state.products = action.payload;
      })
      .addCase(getPrdocts.rejected, (state, action) => {
        state.productStatus = STATUS.FAILED;
      })
      .addCase(getDetailProduct.pending, (state, action) => {
        state.productDetailStatus = STATUS.LOADING;
      })
      .addCase(getDetailProduct.fulfilled, (state, action) => {
        state.productDetailStatus = STATUS.SUCCEEDED;
        state.productDetail = action.payload;
      })
      .addCase(getDetailProduct.rejected, (state, action) => {
        state.productDetailStatus = STATUS.FAILED;
      });
  },
});

export default productSlice.reducer;
