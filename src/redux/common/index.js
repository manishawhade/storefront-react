import { createSlice } from "@reduxjs/toolkit";

let INITIAL_STATE = {
  CATALOG_ID: null,
  OUTLINE: null,
};

const commonSlice = createSlice({
  name: "example",
  initialState: INITIAL_STATE,
  reducers: {
    addCatalogId: (state, action) => {
      state.CATALOG_ID = action.payload;
      localStorage.setItem("CATALOG_ID", action.payload);
    },
    addOutline: (state, action) => {
      state.OUTLINE = action.payload;
      localStorage.setItem("OUTLINE", action.payload);
    },
  },
});

export default commonSlice.reducer;
export const { addCatalogId, addOutline } = commonSlice.actions;
