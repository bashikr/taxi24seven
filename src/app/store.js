import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import signupReducer from "../features/user/signup/signupSlice";
import loginReducer from "../features/user/login/loginSlice";
import profileReducer from "../features/user/profile/profileSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        signup: signupReducer,
        login: loginReducer,
        profile: profileReducer,
    },
});
