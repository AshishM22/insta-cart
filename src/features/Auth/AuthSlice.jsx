import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { createUser, checkUser } from "./AuthApi"

const initialState = {
  loggedInUser: null,
  status: "idle",
  error: null,
}

// This is action we created

export const createUserAsync = createAsyncThunk(
  "user/createUser",
  async (userData) => {
    const response = await createUser(userData)
    console.log(userData)
    return response.data
  },
)
export const checkUserAsync = createAsyncThunk(
  "user/checkUser",
  async (userData) => {
    const response = await checkUser(userData)
    console.log(userData)
    return response.data
  },
)

export const productSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(createUserAsync.pending, (state) => {
        state.status = "loading"
      })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        state.status = "idle"
        state.loggedInUser = action.payload
      })
      .addCase(checkUserAsync.pending, (state) => {
        state.status = "loading"
      })
      .addCase(checkUserAsync.fulfilled, (state, action) => {
        state.status = "idle"
        state.loggedInUser = action.payload
      })
      .addCase(checkUserAsync.rejected, (state, action) => {
        state.status = "idle"
        state.error = action.error
      })
  },
})

export const selectLoggedInUser = (state) => state.auth.loggedInUser
export const selectError = (state) => state.auth.error

export default productSlice.reducer