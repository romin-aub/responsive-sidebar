import { configureStore } from "@reduxjs/toolkit";
import breadcrumbReducer from "./breadcrumb-slice";

export const store = configureStore({
  reducer: {
    breadcrumb: breadcrumbReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
