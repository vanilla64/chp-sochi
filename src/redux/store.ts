import { configureStore } from "@reduxjs/toolkit";
import { burgerSlice } from "./slices/burgerSlice";

export const store = configureStore({
  reducer: {
    burgerReducer: burgerSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
