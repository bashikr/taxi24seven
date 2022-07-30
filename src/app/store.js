import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import aboutReducer from '../features/about/aboutSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    about: aboutReducer,
  },
});
