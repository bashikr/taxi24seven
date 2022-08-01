import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import signupReducer from "../features/user/signup/signupSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        signup: signupReducer,
    },
});
