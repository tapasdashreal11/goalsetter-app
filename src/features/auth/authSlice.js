import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = "";
    },
  },
  extraReducers: () => {},
});

const {
  actions: { reset },
  reducer: authReducer,
} = authSlice;

export { authSlice, authReducer, reset };
