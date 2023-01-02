import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "react-router-dom";
import { toast } from "react-toastify";

//Get user from localstorage
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ?? null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//Register User

export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      await authService.register(user);
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(regitser.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(register.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

const {
  actions: { reset },
  reducer: authReducer,
} = authSlice;

export { authSlice, authReducer, reset };
