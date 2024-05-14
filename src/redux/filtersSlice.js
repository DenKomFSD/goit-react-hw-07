import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    filters: {
      name: "",
    },
  },
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const selectTextFilter = (state) => state.filters.name;
export const { changeFilter } = slice.actions;
export default slice.reducer;
