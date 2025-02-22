import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import orderService from "./orderService";
import { toast } from "react-toastify";

const initialState = {
  order: null,
  orders: null,
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

// get Orders
export const getOrders = createAsyncThunk(
  "order/getOrders",
  async ( _ , thunkAPI) => {
    try {
      return await orderService.getOrders();
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
// get Admin Orders
export const getAdminOrders = createAsyncThunk(
  "order/getAdminOrders",
  async ( _ , thunkAPI) => {
    try {
      return await orderService.getAdminOrders();
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
// updateOrderStatus
export const updateOrderStatus = createAsyncThunk(
  "order/updateOrderStatus",
  async (updatedData , thunkAPI) => {
    try {
      return await orderService.updateOrderStatus(updatedData);
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
      .addCase(placeOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(placeOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.order = action.payload;
        toast.success(action.payload.message);
      })
      .addCase(placeOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(getOrders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.orders = action.payload;
        toast.success(action.payload.message);
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      // getAdminOrders
      .addCase(getAdminOrders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAdminOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.orders = action.payload;
        toast.success(action.payload.message);
      })
      .addCase(getAdminOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      // updateOrderStatus
      .addCase(updateOrderStatus.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateOrderStatus.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        // console.log(action.payload);
        state.order = action.payload.order;
        state.orders = state.orders.map((order)=> order._id === action.payload?.order._id ? action.payload.order : order);
        toast.success(action.payload.message);
      })
      .addCase(updateOrderStatus.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
  },
});

export default orderSlice.reducer;
