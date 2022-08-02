import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginRequest } from "./loginAPI";
import { toast } from "react-toastify";

const initialState = {
    value: {},
    status: "idle",
};

export const loginAsync = createAsyncThunk(
    "login/loginRequest",
    async (amount) => {
        const response = await loginRequest(amount);
        return response.data;
    }
);

export const loginSlice = createSlice({
    name: "login",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(loginAsync.pending, (state) => {
                state.status = "loading";
            })
            .addCase(loginAsync.fulfilled, (state, action) => {
                state.status = "idle";
                state.value = action.payload;

                toast.success("You're successfully logged in!");
                setTimeout(() => {
                    window.location.href = "/profile";
                }, 2000);
            })
            .addCase(loginAsync.rejected, (state, action) => {
                state.status = "error";
                toast.warn(
                    (action.error && action.error.message) ||
                        "Oops! Something went wrong. Please try again!"
                );
            });
    },
});

export const selectLogin = (state) => state.login.value;

export default loginSlice.reducer;
