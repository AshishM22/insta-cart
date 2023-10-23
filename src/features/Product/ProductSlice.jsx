import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchAllProducts, fetchProductsByFilter } from "./ProductAPI"

const initialState = {
  products: [],
  status: "idle",
  totalItems: 0,
}

// This is action we created
export const fetchAllproductAsync = createAsyncThunk(
  "product/fetchAllProducts",
  async () => {
    const response = await fetchAllProducts()
    console.log(response)
    // The value we return becomes the `fulfilled` action payload
    return response.data
  },
)
export const fetchProductsByFilterAsync = createAsyncThunk(
  "product/fetchProductsByFilter",
  async ({ filter, pagination }) => {
    const response = await fetchProductsByFilter(filter, pagination)

    return response.data
  },
)

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllproductAsync.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchAllproductAsync.fulfilled, (state, action) => {
        state.status = "loading"
        state.products = action.payload
      })
      .addCase(fetchProductsByFilterAsync.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchProductsByFilterAsync.fulfilled, (state, action) => {
        state.status = "loading"
        state.products = action.payload.products
        state.totalItems = action.payload.totalItems
      })
  },
})

export const selectAllProducts = (state) => state.product.products
export const selectAllItems = (state) => state.product.totalItems

export default productSlice.reducer
