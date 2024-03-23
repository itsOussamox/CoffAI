import { configureStore } from "@reduxjs/toolkit";
import { promptSlice } from "./promptSlice";

export const store = configureStore({
    reducer: {
        prompt: promptSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;