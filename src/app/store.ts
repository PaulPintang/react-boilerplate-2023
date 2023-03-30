import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import authReducer from "../features/auth/authSlice";
import userReducer from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    counter: counterReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
