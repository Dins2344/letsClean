import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
interface packageData {
    name: string,
        price:string,
}

const initialState = {
  packages: {},
};

const packageSlice = createSlice({
  name: "packageData",
  initialState,
  reducers: {
    setPackage(
      state,
      action: PayloadAction<{ packageData:packageData  }>
    ) {
      state.packages = { packages: action.payload };
    },
    clearPackage(state) {
      state.packages = {};
    },
  },
});

export const { setPackage, clearPackage } = packageSlice.actions;

export const selectPackage = (state: RootState) => state.packageData.packages;

export const packageReducer = packageSlice.reducer;
