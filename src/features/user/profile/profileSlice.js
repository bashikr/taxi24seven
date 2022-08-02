import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCurrentUser } from "./profileAPI";
import { toast } from "react-toastify";

const initialState = {
    profileObj: {},
    status: "idle",
};

export const profileAsync = createAsyncThunk(
    "profile/profileRequest",
    async () => {
        const response = await getCurrentUser();
        return response.data;
    }
);

export const profileSlice = createSlice({
    name: "profile",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(profileAsync.pending, (state) => {
                state.status = "loading";
            })
            .addCase(profileAsync.fulfilled, (state, action) => {
                state.status = "idle";
                state.profileObj = action.payload;
            })
            .addCase(profileAsync.rejected, (state, action) => {
                state.status = "error";

                toast.warn(
                    (action.error && action.error.message) ||
                        "Oops! Something went wrong. Please try again!"
                );
            });
    },
});

export const selectProfile = (state) => state.profile.profileObj;

export default profileSlice.reducer;
