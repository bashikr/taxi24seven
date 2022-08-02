import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signupRequest } from "./signupAPI";
import { toast } from "react-toastify";

const initialState = {
    value: {},
    status: "idle",
};

export const signupAsync = createAsyncThunk(
    "signup/signupRequest",
    async (amount) => {
        const response = await signupRequest(amount);
        return response.data;
    }
);

export const signupSlice = createSlice({
    name: "signup",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(signupAsync.pending, (state) => {
                state.status = "loading";
            })
            .addCase(signupAsync.fulfilled, (state, action) => {
                state.status = "idle";
                state.value += action.payload;
                toast.success(
                    "You're successfully registered. Please login to continue!"
                );
                setTimeout(() => {
                    window.location.href = "/login";
                }, 2000);
            })
            .addCase(signupAsync.rejected, (state, action) => {
                state.status = "error";
                toast.warn(
                    (action.error && action.error.message) ||
                        "Oops! Something went wrong. Please try again!"
                );
            });
    },
});

export default signupSlice.reducer;
