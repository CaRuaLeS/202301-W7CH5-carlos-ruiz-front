import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../reducer/users.slice";

export const store = configureStore({
  reducer: {
    users: userSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
