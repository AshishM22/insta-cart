import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import {
  addToCart,
  fetchItemsByUserId,
  updateCart,
  deleteItemFromCart,
} from "./CartAPI"

const initialState = {
  status: "idle",
  items: [],
}

export const addToCartAsync = createAsyncThunk(
  "cart/addToCart",
  async (item) => {
    const response = await addToCart(item)
    return response.data
  },
)

export const fetchItemsByUserIdAsync = createAsyncThunk(
  "cart/fetchItemsByUserId",
  async (userId) => {
    const response = await fetchItemsByUserId(userId)
    return response.data
  },
)
export const updateCartAsync = createAsyncThunk(
  "cart/updateCart",
  async (update) => {
    const response = await updateCart(update)
    return response.data
  },
)
export const deleteItemFromCartAsync = createAsyncThunk(
  "cart/deleteItemFromCart",
  async (id) => {
    console.log(id)
    const response = await deleteItemFromCart(id)
    console.log(response.data)
    return response.data
  },
)
export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addToCartAsync.pending, (state) => {
      state.status = "loading"
    })
    builder.addCase(addToCartAsync.fulfilled, (state, action) => {
      state.status = "idle"
      state.items.push(action.payload)
    })
    builder.addCase(fetchItemsByUserIdAsync.pending, (state) => {
      state.status = "loading"
    })
    builder.addCase(fetchItemsByUserIdAsync.fulfilled, (state, action) => {
      state.status = "idle"
      state.items = action.payload
    })
    builder.addCase(updateCartAsync.pending, (state) => {
      state.status = "loading"
    })
    builder.addCase(updateCartAsync.fulfilled, (state, action) => {
      state.status = "idle"
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id,
      )
      state.items[index] = action.payload
    })
    builder.addCase(deleteItemFromCartAsync.pending, (state) => {
      state.status = "loading"
    })
    builder.addCase(deleteItemFromCartAsync.fulfilled, (state, action) => {
      state.status = "idle"
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id,
      )
      state.items.splice(index, 1)
    })
  },
})

export const selectCartItems = (state) => state.cart.items

export default CartSlice.reducer
