import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import orderService from "./orderService";
import { toast } from "react-toastify";

const initialState = {
  order: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

// place Order
export const placeOrder = createAsyncThunk(
  "order/placeOrder",
  async (orderDetails, thunkAPI) => {
    try {
      return await orderService.placeOrder(orderDetails);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);


const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // placeOrder
      .addCase(placeOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(placeOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        console.log("jvjhvjh");
        state.order = action.payload;
        toast.success(action.payload.message);
      })
      .addCase(placeOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
  },
});

export default orderSlice.reducer;
