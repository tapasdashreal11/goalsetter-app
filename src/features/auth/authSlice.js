import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import e from "cors";

//Get user from localstorage

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ?? null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {},
  },
  extraReducers: () => {},
});

const {
  actions: { reset },
  reducer,
} = authSlice;

export { authSlice, reducer, reset };
