import { configureStore } from "@reduxjs/toolkit";
import { packageReducer } from "./packages";

export const store = configureStore({
  reducer: {
    packageData:packageReducer
  },
});

export type State = typeof store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export default store;
